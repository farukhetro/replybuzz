import BillingClient from "@/components/billing-client";
import { getCurrency } from "@/lib/getCurrency";

export default async function BillingPage() {
    const currency = await getCurrency();

    return <BillingClient initialCurrency={currency} />;
}
