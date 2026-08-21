export const dynamic = 'force-dynamic';

import { Pricing as PricingSection } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { getCurrency } from "@/lib/getCurrency";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function PricingPage() {
    const currency = await getCurrency();

    return (
        <div className="pt-8 w-full relative">
            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
            </div>
            <div className="container mx-auto px-4 max-w-4xl text-center mb-8 pt-6">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Pricing Plans</h1>
            </div>
            <PricingSection initialCurrency={currency} />
            <Faq />
        </div>
    );
}
