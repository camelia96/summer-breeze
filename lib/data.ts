import { Project, Service } from "./types";

export const briefImgs = [
  { id: 1, alt: "Brief 1", src: "/img/brief-1.png", w: 250, h: 250 },
  { id: 2, alt: "Brief 2", src: "/img/brief-2.png", w: 250, h: 250 },
  { id: 3, alt: "Brief 3", src: "/img/brief-3.png", w: 250, h: 250 },
];


export const projects: Project[] = [
  {
    id: 0,
    title: "Backyard Garden Design",
    year: "2025",
    location: "Residential Area",
  },
  {
    id: 1,
    title: "Front Yard Landscape",
    year: "2026",
    location: "Suburban Home",
  },
  {
    id: 2,
    title: "Small Garden Project",
    year: "2019",
    location: "City Residence",
  },
  {
    id: 3,
    title: "Family Garden Design",
    year: "2024",
    location: "Family Home",
  },
  {
    id: 4,
    title: "Modern Garden Layout",
    year: "2021",
    location: "Contemporary House",
  },
  {
    id: 5,
    title: "Traditional Garden Design",
    year: "2018",
    location: "Classic Home",
  },
  {
    id: 6,
    title: "Urban Rooftop Garden",
    year: "2016",
    location: "Urban Rooftop",
  },
  {
    id: 7,
    title: "Coastal Garden Retreat",
    year: "2025",
    location: "Coastal Villa",
  },
  {
    id: 8,
    title: "Mountain Landscape Design",
    year: "2025",
    location: "Mountain Cabin",
  },
  {
    id: 9,
    title: "Country Style Garden",
    year: "2023",
    location: "Countryside Cottage",
  },
  {
    id: 10,
    title: "Lakeside Garden Project",
    year: "2024",
    location: "Lakeside House",
  },
  {
    id: 11,
    title: "Historic Garden Restoration",
    year: "2022",
    location: "Historic Townhouse",
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
