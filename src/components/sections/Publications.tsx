import { motion } from 'framer-motion'
import { publications } from '@/data/publications'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Publications() {
  return (
    <section id="publications" className="py-24 sm:py-32 border-t border-line/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Research & Publications"
          title="Registry-scale data, clinical stakes"
          description="Undergraduate research applying ensemble ML to a real clinical prediction problem."
        />

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-line bg-panel/60 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-signal border border-signal/30 bg-signal/5 rounded-full px-2.5 py-1">
                  {pub.status}
                </span>
                <span className="font-mono text-xs text-ash-500">{pub.date}</span>
              </div>

              <h3 className="font-display text-xl font-semibold text-white leading-snug mb-2">
                {pub.title}
              </h3>
              <p className="text-sm text-ash-500 mb-4">{pub.authors.join(', ')}</p>

              <p className="text-sm text-ash-100 leading-relaxed mb-5">{pub.abstract}</p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ash-500 mb-1">
                    Research Area
                  </p>
                  <p className="text-sm text-ash-100">{pub.researchArea}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ash-500 mb-1.5">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pub.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-black px-2.5 py-1 text-xs text-ash-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
