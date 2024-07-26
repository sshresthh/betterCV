
export interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
  linkedin?: string;
  website?: string;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
}

export interface Language {
  name: string;
  proficiency: "Basic" | "Conversational" | "Fluent" | "Native";
}

export interface Reference {
  name: string;
  position: string;
  company: string;
  email: string;
  phone?: string;
}

export interface CV {
  userData: UserData;
  summary: string;
  education: Education[];
  workExperience: WorkExperience[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  interests: string[];
  references: Reference[];
}

export interface CVFormData extends CV {
  id?: string;
}

export interface GeneratePDFResponse {
  id: string;
  pdfUrl: string;
}

export type CVTemplateStyle =
  | "modern"
  | "classic"
  | "creative"
  | "professional";

export interface CVGenerationOptions {
  templateStyle: CVTemplateStyle;
  color: string;
  font: string;
}
