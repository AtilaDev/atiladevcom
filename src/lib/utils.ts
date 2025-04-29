import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "work", path: "/work" },
];
