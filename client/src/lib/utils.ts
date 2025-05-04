import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(
  number: number,
  options: Intl.NumberFormatOptions = {}
) {
  return new Intl.NumberFormat("en-US", options).format(number);
}

export function truncateText(text: string, length: number = 100) {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

export function isExternalLink(url: string) {
  return url.startsWith("http") || url.startsWith("//");
}

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
