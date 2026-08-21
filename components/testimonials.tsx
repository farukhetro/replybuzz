"use client";

import { TrendingUp, MapPin } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
    return (
        <section className="py-24 bg-primary/5 relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Results
                    </h2>
                </div>

                <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                    <div className="mb-6 flex justify-center w-full">
                        <Image src="/Place For Things/sooooon.png" alt="We are going live sooooon!" width={120} height={120} className="w-full max-w-[120px] h-auto object-contain mx-auto select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                    </div>
                    <p className="text-xl text-slate-600 font-medium mt-4">
                        Real customer results and case studies will be displayed here once our platform officially launches to the public. 
                    </p>
                </div>
            </div>
        </section>
    );
}
