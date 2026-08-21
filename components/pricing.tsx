"use client";

import { Loader2 } from "lucide-react";

interface PricingProps {
    initialCurrency?: "USD" | "INR";
    isDashboard?: boolean;
}

export function Pricing({ isDashboard = false }: PricingProps) {
    return (
        <section className={`py-24 relative ${isDashboard ? 'bg-transparent' : 'bg-slate-50'}`}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-[2rem] px-6 py-16 sm:px-16 sm:py-20 text-center border border-slate-200 shadow-xl relative overflow-hidden">
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="inline-flex py-3 px-4 bg-primary/10 rounded-full mb-8">
                                <Loader2 className="w-8 h-8 text-yellow-600 mx-auto animate-spin" />
                            </div>
                            
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
                                Upgrading Our Systems
                            </h2>
                            
                            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                We are currently working behind the scenes on our backend infrastructure to provide you with an even better experience.
                            </p>
                            
                            <p className="text-lg font-bold text-slate-800 max-w-lg mx-auto">
                                Sign-ups and new subscriptions are temporarily paused. Thank you for your patience while we prepare for launch!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
