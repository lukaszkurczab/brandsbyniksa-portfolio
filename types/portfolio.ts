export type ProjectCategory = "Branding" | "Social Media" | "Foto & Video";

export type Project = {
  slug: string;
  name: string;
  scope: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  coverToneClass: string;
};

export type ServiceGroup = {
  title: string;
  description: string;
  items: string[];
  accentClass: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  brand: string;
  scope: string;
};

export type MediaItem = {
  title: string;
  type: "Foto" | "Video";
  toneClass: string;
  spanClass: string;
};
