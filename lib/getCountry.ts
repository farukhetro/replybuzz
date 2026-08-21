import { headers } from "next/headers";

/**
 * Gets the country code from the Cloudflare header.
 * Only works in Server Components or Server Actions.
 */
export async function getCountry() {
    const headersList = await headers();
    const country = headersList.get("cf-ipcountry") || "INTL";
    return country;
}

/**
 * Determines the currency based on the country code.
 * Only works in Server Components or Server Actions.
 */
export async function getCurrency() {
    const country = await getCountry();
    return country === "IN" ? "INR" : "USD";
}
