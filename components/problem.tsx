import Image from "next/image";

export function Problem() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { image: "/Place For Things/Dead profiles repel local leads.png", title: "Dead profiles repel local leads" },
                        { image: "/Place For Things/Ignored reviews cost you customers.png", title: "Ignored reviews cost you customers" },
                        { image: "/Place For Things/Slow replies destroy buyer trust.png", title: "Slow replies destroy buyer trust" },
                        { image: "/Place For Things/Stale information drops your ranking.png", title: "Stale information drops your ranking" }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 text-center">
                            <div className="w-12 h-12 mb-6 mx-auto">
                                <Image src={item.image} alt={item.title} width={48} height={48} className="w-full h-full object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                            </div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
