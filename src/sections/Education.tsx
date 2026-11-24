import { motion } from 'framer-motion'
import { education } from '@/data/education'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-line/60">
      <div className="container-page">
        <SectionHeading eyebrow="Education" title="Where the foundation was built" />

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-panel/60 p-6 flex flex-col"
            >
              {(edu.startDate || edu.endDate) && (
                <span className="font-mono text-xs uppercase tracking-wider text-signal mb-3">
                  {edu.startDate} {edu.startDate && edu.endDate ? '—' : ''} {edu.endDate}
                </span>
              )}
              <h3 className="font-display text-base font-semibold text-white leading-snug mb-1">
                {edu.institution}
              </h3>
              <p className="text-sm text-ash-300 mb-3">{edu.credential}</p>
              <p className="font-mono text-xs text-signal mb-4">{edu.score}</p>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mb-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ash-500 mb-1.5">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-line bg-black px-2.5 py-1 text-xs text-ash-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.research && (
                <p className="text-sm text-ash-100 leading-relaxed mt-auto pt-3 border-t border-line">
                  {edu.research}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
