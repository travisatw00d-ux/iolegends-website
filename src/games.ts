// The game catalog. Add a game here and it shows up on the home page.
export type Game = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  cover: string;
  status: "Playable demo" | "Live" | "In the workshop" | "Windows download";
  /** The button: "Play <title>" if not given. */
  cta?: string;
  players: string;
  tags: string[];
};

export const GAMES: Game[] = [
  {
    slug: "knotquitethere",
    title: "Knot Quite There",
    tagline: "Get over everything with a pole, a rope and your friends.",
    description:
      "A physics playground about getting over things, together. Pole-vault boxes, climb trees, throw a grappling hook over walls and haul your friends up after you. Host a game and send your friends the code; no server, no lag.",
    href: "/knotquitethere",
    cover: "/covers/knotquitethere.png",
    status: "Windows download",
    players: "Up to 10 friends with a code",
    tags: ["3D", "Physics", "Co-op"],
    cta: "Get Knot Quite There",
  },
  {
    slug: "nutfall",
    title: "Nutfall",
    tagline: "Get down the tree without cracking your shell.",
    description:
      "You're an acorn at the top of a giant oak. Hop across branches, land on leaves that bend under you, bounce off fungus shelves, and make it to the forest floor in one piece.",
    href: "/nutfall/",
    cover: "/covers/nutfall.png",
    status: "Playable demo",
    players: "Solo for now · co-op for up to 10 coming",
    tags: ["3D", "Physics", "Platformer"],
  },
  {
    slug: "siegebreak",
    title: "Siege Break",
    tagline: "Wall in your keep, smash theirs, patch the holes before time runs out.",
    description:
      "A tribute to arcade Rampart. Pick a keep and a timber palisade goes up around it. Set down catapults, lob stones at your friends' walls for 20 seconds, then race the clock to patch the gaps with falling-block pieces. Close the loop or you're conquered. Host a lobby and send a 5-letter friend code; bots fill empty seats.",
    href: "/siegebreak/",
    cover: "/covers/siegebreak.png",
    status: "Playable demo",
    players: "2–9 players with a friend code · bots",
    tags: ["2D", "Strategy", "Multiplayer"],
  },
];
