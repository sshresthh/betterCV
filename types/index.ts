
export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string; // Added year field
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface CV {
  title: string; // Added title field
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
}

export type CVFormData = CV & { id?: string };
