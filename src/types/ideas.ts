export interface Ideas {
  projects: Project[]
}

export interface Project {
  title: string
  short_description: string
  description: string
  difficulty: string
  suggested_technologies: SuggestedTechnology[]
}

export interface SuggestedTechnology {
  name: string
}