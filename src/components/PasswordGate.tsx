import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PasswordGateProps {
  onUnlock: () => void;
}

const PasswordGate = ({ onUnlock }: PasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === "persempretuo") {
      setUnlocking(true);
      setTimeout(() => onUnlock(), 800);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <AnimatePresence>
      {!unlocking ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 500,
                height: 500,
                background: "radial-gradient(circle, hsl(340 80% 55% / 0.12), transparent 70%)",
                filter: "blur(80px)",
              }}
            />
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 text-center px-6 max-w-sm w-full"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl mb-8"
              style={{ filter: "drop-shadow(0 0 20px hsl(340 80% 60% / 0.5))" }}
            >
              🔒
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-bold rose-gradient-text mb-3">
              La sai la password?
            </h2>
            <p className="text-muted-foreground text-sm mb-8 italic">
              Se non te l'ho ancora detta,non dovresti essere qui.
            </p>

            <div className="relative mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="La parola magica..."
                className="w-full px-5 py-3.5 rounded-xl glass-card-strong text-foreground text-center text-lg placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-accent/40 transition-all bg-transparent border-0"
                autoFocus
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl glass-card-strong rose-gradient-text font-bold text-lg tracking-wide hover:shadow-[0_0_30px_hsl(340_80%_60%/0.3)] transition-shadow"
            >
              Entra ♥
            </motion.button>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-accent text-sm mt-4 italic"
                >
                  Non ci provare 
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl"
          >
            ♥
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PasswordGate;
