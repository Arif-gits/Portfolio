// ---------- Skills ----------

export type MasteryStatus = 'completed' | 'learning' | 'future'

export interface SkillConcept {
  label: string
  status: MasteryStatus
}

export type SkillLevel = 'Foundational' | 'Intermediate' | 'Advanced'

export interface SkillDomain {
  id: string
  name: string
  level: SkillLevel
  status: 'active' | 'dormant'
  summary: string
  concepts: SkillConcept[]
  projectSlugs: string[]
  links?: { label: string; url: string }[]
}

// ---------- Projects ----------

export type ProjectCategory =
  | 'Machine Learning'
  | 'Deep Learning'
  | 'Computer Vision'
  | 'Natural Language Processing'
  | 'Data Analysis'
  | 'Research'

export interface Project {
  slug: string
  name: string
  categories: ProjectCategory[]
  shortDescription: string
  problemStatement: string
  dataset: string
  algorithms: string[]
  technologies: string[]
  evaluationMetrics: string[]
  challenges: string
  githubUrl?: string
  liveDemoUrl?: string
  reportUrl?: string
}

// ---------- Experience ----------

export interface ExperienceEntry {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string // 'Present' allowed
  location: string
  description: string
  responsibilities: string[]
  technologies: string[]
  achievements: string[]
}

// ---------- Education ----------

export interface EducationEntry {
  id: string
  institution: string
  credential: string
  startDate: string
  endDate: string
  score: string
  coursework?: string[]
  achievements?: string[]
  research?: string
}

// ---------- Publications ----------

export type PublicationStatus = 'Published' | 'Under Review' | 'Thesis — Completed' | 'In Progress'

export interface Publication {
  id: string
  title: string
  authors: string[]
  status: PublicationStatus
  abstract: string
  researchArea: string
  technologies: string[]
  date: string
  links?: { label: string; url: string }[]
}

// ---------- Contact ----------

export interface ContactInfo {
  email: string
  location: string
  github: { label: string; url: string }
  linkedin: { label: string; url: string }
  website?: { label: string; url: string }
  resumeUrl: string
}
