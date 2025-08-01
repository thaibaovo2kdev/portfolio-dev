export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "hyper-game-server",
    title: "Hyper Game Server",
    category: "Backend System",
    shortDescription:
      "High-performance game server backend supporting 15M+ Android & iOS users with scalable game logic.",
    description: [
      "Developed and optimized a high-performance game server backend that supports over 15 million Android and iOS users simultaneously. The system ensures high availability and exceptional performance under heavy load conditions.",
      "Engineered comprehensive game logic including sophisticated reward calculation systems, secure random number generation (RNG), robust error handling mechanisms, and detailed analytics hooks for business intelligence.",
      "The architecture was designed with scalability in mind, utilizing modern backend technologies and cloud infrastructure to handle massive concurrent user loads while maintaining sub-second response times.",
    ],
    features: [
      "Support for 15M+ concurrent users across Android & iOS platforms",
      "Scalable game logic with advanced reward calculation",
      "Comprehensive error handling and logging",
      "Real-time analytics and reporting hooks",
      "High availability architecture with 99.9% uptime",
      "Auto-scaling capabilities based on user load",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "RabbitMQ","Docker", "AWS", "WebSocket", "JWT", "IAP Google & Apple", "Google Ads SDK"],
    coverImage: "/finance-dashboard-cover.png",
    thumbnailImage: "/modern-finance-app.png",
    timeline: "8 months (Oct 2024 - Present)",
    role: "Backend Developer",
    client: "Playad Company",
    relatedProjects: [
      {
        slug: "typespark-app",
        title: "Typespark AI Keyboard App",
        category: "Mobile App",
        image: "/typespark-cover.png",
      },
      {
        slug: "game-cms-platform",
        title: "Game CMS Platform",
        category: "Web Application",
        image: "/modern-finance-overview.png",
      },
    ],
  },
  {
    id: 2,
    slug: "game-cms-platform",
    title: "Game CMS Platform",
    category: "Web Application",
    shortDescription:
      "Multiple CMS platforms for managing game data, ad tracking, user access control, and reporting dashboards.",
    description: [
      "Designed and implemented multiple Content Management System (CMS) platforms specifically tailored for game data management. These platforms provide comprehensive tools for managing game content, tracking advertising performance, and controlling user access.",
      "The CMS includes sophisticated reporting dashboards that provide real-time insights into game performance, user behavior, and revenue metrics. The system supports role-based access control ensuring secure data management.",
    ],
    features: [
      "Comprehensive game data management interface",
      "Real-time ad tracking and performance analytics",
      "Role-based user access control system",
      "Interactive reporting dashboards with data visualization",
      "Automated data backup and recovery systems",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Redis",
    ],
    coverImage: "/modern-finance-overview.png",
    thumbnailImage: "/modern-finance-overview.png",
    timeline: "7 months (Oct 2024 - May 2025)",
    role: "Full-stack Developer",
    client: "Playad Company",
    relatedProjects: [
      {
        slug: "typespark-app",
        title: "Typespark AI Keyboard App",
        category: "Mobile App",
        image: "/typespark-cover.png",
      },
      {
        slug: "hyper-game-server",
        title: "Hyper Game Server",
        category: "Backend System",
        image: "/finance-dashboard-cover.png",
      },
    ],
  },
  {
    id: 3,
    slug: "typespark-app",
    title: "Typespark AI Keyboard App",
    category: "Mobile App / CMS Platform",
    shortDescription: "AI-powered iOS keyboard app integrated with GPT, Claude, and Gemini models, featuring a robust CMS and full backend infrastructure.",
    description: [
      "Led the backend and fullstack CMS development team for the Typespark app — an AI-enhanced iOS keyboard application designed to improve messaging efficiency through intelligent text generation.",
      "Developed the backend system to integrate with multiple AI models (GPT, Claude, Gemini), allowing real-time message regeneration based on dynamic prompt configurations managed from the admin panel.",
      "Implemented a secure authentication system including email/password login, Google OAuth, and Apple Sign-In, while integrating monetization through Google/Apple IAP and Google Ads SDK.",
      "Built a comprehensive CMS dashboard enabling real-time management of user data, AI request tracking, prompt/model configurations, usage analytics, and in-app shop control.",
    ],
    features: [
      "AI-based keyboard message suggestions using GPT, Claude, and Gemini",
      "Dynamic prompt configuration and model switching via CMS",
      "OAuth login via Google, Apple, and email/password authentication",
      "In-app purchases (Google & Apple IAP integration)",
      "Google Ads SDK integration",
      "Admin CMS for user & request tracking, analytics, cost calculation",
      "Shop & subscription management with model-based pricing options",
      "Role-based access and audit logs",
    ],
    technologies: [
      "Nest.js",
      "Node.js",
      "React.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Firebase",
      "Google Ads SDK",
      "Apple IAP",
      "OpenAI API",
      "Anthropic Claude",
      "Gemini API"
    ],
    coverImage: "/typespark-cover.png",
    thumbnailImage: "/typespark-cover.png",
    timeline: "4 months (Apr 2025 – Aug 2025)",
    role: "Lead Backend & Fullstack CMS Developer",
    client: "Typespark",
    relatedProjects: [
      {
        slug: "hyper-game-server",
        title: "Hyper Game Server",
        category: "Backend System",
        image: "/finance-dashboard-cover.png",
      },
      {
        slug: "game-cms-platform",
        title: "Game CMS Platform",
        category: "Web Application",
        image: "/modern-finance-overview.png",
      },
    ],
  }
  
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
