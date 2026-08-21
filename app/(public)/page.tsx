export const dynamic = 'force-dynamic';

import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ConversionEngine } from "@/components/conversion-engine";
import { TrackingProof } from "@/components/tracking-proof";
import { Features } from "@/components/features";
import { AutomationSafety } from "@/components/automation-safety";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { getCurrency } from "@/lib/getCurrency";

export default async function Home() {
    const currency = await getCurrency();

    return (
        <div className="w-full">
            <Hero />
            <Problem />
            <Solution />
            <HowItWorksSection />
            <ConversionEngine />
            <TrackingProof />
            <Features />
            <Testimonials />
            <Pricing initialCurrency={currency} />
            <AutomationSafety />
            <Faq />
            <Cta />
        </div>
    );
}
