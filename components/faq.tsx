import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do you respond to all types of reviews?",
        answer: "Yes! Our AI generates tone-appropriate responses for 1 to 5-star reviews. Negative reviews are handled with empathy and care, while positive reviews receive enthusiastic gratitude.",
    },
    {
        question: "Will Google penalize my business for automated replies?",
        answer: "No. Our Smart Delay System randomizes reply times between 10 and 60 seconds, which mimics natural human behavior and ensures compliance with Google's spam detection policies.",
    },
    {
        question: "How does the GBP Post Generation work?",
        answer: "Our system automatically generates high-quality, SEO-optimized blog posts that highlight your services and keywords. These are published directly to your Google Business Profile to boost your local search ranking.",
    },
    {
        question: "Can I use ReplyBuzz for multiple locations?",
        answer: "Absolutely. Our Growth plan supports up to 3 locations, and our Agency plan supports up to 10 locations. You can manage all of them from a single dashboard.",
    },
    {
        question: "What if I want to pause the automation?",
        answer: "You have full control. You can pause and resume all automation for any of your connected locations at any time directly from the dashboard.",
    },
];

export function Faq() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about ReplyBuzz.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
                    <Accordion className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
