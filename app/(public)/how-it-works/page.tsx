import { Cta } from "@/components/cta";
import Image from "next/image";

export default function HowItWorksPage() {
    return (
        <div className="pt-16 pb-24 w-full">
            <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">How ReplyBuzz Works</h1>
                <p className="text-lg text-muted-foreground">Three simple steps to running your reputation on autopilot.</p>
            </div>

            <div className="container mx-auto px-4 max-w-4xl space-y-12">
                {[
                    {
                        step: "1",
                        title: "Connect Your Profile",
                        image: "/Place For Things/Connect Your Profile.png",
                        desc: "Securely link your Google Business Profile with a single click using OAuth."
                    },
                    {
                        step: "2",
                        title: "Configure Preferences",
                        image: "/Place For Things/Configure Preferences.png",
                        desc: "Select your tone, preferred blog topics, and automation schedules."
                    },
                    {
                        step: "3",
                        title: "Let AI Take Over",
                        image: "/Place For Things/Let AI Take Over.png",
                        desc: "ReplyBuzz actively monitors, replies to reviews, and publishes GBP posts without you lifting a finger."
                    }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 items-start bg-white p-8 rounded-2xl border shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-black font-bold flex items-center justify-center rounded-full text-xl md:mb-0 mb-4">
                            {item.step}
                        </div>
                        <div className="flex-shrink-0 w-full md:w-32 flex justify-center bg-slate-50 rounded-xl p-4 md:mb-0 mb-4 border border-slate-100">
                            <Image src={item.image} alt={item.title} width={64} height={64} className="w-full max-w-[80px] h-auto object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                        </div>
                        <div className="w-full">
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-lg">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24">
                <Cta />
            </div>
        </div>
    );
}
