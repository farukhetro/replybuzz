import Image from "next/image";

export function TrackingProof() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-3xl relative z-10">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
                        Track Every Customer We Generate
                    </h2>
                    
                    <p className="text-xl text-slate-700 font-bold mb-8 p-4 bg-white border border-slate-200 rounded-xl shadow-sm inline-block">
                        You don't guess results. You see exactly where your customers come from.
                    </p>

                    <div className="space-y-6 text-lg text-slate-700 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm w-full text-left">
                        <div className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                                <Image src="/Place For Things/Calls.png" alt="Calls" width={32} height={32} className="w-full h-full object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                            </div>
                            <span className="font-semibold">Calls generated from Google Business Profile</span>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                                <Image src="/Place For Things/Clicks.png" alt="Clicks" width={32} height={32} className="w-full h-full object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                            </div>
                            <span className="font-semibold">Clicks on booking / WhatsApp links</span>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                                <Image src="/Place For Things/Messages.png" alt="Messages" width={32} height={32} className="w-full h-full object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                            </div>
                            <span className="font-semibold">Messages and inquiries</span>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                                <Image src="/Place For Things/Engagement.png" alt="Engagement" width={32} height={32} className="w-full h-full object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                            </div>
                            <span className="font-semibold">Engagement turning into leads</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
