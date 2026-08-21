import Image from "next/image";

export function HowItWorksSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
                        From Local Search To Paying Customer
                    </h2>
                    
                    <div className="inline-flex items-center mt-4 px-5 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium shadow-sm">
                        <Image src="/Place For Things/Works from day one.png" alt="Works from day one" width={18} height={18} className="mr-3 object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                        Works from day one
                    </div>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 rounded-full"></div>

                    <div className="space-y-12">
                        {[
                            { step: "01", image: "/Place For Things/We optimize your Google Profile.png", title: "We optimize your Google Profile" },
                            { step: "02", image: "/Place For Things/We build your conversion system.png", title: "We build your conversion system" },
                            { step: "03", image: "/Place For Things/You close more inbound leads.png", title: "You close more inbound leads" }
                        ].map((item, i) => (
                            <div key={i} className="relative flex flex-col md:flex-row items-center justify-between">
                                {i % 2 === 0 ? (
                                    <>
                                        <div className="w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative z-10 text-center md:text-right">
                                            <div className="text-primary font-bold text-lg mb-2">Step {item.step}</div>
                                            <div className="mb-4 flex justify-center md:justify-end">
                                                <Image src={item.image} alt={item.title} width={48} height={48} className="object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                                            </div>
                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                        </div>
                                        <div className="hidden md:block w-[45%]"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="hidden md:block w-[45%]"></div>
                                        <div className="w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative z-10 text-center md:text-left">
                                            <div className="text-primary font-bold text-lg mb-2">Step {item.step}</div>
                                            <div className="mb-4 flex justify-center md:justify-start">
                                                <Image src={item.image} alt={item.title} width={48} height={48} className="object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                                            </div>
                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                        </div>
                                    </>
                                )}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full z-20 shadow-lg hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
