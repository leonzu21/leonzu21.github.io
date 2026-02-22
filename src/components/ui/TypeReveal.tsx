import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import type { ReactNode } from 'react'

interface TypeRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function TypeReveal({ children, delay = 0, className }: TypeRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.3, delay, ease: 'linear' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
