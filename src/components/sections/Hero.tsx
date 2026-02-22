import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const stepIn = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: 'linear' as const },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center scanlines overflow-hidden">
      <div className="relative z-10 text-center px-6">
        <motion.p
          {...stepIn(0.1)}
          className="text-xs tracking-[0.25em] text-text-muted uppercase mb-6"
        >
          <span className="text-green/70">{'>'}</span> full-stack developer
        </motion.p>

        <motion.h1
          {...stepIn(0.2)}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight crt-glow mb-4"
        >
          Iulian Leon
        </motion.h1>

        <motion.p
          {...stepIn(0.35)}
          className="text-sm sm:text-base text-text-secondary max-w-lg mx-auto mb-3"
        >
          Main quest: web dev. Side quest: everything else
          <span className="blink text-green ml-0.5">_</span>
        </motion.p>

        <motion.p
          {...stepIn(0.5)}
          className="text-xs text-text-muted"
        >
          symfony &middot; vue.js &middot; typescript &middot; python &middot; docker
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#projects"
          className="flex flex-col items-center gap-1 text-text-muted hover:text-text-secondary transition-colors"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">scroll</span>
          <ChevronDown size={16} className="animate-pulse" />
        </a>
      </motion.div>
    </section>
  )
}
