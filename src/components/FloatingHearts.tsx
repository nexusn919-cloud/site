import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "filled" | "outline" | "golden";
}

const heartSymbols: Record<Heart["type"], string> = {
  filled: "♥",
  outline: "♡",
  golden: "♡",
};

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const types: Heart["type"][] = ["filled", "filled", "outline", "golden"];
    const generated: Heart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 12,
      opacity: Math.random() * 0.35 + 0.1,
      type: types[Math.floor(Math.random() * types.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={`absolute ${heart.type === "golden" ? "text-yellow-400/60" : "text-accent"}`}
          style={{
            left: `${heart.left}%`,
            bottom: "-20px",
            fontSize: `${heart.size}px`,
            animation: `float ${heart.duration}s ease-in ${heart.delay}s infinite`,
            opacity: heart.opacity,
            textShadow: heart.type === "golden" ? "0 0 8px rgba(234,179,8,0.4)" : undefined,
          }}
        >
          {heartSymbols[heart.type]}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
