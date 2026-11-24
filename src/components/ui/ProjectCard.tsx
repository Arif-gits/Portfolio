import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Github, ExternalLink, FileText } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

function DetailRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wider text-ash-500 mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-panel px-2.5 py-1 text-xs text-ash-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      className="rounded-2xl border border-line bg-panel/60 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
        aria-expanded={expanded}
      >
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="font-mono text-[10px] uppercase tracking-wider text-signal border border-signal/30 bg-signal/5 rounded-full px-2 py-0.5"
              >
                {cat}
              </span>
            ))}
          </div>
          <h3 className="font-display text-lg font-semibold text-white leading-snug">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-ash-300 leading-relaxed">{project.shortDescription}</p>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="mt-1 shrink-0 text-ash-500"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-5 border-t border-line pt-5">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ash-500 mb-2">
                  Problem Statement
                </p>
                <p className="text-sm text-ash-100 leading-relaxed">{project.problemStatement}</p>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ash-500 mb-2">
                  Dataset
                </p>
                <p className="text-sm text-ash-100 leading-relaxed">{project.dataset}</p>
              </div>

              <DetailRow label="Algorithms" items={project.algorithms} />
              <DetailRow label="Technologies" items={project.technologies} />
              <DetailRow label="Evaluation Metrics" items={project.evaluationMetrics} />

              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ash-500 mb-2">
                  Challenges
                </p>
                <p className="text-sm text-ash-100 leading-relaxed">{project.challenges}</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ash-100 hover:text-signal transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ash-100 hover:text-signal transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.reportUrl && (
                  <a
                    href={project.reportUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ash-100 hover:text-signal transition-colors"
                  >
                    <FileText size={16} /> Report
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
