export interface GardenImage {
  id: string;
  urls: {
    full: string;
    regular: string;
    small: string;
  };
  alt_description: string;
  width: number;
  height: number;
}

export type GardenCard = GardenImage & { title: string; location: string };

export interface HeaderLink {
  title: string;
  link: string;
}