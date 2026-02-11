import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import BokehEffects from "@/components/BokehEffects";
import GlassSection from "@/components/GlassSection";
import CountdownTimer from "@/components/CountdownTimer";
import Hero3D from "@/components/Hero3D";
import PasswordGate from "@/components/PasswordGate";
import heroBg from "@/assets/hero-bg.jpg";
const loveReasons = ["Il tuo bellissimo sorriso mi scoglie", "La tua risata è irresistibile", "Ogni momento con te è un momento unico, come te", "Sei la persona più bella che conosca, dentro e fuori", "Con te ogni giorno diventa stupendo"];
const Index = () => {
  const [unlocked, setUnlocked] = useState(false);
  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }
  return <AnimatePresence>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1
    }} className="relative min-h-screen overflow-hidden bg-background">
        {/* Background image */}
        <div className="fixed inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <BokehEffects />
        <FloatingHearts />

        {/* Content */}
        <div className="relative z-10">
          <Hero3D />

          {/* Love Letter */}
          <section className="px-4 pb-20 max-w-2xl mx-auto">
            <GlassSection>
              <h2 className="text-3xl md:text-4xl font-bold rose-gradient-text mb-8 text-center">
                La mia lettera per te
              </h2>
              <div className="space-y-5 text-lg md:text-xl text-foreground/80 leading-relaxed italic">
                <p>Jenny, amore mio,</p>
                <p>
                  Da quando sei entrata nella mia vita, non faccio altro che pensarti tutti i giorni.
                  Sei l'amore della mia vita e voglio che ti senta protetta e al sicuro con me.
                </p>
                <p>
                  Sei perfetta e aprezzo e aprezzerò tutti i momenti che abbiamo passato e che passeremo assieme.
                  Con te riesco a essere sempre me stesso e divertirmi per tutta la giornata.
                </p>
                <p>Ti amo più di quanto le parole possano esprimere. ♥</p>
              </div>
            </GlassSection>
          </section>

          {/* Reasons */}
          <section className="px-4 pb-20 max-w-2xl mx-auto">
            <motion.h2 initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} className="text-3xl md:text-4xl font-bold rose-gradient-text text-center mb-10">
              Perchè ti amo
            </motion.h2>
            <div className="space-y-4">
              {loveReasons.map((reason, i) => <GlassSection key={i} delay={i * 0.1} className="flex items-center gap-4">
                  <span className="text-accent text-2xl shrink-0">♥</span>
                  <p className="text-lg md:text-xl text-foreground/80 italic">{reason}</p>
                </GlassSection>)}
            </div>
          </section>

          {/* Countdown */}
          <section className="px-4 pb-20 max-w-2xl mx-auto">
            <GlassSection>
              <CountdownTimer />
            </GlassSection>
          </section>

          {/* Footer */}
          <section className="px-4 pb-24 max-w-2xl mx-auto">
            <GlassSection className="text-center">
              <motion.div animate={{
              scale: [1, 1.1, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="text-5xl mb-6">
                💕
              </motion.div>
              <p className="text-2xl md:text-3xl font-bold rose-gradient-text mb-3">
                Per sempre tuo
              </p>
              <p className="text-foreground/50 text-lg">Con tutto il mio amore </p>
            </GlassSection>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>;
};
export default Index;