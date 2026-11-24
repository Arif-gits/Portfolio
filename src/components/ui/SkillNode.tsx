import { motion, type MotionStyle } from 'framer-motion'
import type { SkillDomain } from '@/types'

interface SkillNodeProps {
  domain: SkillDomain
  isActive: boolean
  onSelect: (id: string) => void
  onHoverStart?: (id: string) => void
  style?: MotionStyle
}

export function SkillNode({ domain, isActive, onSelect, onHoverStart, style }: SkillNodeProps) {
  return (
    <motion.button
      type="button"
      style={style}
      onClick={() => onSelect(domain.id)}
      onMouseEnter={() => onHoverStart?.(domain.id)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative flex flex-col items-center justify-center rounded-full border px-4 py-4 text-center transition-colors duration-200 focus-visible:outline-none
        w-[110px] h-[110px] sm:w-[128px] sm:h-[128px]
        ${
          isActive
            ? 'border-signal bg-signal/10 shadow-signal'
            : 'border-line bg-panel/60 hover:border-signal/60'
        }`}
      aria-pressed={isActive}
      aria-label={`${domain.name}, ${domain.level}`}
    >
      <span
        className={`absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full ${
          domain.status === 'active' ? 'bg-signal animate-pulseDot' : 'bg-ash-700'
        }`}
      />
      <span className="font-display text-sm font-semibold text-white leading-tight px-1">
        {domain.name}
      </span>
      <span className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-ash-500 group-hover:text-signal transition-colors">
        {domain.level}
      </span>
    </motion.button>
  )
}
