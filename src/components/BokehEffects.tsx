const BokehEffects = () => {
  const circles = [
    { size: 120, top: "10%", left: "5%", opacity: 0.07 },
    { size: 200, top: "20%", right: "10%", opacity: 0.05 },
    { size: 80, top: "60%", left: "15%", opacity: 0.08 },
    { size: 160, top: "70%", right: "5%", opacity: 0.06 },
    { size: 100, top: "40%", left: "60%", opacity: 0.04 },
    { size: 60, top: "85%", left: "40%", opacity: 0.09 },
    { size: 140, top: "5%", left: "50%", opacity: 0.05 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {circles.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: c.size,
            height: c.size,
            top: c.top,
            left: c.left,
            right: (c as any).right,
            opacity: c.opacity,
            background: `radial-gradient(circle, hsl(340 80% 60% / 0.6), transparent 70%)`,
            filter: "blur(30px)",
          }}
        />
      ))}
    </div>
  );
};

export default BokehEffects;
