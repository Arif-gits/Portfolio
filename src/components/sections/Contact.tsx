import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Globe, Download, Send } from 'lucide-react'
import { contact } from '@/data/contact'
import { SectionHeading } from '@/components/ui/SectionHeading'

const LINK_ITEMS = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: contact.location, href: undefined },
  { icon: Github, label: contact.github.label, href: contact.github.url },
  { icon: Linkedin, label: contact.linkedin.label, href: contact.linkedin.url },
  ...(contact.website ? [{ icon: Globe, label: contact.website.label, href: contact.website.url }] : []),
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about an ML role"
          description="Open to internships, junior ML/AI positions, and research collaboration."
        />

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {LINK_ITEMS.map(({ icon: Icon, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-line bg-panel/60 px-4 py-3.5 text-sm text-ash-100 hover:border-signal hover:text-signal transition-colors"
                >
                  <Icon size={16} className="shrink-0" />
                  {label}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-line bg-panel/60 px-4 py-3.5 text-sm text-ash-300"
                >
                  <Icon size={16} className="shrink-0" />
                  {label}
                </div>
              ),
            )}
            <a
              href={contact.resumeUrl}
              download
              className="flex items-center gap-3 rounded-xl bg-signal px-4 py-3.5 text-sm font-medium text-white hover:bg-signal-dim transition-colors shadow-signal"
            >
              <Download size={16} className="shrink-0" />
              Download Resume
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wider text-ash-500">
                Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-line bg-black px-3.5 py-2.5 text-sm text-white placeholder:text-ash-700 focus:border-signal transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wider text-ash-500">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-line bg-black px-3.5 py-2.5 text-sm text-white placeholder:text-ash-700 focus:border-signal transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wider text-ash-500">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-line bg-black px-3.5 py-2.5 text-sm text-white placeholder:text-ash-700 focus:border-signal transition-colors resize-none"
                placeholder="What would you like to talk about?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white hover:bg-signal-dim transition-colors shadow-signal"
            >
              <Send size={15} /> Send message
            </button>
            <p className="text-xs text-ash-500 pt-1">
              Opens your email client with this message pre-filled — no backend required.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
