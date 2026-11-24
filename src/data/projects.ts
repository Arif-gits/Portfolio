import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'medical-image-segmentation',
    name: 'Medical Image Segmentation and Classification using U-Net and Attention U-Net',
    categories: ['Deep Learning', 'Computer Vision'],
    shortDescription:
      'Segmentation and classification pipeline for medical imagery, comparing a baseline U-Net against an Attention U-Net variant.',
    problemStatement:
      'Accurately delineating anatomical structures or pathology in medical scans is time-intensive for clinicians and error-prone when done manually at scale. The goal was to build a pipeline that segments regions of interest and classifies them, and to test whether attention gating improves localization over a standard U-Net.',
    dataset: 'Medical imaging dataset (scan-level segmentation masks + classification labels).',
    algorithms: ['U-Net', 'Attention U-Net', 'Convolutional Neural Networks'],
    technologies: ['Python', 'PyTorch', 'NumPy', 'Matplotlib'],
    evaluationMetrics: ['Dice Coefficient', 'IoU', 'Pixel Accuracy', 'Classification Accuracy'],
    challenges:
      'Class imbalance between foreground/background pixels and limited data made segmentation boundaries noisy; addressed by tuning the loss function and comparing attention gating against the plain U-Net baseline to see where it actually earned its extra complexity.',
    githubUrl: 'https://github.com/Arif-gits',
  },
  {
    slug: 'gmvae-beta-vae-comparison',
    name: 'Comparative Analysis of GMVAE and Beta-VAE for Unsupervised Clustering and Representation Learning',
    categories: ['Machine Learning', 'Research'],
    shortDescription:
      'Head-to-head study of Gaussian Mixture VAE and Beta-VAE for learning disentangled, cluster-friendly latent representations without labels.',
    problemStatement:
      'Unsupervised representation learning methods make different tradeoffs between reconstruction quality, disentanglement, and cluster structure in the latent space. This project quantifies those tradeoffs between GMVAE and Beta-VAE on the same data and evaluation protocol.',
    dataset: 'Image dataset used for unsupervised representation learning and clustering benchmarks.',
    algorithms: ['Gaussian Mixture VAE (GMVAE)', 'Beta-VAE', 'Unsupervised Clustering'],
    technologies: ['Python', 'PyTorch', 'NumPy', 'Scikit-learn', 'Matplotlib', 'GPU Computing'],
    evaluationMetrics: ['Clustering Accuracy', 'Reconstruction Loss', 'Latent Space Disentanglement'],
    challenges:
      'Balancing the KL-divergence weighting in Beta-VAE against reconstruction fidelity, and getting GMVAE\'s mixture components to align with true clusters rather than collapsing, required careful hyperparameter sweeps on GPU.',
    githubUrl: 'https://github.com/Arif-gits',
  },
  {
    slug: 'emotion-detection-twitter',
    name: "Multi-Class Emotion Detection from Twitter Text using Supervised Learning Models on 'Emotion' Dataset",
    categories: ['Natural Language Processing', 'Machine Learning'],
    shortDescription:
      'Supervised multi-class classifier that labels the emotion expressed in short-form Twitter text.',
    problemStatement:
      'Free-form social text carries emotional signal that is useful for sentiment-aware applications, but is noisy, informal, and unevenly distributed across emotion classes. The task was to build and evaluate classical supervised models that reliably separate multiple emotion categories from raw tweet text.',
    dataset: "'Emotion' dataset — labeled Twitter text across multiple emotion classes.",
    algorithms: ['Supervised Classification', 'Feature Engineering on Text', 'Model Comparison'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    evaluationMetrics: ['Accuracy', 'Precision', 'Recall', 'F1-Score', 'Confusion Matrix'],
    challenges:
      'Class imbalance across emotion categories and noisy, informal tweet text (slang, abbreviations, emojis) required deliberate preprocessing and metric choices that don\'t get flattered by the majority class.',
    githubUrl: 'https://github.com/Arif-gits',
  },
]
