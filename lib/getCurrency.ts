import { headers } from "next/headers";

/**
 * Detects the currency based on the Cloudflare country header.
 * India (IN) -> INR
 * All other countries -> USD
 * Null fallback -> USD
 */
export async function getCurrency() {
    try {
        const headersList = await headers();
        const country = headersList.get("cf-ipcountry") || headersList.get("x-vercel-ip-country");

        if (country === "IN") {
            return "INR";
        }
    } catch (error) {
        console.error("Error reading headers for currency detection:", error);
    }

    return "USD";
}
