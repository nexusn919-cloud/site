import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
const Hero3D = () => {
  return <section className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Deep ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] rounded-full" style={{
        width: 400,
        height: 400,
        background: "radial-gradient(circle, hsl(340 70% 50% / 0.15), transparent 70%)",
        filter: "blur(80px)"
      }} />
        <div className="absolute bottom-[15%] right-[10%] rounded-full" style={{
        width: 350,
        height: 350,
        background: "radial-gradient(circle, hsl(280 60% 45% / 0.1), transparent 70%)",
        filter: "blur(100px)"
      }} />
        <div className="absolute top-[10%] right-[25%] rounded-full" style={{
        width: 200,
        height: 200,
        background: "radial-gradient(circle, hsl(20 70% 55% / 0.08), transparent 70%)",
        filter: "blur(60px)"
      }} />
      </div>

      <ParticleField />

      {/* Floating decorative elements - depth layers */}
      <motion.div animate={{
      y: [-15, 15, -15],
      rotate: [0, 5, 0]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="absolute top-[18%] left-[8%] text-4xl md:text-5xl opacity-20" style={{
      filter: "blur(2px) drop-shadow(0 0 15px hsl(340 80% 60% / 0.4))"
    }}>
        ♡
      </motion.div>

      <motion.div animate={{
      y: [10, -20, 10],
      rotate: [0, -8, 0]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }} className="absolute top-[25%] right-[12%] text-3xl opacity-15" style={{
      filter: "blur(3px) drop-shadow(0 0 12px hsl(340 80% 60% / 0.3))"
    }}>
        ♥
      </motion.div>

      <motion.div animate={{
      y: [-8, 12, -8],
      x: [-5, 5, -5]
    }} transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }} className="absolute bottom-[25%] left-[12%] text-2xl opacity-25" style={{
      filter: "blur(1px) drop-shadow(0 0 10px hsl(350 60% 70% / 0.4))"
    }}>
        ✦
      </motion.div>

      <motion.div animate={{
      y: [12, -10, 12],
      rotate: [0, 10, 0]
    }} transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 3
    }} className="absolute bottom-[30%] right-[8%] text-5xl opacity-10" style={{
      filter: "blur(4px) drop-shadow(0 0 20px hsl(340 80% 60% / 0.3))"
    }}>
        ♡
      </motion.div>

      {/* Central 3D volumetric heart */}
      <div className="relative z-10 text-center max-w-3xl">
        <motion.div initial={{
        opacity: 0,
        scale: 0.5
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1.5,
        ease: "easeOut"
      }} className="relative mb-8">
          {/* Heart glow base */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{
          width: 180,
          height: 180,
          background: "radial-gradient(circle, hsl(340 80% 55% / 0.3), transparent 70%)",
          filter: "blur(40px)"
        }} />
          <motion.div animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 2, -2, 0]
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="relative text-7xl md:text-8xl" style={{
          filter: "drop-shadow(0 10px 30px hsl(340 80% 55% / 0.5)) drop-shadow(0 0 60px hsl(340 80% 60% / 0.25))",
          textShadow: "0 0 40px hsl(340 80% 60% / 0.6), 0 5px 15px hsl(0 0% 0% / 0.5)"
        }}>
            ♥
          </motion.div>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.5
      }} className="text-5xl md:text-7xl lg:text-8xl font-bold rose-gradient-text text-glow mb-6 leading-tight text-center">
          ᴘᴇʀ ᴛᴇ, ᴊᴇɴɴʏ
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="text-xl md:text-2xl text-foreground/60 font-light italic leading-relaxed">
          Che mi fai diventare pazzo ogni giorno.
        </motion.p>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 2,
        duration: 1
      }} className="mt-14">
          <span className="text-muted-foreground text-xs tracking-[0.35em] uppercase">
            Scorri verso il basso
          </span>
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="mt-3 text-accent/60 text-lg">
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero3D;