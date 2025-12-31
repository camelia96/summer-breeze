import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


 
// Images redimension for optimization
export const redimension = `&w=700+dpr=2`;;