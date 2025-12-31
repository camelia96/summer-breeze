import { ReactNode } from "react";

export const briefImgs = [
  { id: 1, alt: "Brief 1", src: "/img/brief-1.png", w: 250, h: 250 },
  { id: 2, alt: "Brief 2", src: "/img/brief-2.png", w: 250, h: 250 },
  { id: 3, alt: "Brief 3", src: "/img/brief-3.png", w: 250, h: 250 },
];

interface Project {
  id: number;
  title: string;
  location: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Backyard Garden Design",
    location: "Residential Area",
  },
  {
    id: 1,
    title: "Front Yard Landscape",
    location: "Suburban Home",
  },
  {
    id: 2,
    title: "Small Garden Project",
    location: "City Residence",
  },
  {
    id: 3,
    title: "Family Garden Design",
    location: "Family Home",
  },
  {
    id: 4,
    title: "Modern Garden Layout",
    location: "Contemporary House",
  },
  {
    id: 5,
    title: "Traditional Garden Design",
    location: "Classic Home",
  },
];

export const services: Service[] = [
  {
    icon: "Fence",
    title: "Garden design",
    description:
      "A comprehensive design service for residential gardens of all sizes. We begin with a detailed site study, exploring your goals, architectural context, and natural features. The result is a bespoke concept that blends structure, flow, and planting into a cohesive and timeless layout.",
  },
  {
    icon: "Flower",
    title: "Planting design",
    description:
      "Thoughtfully composed planting schemes that evolve with the seasons. We select species that complement your space, climate, and maintenance preferences—creating layers of texture, color, and movement that deepen the character of yden over time.",
  },
  {
    icon: "Pencil Ruler",
    title: "Design advice",
    description:
      "For clients seeking guidance rather than a full design package, we offer tailored consultations. These sessions focus on refining ideas, assessing challenges, and providing expert direction to help you plan with clarity and confidence.",
  },
];
