import Image from "next/image";

type ZombieProps = {
  tier?: 1 | 2;
  className?: string;
};

const T1 = {
  head: { src: "/sprites/zombiehead.png", w: 637, h: 686 },
  left: { src: "/sprites/zombielefthand.png", w: 295, h: 360 },
  right: { src: "/sprites/zombierighthand.png", w: 302, h: 370 },
  headPx: 150,
};

const T2 = {
  head: { src: "/sprites/T2zombiehead.png", w: 766, h: 708 },
  left: { src: "/sprites/T2zombielefthand.png", w: 294, h: 366 },
  right: { src: "/sprites/T2zombierighthand.png", w: 293, h: 366 },
  headPx: 168,
};

export function ZombieFigure({ tier = 1, className = "" }: ZombieProps) {
  const d = tier === 2 ? T2 : T1;
  const headPx = d.headPx;
  const headW = Math.round((d.head.w * headPx) / d.head.h);
  const headTop = 16;
  const headCx = headW / 2 + 18;
  const headCy = headTop + headPx / 2;

  const k = headPx / 40;
  const handFactor = 0.05 * k * (tier === 2 ? 1.1 : 1);
  const leftHandW = Math.round(d.left.w * handFactor);
  const leftHandH = Math.round(d.left.h * handFactor);
  const rightHandW = Math.round(d.right.w * handFactor);
  const rightHandH = Math.round(d.right.h * handFactor);

  const off = 20 * k;
  const fwd = 16 * k;
  const leftCx = headCx + off;
  const leftCy = headCy + fwd;
  const rightCx = headCx - off;
  const rightCy = headCy + fwd;

  const boxW = Math.max(headCx + off + leftHandW / 2, headCx + headW / 2) + 18;
  const boxH = Math.max(leftCy + leftHandH / 2, headTop + headPx) + 18;

  return (
    <div
      className={`relative ${className}`}
      style={{ width: boxW, height: boxH }}
      aria-hidden="true"
    >
      <Image
        src={d.head.src}
        alt=""
        width={headW}
        height={headPx}
        className="absolute"
        style={{ left: headCx - headW / 2, top: headTop }}
        priority={tier === 1}
      />
      <Image
        src={d.left.src}
        alt=""
        width={leftHandW}
        height={leftHandH}
        className="absolute"
        style={{ left: leftCx - leftHandW / 2, top: leftCy - leftHandH / 2 }}
      />
      <Image
        src={d.right.src}
        alt=""
        width={rightHandW}
        height={rightHandH}
        className="absolute"
        style={{ left: rightCx - rightHandW / 2, top: rightCy - rightHandH / 2 }}
      />
    </div>
  );
}

type PlayerProps = {
  color?: string;
  topKiller?: boolean;
  size?: number;
  swordRotation?: number;
  className?: string;
};

export function PlayerFigure({
  color = "#4ECDC4",
  topKiller = false,
  size = 120,
  swordRotation = -40,
  className = "",
}: PlayerProps) {
  const swordPx = Math.round(size * 1.7);
  const half = size / 2;
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src="/sprites/woodensword.png"
        alt=""
        width={swordPx}
        height={swordPx}
        className="absolute"
        style={{
          left: half - swordPx / 2,
          top: half - swordPx / 2,
          transform: `rotate(${swordRotation}deg)`,
          transformOrigin: "center",
        }}
        priority
      />
      <div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          border: `${Math.max(3, size / 40)}px solid ${
            topKiller ? "#FFD700" : "#1a1a22"
          }`,
          boxShadow: topKiller
            ? "0 0 0 2px rgba(255,215,0,0.25), 0 0 24px rgba(255,215,0,0.35)"
            : "none",
          zIndex: 2,
        }}
      />
    </div>
  );
}

export function HealthBar({
  pct,
  tone = "green",
  width = 80,
}: {
  pct: number;
  tone?: "green" | "red";
  width?: number;
}) {
  const color = tone === "green" ? "#4ade80" : pct > 0.5 ? "#4ade80" : pct > 0.25 ? "#fbbf24" : "#ef4444";
  return (
    <div
      className="rounded-sm"
      style={{ width, height: 6, background: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="h-full rounded-sm transition-all"
        style={{ width: `${Math.max(0, Math.min(1, pct)) * 100}%`, background: color }}
      />
    </div>
  );
}
