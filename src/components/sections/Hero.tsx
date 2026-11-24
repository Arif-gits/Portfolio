import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react'
import { scrollToSection } from '@/utils/scroll'
import { contact } from '@/data/contact'

const QUICK_LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Ambient floating nodes — quiet, not flashy */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-[18%] left-[8%] h-2 w-2 rounded-full bg-signal/60"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[64%] left-[85%] h-1.5 w-1.5 rounded-full bg-signal/40"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-[30%] left-[92%] h-1 w-1 rounded-full bg-ash-300/50"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[80%] left-[15%] h-1.5 w-1.5 rounded-full bg-ash-300/40"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="container-page relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow mb-6"
        >
          Dhaka, Bangladesh — Open to ML/AI roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]"
        >
          Howdy! It&rsquo;s <span className="text-gradient">Arif</span>.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-3 font-display text-2xl sm:text-3xl text-ash-300 font-medium"
        >
          Machine Learning Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-ash-300 leading-relaxed"
        >
          Fresh Computer Science graduate from BRAC University with a machine-learning thesis on
          predicting heart-transplant rejection from registry data. Currently sharpening
          problem-solving instincts as an ERP Functional Analyst, while building toward a
          full-time career in applied ML — one evaluated model at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href={contact.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-ash-100 hover:border-signal hover:text-signal transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={contact.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-ash-100 hover:border-signal hover:text-signal transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={contact.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-signal px-4 py-2.5 text-sm font-medium text-white hover:bg-signal-dim transition-colors shadow-signal"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2"
        >
          {QUICK_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-mono uppercase tracking-wider text-ash-500 hover:text-signal transition-colors"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection('experience')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ash-500 hover:text-signal transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to Experience"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}
