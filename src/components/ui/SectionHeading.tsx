import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-12 max-w-2xl"
    >
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {description && <p className="mt-4 text-ash-300 leading-relaxed">{description}</p>}
    </motion.div>
  )
}
