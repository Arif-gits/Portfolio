import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToSection } from '@/utils/scroll'
import { contact } from '@/data/contact'

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const ALL_SECTION_IDS = ['hero', ...NAV_ITEMS.map((i) => i.id)]

export function Navbar() {
  const activeId = useActiveSection(ALL_SECTION_IDS)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <button
          onClick={() => handleNavClick('hero')}
          className="font-display text-sm font-semibold tracking-wide text-ash-100 hover:text-signal transition-colors"
          aria-label="Go to top"
        >
          ARIF<span className="text-signal">.</span>ML
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeId === item.id ? 'text-white' : 'text-ash-300 hover:text-ash-100'
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-px bg-signal shadow-signal"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={contact.github.url}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ash-300 hover:text-signal transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={contact.linkedin.url}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ash-300 hover:text-signal transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <button
          className="md:hidden text-ash-100"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-line bg-black/95 backdrop-blur-md"
        >
          <ul className="container-page flex flex-col py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 text-sm font-medium border-b border-line/60 last:border-none ${
                    activeId === item.id ? 'text-signal' : 'text-ash-300'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  )
}
