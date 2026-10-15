// iolegends.com worker: serves the static site, plus a tiny multiplayer relay.
//
// /net/room/<CODE>?role=host|guest  (WebSocket)
//   One Durable Object per friend code. The host's browser runs the game; the room just passes
//   messages: guests -> host (tagged with the guest's id), host -> one guest or everyone.
//   Control messages from the room start with "#".

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const m = url.pathname.match(/^\/net\/room\/([A-Za-z0-9]{4,8})$/);
    if (m) {
      if (request.headers.get('Upgrade') !== 'websocket') return new Response('Expected a WebSocket', { status: 426 });
      const room = env.ROOMS.get(env.ROOMS.idFromName(m[1].toUpperCase()));
      return room.fetch(request);
    }
    return env.ASSETS.fetch(request);
  },
};

const MAX_GUESTS = 8;                      // host + 8 = 9 players (id 9 is the demo buddy)
const send = (ws, s) => { try { ws?.send(s); } catch { /* socket already gone */ } };
const control = (ws, obj) => send(ws, '#' + JSON.stringify(obj));

export class Room {
  constructor(ctx, env) {
    this.ctx = ctx;
    this.host = null;
    this.guests = new Map();              // id -> WebSocket
  }

  async fetch(request) {
    const role = new URL(request.url).searchParams.get('role');
    const [client, ws] = Object.values(new WebSocketPair());
    ws.accept();
    if (role === 'host') this.addHost(ws);
    else this.addGuest(ws);
    return new Response(null, { status: 101, webSocket: client });
  }

  addHost(ws) {
    if (this.host) { control(ws, { t: 'error', reason: 'taken' }); ws.close(1000, 'taken'); return; }
    this.host = ws;
    control(ws, { t: 'hosting' });
    ws.addEventListener('message', (e) => {
      const s = String(e.data), bar = s.indexOf('|');
      if (bar < 0) return;
      const to = s.slice(0, bar), payload = s.slice(bar + 1);
      if (to === 'all') for (const g of this.guests.values()) send(g, payload);
      else send(this.guests.get(Number(to)), payload);
    });
    const end = () => {
      if (this.host !== ws) return;
      this.host = null;
      for (const g of this.guests.values()) { control(g, { t: 'hostLeft' }); try { g.close(1000, 'host left'); } catch { /* gone */ } }
      this.guests.clear();
    };
    ws.addEventListener('close', end);
    ws.addEventListener('error', end);
  }

  addGuest(ws) {
    if (!this.host) { control(ws, { t: 'error', reason: 'nogame' }); ws.close(1000, 'no game'); return; }
    let id = 1;
    while (this.guests.has(id) && id <= MAX_GUESTS) id++;
    if (id > MAX_GUESTS) { control(ws, { t: 'error', reason: 'full' }); ws.close(1000, 'full'); return; }
    this.guests.set(id, ws);
    control(ws, { t: 'welcome', id });
    control(this.host, { t: 'join', id });
    ws.addEventListener('message', (e) => send(this.host, id + '|' + e.data));
    const end = () => {
      if (this.guests.get(id) !== ws) return;
      this.guests.delete(id);
      control(this.host, { t: 'leave', id });
    };
    ws.addEventListener('close', end);
    ws.addEventListener('error', end);
  }
}
