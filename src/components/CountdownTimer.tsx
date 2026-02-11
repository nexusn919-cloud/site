import { useState, useEffect } from "react";
const TARGET_DATE = new Date("2025-06-20T00:00:00");
const CountdownTimer = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  const diff = now.getTime() - TARGET_DATE.getTime();
  const isPast = diff >= 0;
  const absDiff = Math.abs(diff);
  const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(absDiff / (1000 * 60 * 60) % 24);
  const minutes = Math.floor(absDiff / (1000 * 60) % 60);
  const seconds = Math.floor(absDiff / 1000 % 60);
  const units = [{
    label: "Giorni",
    value: days
  }, {
    label: "Ore",
    value: hours
  }, {
    label: "Minuti",
    value: minutes
  }, {
    label: "Secondi",
    value: seconds
  }];
  return <div className="text-center">
      <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
        {isPast ? "Insieme da" : "Mancano al nostro giorno"}
      </p>
      <div className="flex justify-center gap-3 md:gap-5">
        {units.map(u => <div key={u.label} className="flex flex-col items-center">
            <div className="glass-card-strong rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold rose-gradient-text">
                {String(u.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-2 tracking-wider uppercase">
              {u.label}
            </span>
          </div>)}
      </div>
      
    </div>;
};
export default CountdownTimer;