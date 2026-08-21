import { Features as FeaturesSection } from "@/components/features";

export default function FeaturesPage() {
    return (
        <div className="pt-8 w-full">
            <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Powerful Features for Automation</h1>
                <p className="text-lg text-muted-foreground">Everything you need to run your Google Business Profile on autopilot.</p>
            </div>
            <FeaturesSection />
        </div>
    );
}
