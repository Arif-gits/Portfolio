import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Publications } from '@/components/sections/Publications'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'
import { contact } from '@/data/contact'

function Footer() {
  return (
    <footer className="border-t border-line/60 py-8">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-ash-500">
          &copy; {new Date().getFullYear()} Arif Bin Islam. Built from scratch, hosted for free.
        </p>
        <a
          href={contact.github.url}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-ash-500 hover:text-signal transition-colors"
        >
          View source on GitHub
        </a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
