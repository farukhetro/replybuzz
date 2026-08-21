"use client";

import { Zap } from "lucide-react";
import Image from "next/image";

export function Solution() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">


                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-slate-900 leading-tight">
                    We set up your proven <span className="text-primary relative inline-block">conversion engine<span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full"></span></span>.
                </h2>

                <p className="text-2xl text-slate-700 mb-12 leading-relaxed mx-auto font-bold">
                    You get more calls, clicks, and customers.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <div className="inline-flex items-center px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-900 font-semibold text-lg shadow-sm">
                        <Image src="/Place For Things/No manual work required.png" alt="No manual work required" width={20} height={20} className="mr-3 object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                        No manual work required
                    </div>
                </div>
            </div>
        </section>
    );
}
