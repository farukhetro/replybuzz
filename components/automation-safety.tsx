"use client";

import Image from "next/image";

export function AutomationSafety() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
                        Built For Growth. <span className="text-primary">Without Risk.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { image: "/Place For Things/Built securely within Google's terms..png", title: "Built securely within Google's terms." },
                        { image: "/Place For Things/Total transparency on every lead..png", title: "Total transparency on every lead." },
                        { image: "/Place For Things/We never guess, we track everything..png", title: "We never guess, we track everything." },
                        { image: "/Place For Things/Used by top local businesses globally..png", title: "Used by top local businesses globally." }
                    ].map((item, i) => (
                        <div key={i} className="text-center p-6">
                            <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-2xl mb-6 mx-auto border border-slate-100">
                                <Image src={item.image} alt={item.title} width={48} height={48} className="w-full h-full object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                            </div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
