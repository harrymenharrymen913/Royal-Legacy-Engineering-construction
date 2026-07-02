export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  year: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  image: string;
  specs: {
    label: string;
    value: string;
  }[];
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface SafetyPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  message: string;
}
