"use client";

import { MessageCircle, Phone, CalendarDays, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ConversionEngine() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
                        Built-In Conversion Engine
                    </h2>
                    <p className="text-xl text-slate-600 font-medium">
                        We don't just manage your profile—we optimize it for sales.
                    </p>
                </div>

                <div className="flex justify-center mb-16">
                    <ul className="inline-flex flex-col space-y-6 text-xl md:text-2xl text-slate-700 font-bold text-left">
                        {[
                            "Dominant local search rankings",
                            "Instant answers for every lead",
                            "Automated five-star review generation",
                            "High-converting photo & post updates"
                        ].map((text, i) => (
                            <li key={i} className="flex items-center">
                                <div className="mr-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
