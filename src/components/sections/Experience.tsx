import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Learning to reason about systems, on the job"
          description="One role so far — but it's already taught me to trace discrepancies to root cause across an unfamiliar system, fast."
        />

        <div className="relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />

          <ol className="space-y-14">
            {experience.map((entry, i) => (
              <motion.li
                key={entry.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="relative pl-10 sm:pl-12"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-signal bg-black shadow-signal" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {entry.position}
                    </h3>
                    <p className="text-sm text-ash-300">
                      {entry.company} · {entry.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-signal shrink-0">
                    {entry.startDate} — {entry.endDate}
                  </span>
                </div>

                <p className="text-sm text-ash-300 leading-relaxed mb-4">{entry.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {entry.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-ash-100 leading-relaxed flex gap-2">
                      <span className="text-signal shrink-0">—</span>
                      {r}
                    </li>
                  ))}
                </ul>

                {entry.achievements.length > 0 && (
                  <div className="mb-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ash-500 mb-1.5">
                      Key Takeaways
                    </p>
                    <ul className="space-y-1.5">
                      {entry.achievements.map((a) => (
                        <li key={a} className="text-sm text-ash-100 leading-relaxed flex gap-2">
                          <span className="text-signal shrink-0">✓</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {entry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-panel px-2.5 py-1 text-xs text-ash-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
