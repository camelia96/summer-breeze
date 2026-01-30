export interface GardenImage {
  id: string;
  urls: {
    full: string;
    regular: string;
    small: string;
    raw: string;
  };
  alt_description: string;
  width: number;
  height: number;
}

export interface Project {
  id: number;
  title: string;
  year: string;
  location: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export type GardenCard = GardenImage &
  Pick<Project, "location" | "title" | "year">;

export interface HeaderLink {
  title: string;
  link: string;
}
