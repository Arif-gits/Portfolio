import type { EducationEntry } from '@/types'

export const education: EducationEntry[] = [
  {
    id: 'bracu',
    institution: 'BRAC University, Bangladesh',
    credential: 'B.Sc. in Computer Science',
    startDate: '2022',
    endDate: 'Jun 2026',
    score: 'CGPA 3.35',
    coursework: [
      'Machine Learning',
      'Data Structures & Algorithms',
      'Database Systems',
      'Artificial Intelligence',
      'Data Mining & Analytics',
    ],
    research:
      'Thesis: Comprehensive Analysis of Ensemble Machine Learning Methods for Predicting 1-, 3- and 5-Year Rejection After Heart Transplantation Using UNOS Registry Data.',
  },
  {
    id: 'gsc',
    institution: 'Government Science College, Dhaka',
    credential: 'Higher Secondary Certificate (HSC), Science',
    startDate: '',
    endDate: '',
    score: 'GPA 5.00',
  },
  {
    id: 'muvc',
    institution: 'Monipur Uchcha Vidyalaya and College, Branch-3, Dhaka',
    credential: 'Secondary School Certificate (SSC), Science',
    startDate: '',
    endDate: '',
    score: 'GPA 5.00',
  },
]
