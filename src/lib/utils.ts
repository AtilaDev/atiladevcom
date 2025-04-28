import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "work", path: "/work" },
  { name: "separator", path: "", separator: true, mobile: true },
  {
    name: "Email",
    path: "mailto:lfavre82@gmail.com?subject=Contact from Portfolio&body=Hello Leandro, ",
    mobile: true,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/leandro-f-7a06a8171/",
    mobile: true,
  },
  { name: "X", path: "https://x.com/FavreLeandro", mobile: true },
];
