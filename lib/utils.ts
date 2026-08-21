import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type PricingRegion = "IN" | "INTL";

export function getRegionFromCountry(country: string | null): PricingRegion {
  return country === "IN" ? "IN" : "INTL";
}

export function formatPrice(amount: number, region: PricingRegion) {
  return region === "IN" ? `₹${amount}` : `$${amount}`;
}
