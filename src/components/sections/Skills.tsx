import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '@/data/skills'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillNode } from '@/components/ui/SkillNode'
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice'
import type { MasteryStatus } from '@/types'

const STATUS_META: Record<MasteryStatus, { icon: string; className: string; label: string }> = {
  completed: { icon: '✓', className: 'text-signal', label: 'Mastered' },
  learning: { icon: '◐', className: 'text-ash-100', label: 'Currently learning' },
  future: { icon: '○', className: 'text-ash-700', label: 'On the roadmap' },
}

// Deterministic radial layout — each domain gets an angle around a 400x400 ring,
// connected to its neighbors so the map reads as a network, not a list.
function useConstellationLayout(count: number) {
  return useMemo(() => {
    const center = 200
    const radius = 148
    const points = Array.from({ length: count }, (_, i) => {
      const angle = (2 * Math.PI * i) / count - Math.PI / 2
      return {
        x: center + radius * Math.cos(angle),
        y: center + radius * Math.sin(angle),
      }
    })
    // connect each node to its immediate neighbor, plus a skip-one connection
    const edges: [number, number][] = []
    for (let i = 0; i < count; i++) {
      edges.push([i, (i + 1) % count])
      if (count > 4) edges.push([i, (i + 2) % count])
    }
    return { points, edges, center, radius }
  }, [count])
}

export function Skills() {
  const [selectedId, setSelectedId] = useState<string>(skills[0]?.id ?? '')
  const isTouch = useIsTouchDevice()
  const { points, edges } = useConstellationLayout(skills.length)

  const selected = skills.find((s) => s.id === selectedId) ?? skills[0]
  const relatedProjects = projects.filter((p) => selected?.projectSlugs.includes(p.slug))

  const handleInteract = (id: string) => setSelectedId(id)

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-line/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skill Mastery Map"
          title="A live map, not a list of buzzwords"
          description={`${isTouch ? 'Tap' : 'Hover or click'} a domain to open its knowledge tree — every concept is marked mastered, in progress, or upcoming.`}
        />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          {/* Desktop constellation */}
          <div className="relative hidden sm:block mx-auto w-full max-w-[420px] aspect-square">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              {edges.map(([a, b], i) => (
                <line
                  key={i}
                  x1={points[a].x}
                  y1={points[a].y}
                  x2={points[b].x}
                  y2={points[b].y}
                  stroke="#232326"
                  strokeWidth={1}
                  strokeDasharray="3 5"
                />
              ))}
            </svg>
            {skills.map((domain, i) => (
              <SkillNode
                key={domain.id}
                domain={domain}
                isActive={selectedId === domain.id}
                onSelect={handleInteract}
                onHoverStart={!isTouch ? handleInteract : undefined}
                style={{
                  position: 'absolute',
                  left: `${(points[i].x / 400) * 100}%`,
                  top: `${(points[i].y / 400) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </div>

          {/* Mobile: wrapped grid, tap-driven */}
          <div className="flex sm:hidden flex-wrap gap-3 justify-center">
            {skills.map((domain) => (
              <SkillNode
                key={domain.id}
                domain={domain}
                isActive={selectedId === domain.id}
                onSelect={handleInteract}
              />
            ))}
          </div>

          {/* Live detail panel */}
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-line bg-panel/60 p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="font-display text-xl font-semibold text-white">{selected.name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-signal border border-signal/30 bg-signal/5 rounded-full px-2.5 py-1 shrink-0">
                    {selected.level}
                  </span>
                </div>
                <p className="text-sm text-ash-300 mb-5">{selected.summary}</p>

                <ul className="space-y-2 mb-5">
                  {selected.concepts.map((concept) => {
                    const meta = STATUS_META[concept.status]
                    return (
                      <li key={concept.label} className="flex items-center gap-2.5 text-sm">
                        <span className={`font-mono w-4 text-center ${meta.className}`}>
                          {meta.icon}
                        </span>
                        <span className={concept.status === 'future' ? 'text-ash-500' : 'text-ash-100'}>
                          {concept.label}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                {relatedProjects.length > 0 && (
                  <div className="pt-4 border-t border-line">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ash-500 mb-2">
                      Applied in
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {relatedProjects.map((p) => (
                        <a
                          key={p.slug}
                          href="#projects"
                          className="text-sm text-ash-100 hover:text-signal transition-colors"
                        >
                          → {p.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {selected.links && selected.links.length > 0 && (
                  <div className="pt-4 border-t border-line mt-4 flex flex-wrap gap-3">
                    {selected.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="text-sm text-ash-300 hover:text-signal transition-colors underline decoration-line underline-offset-4"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
