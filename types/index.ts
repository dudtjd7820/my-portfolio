export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin?: string;
  mindset?: string[];
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  period?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  date: string;
}

export interface Study {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  description?: string;
  achievements?: string[];
}
