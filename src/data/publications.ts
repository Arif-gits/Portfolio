import type { Publication } from '@/types'

export const publications: Publication[] = [
  {
    id: 'heart-transplant-thesis',
    title:
      'Comprehensive Analysis of Ensemble Machine Learning Methods for Predicting 1-, 3- and 5-Year Rejection After Heart Transplantation Using UNOS Registry Data',
    authors: ['Arif Bin Islam'],
    status: 'Thesis — Completed',
    abstract:
      'Undergraduate thesis evaluating ensemble machine learning methods to predict short- and mid-term (1-, 3-, and 5-year) graft rejection following heart transplantation, using registry-scale data from the United Network for Organ Sharing (UNOS). The work compares ensemble approaches for predictive performance and interpretability in a clinical risk-prediction setting.',
    researchArea: 'Applied Machine Learning in Healthcare',
    technologies: ['Python', 'Scikit-learn', 'Ensemble Methods', 'Explainable AI'],
    date: 'BRAC University, 2022 – Jun 2026',
  },
]
