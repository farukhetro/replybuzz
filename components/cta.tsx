"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Cta() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-10 md:p-20 text-center max-w-5xl mx-auto shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                            Stop leaving money on the table.
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                            <Link href="/login" className={buttonVariants({ size: "lg", className: "h-16 px-10 text-xl font-bold bg-primary text-slate-900 hover:bg-primary/90 rounded-full shadow-sm transition-all hover:-translate-y-1 w-full sm:w-auto" })}>
                                Turn On Your Lead Engine Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
