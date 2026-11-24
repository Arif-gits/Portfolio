import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import type { ProjectCategory } from '@/types'

const ALL: 'All' = 'All'

export function Projects() {
  const categories = useMemo(() => {
    const set = new Set<ProjectCategory>()
    projects.forEach((p) => p.categories.forEach((c) => set.add(c)))
    return [ALL, ...Array.from(set)] as (ProjectCategory | typeof ALL)[]
  }, [])

  const [activeCategory, setActiveCategory] = useState<ProjectCategory | typeof ALL>(ALL)

  const filtered = projects.filter(
    (p) => activeCategory === ALL || p.categories.includes(activeCategory),
  )

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Work that shows the reasoning, not just the result"
          description="Each card expands into the full write-up: problem statement, data, methods, metrics, and what actually went wrong."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors border ${
                activeCategory === cat
                  ? 'border-signal bg-signal/10 text-signal'
                  : 'border-line text-ash-300 hover:border-signal/50 hover:text-ash-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
