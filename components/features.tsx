"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    {
        title: "Review Auto-Pilot: Get 5-star reviews daily.",
        image: "/Place For Things/Review Auto-Pilot Get 5-star reviews daily..png",
    },
    {
        title: "Instant Replies: Never miss a lead again.",
        image: "/Place For Things/Instant Replies Never miss a lead again..png",
    },
    {
        title: "Smart Updates: Keep your profile active weekly.",
        image: "/Place For Things/Smart Updates Keep your profile active weekly..png",
    },
    {
        title: "Lead Tracking: See exactly who called you.",
        image: "/Place For Things/Lead Tracking See exactly who called you..png",
    },
    {
        title: "Rank Booster: Dominate local map searches.",
        image: "/Place For Things/Rank Booster Dominate local map searches..png",
    },
    {
        title: "Brand Authority: Always sound professional.",
        image: "/Place For Things/Brand Authority Always sound professional..png",
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Features() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">Everything You Need To Scale Local Revenue</h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
                >
                    {features.map((feature, index) => {
                        return (
                            <motion.div key={index} variants={item} className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100 text-center">
                                <div className="w-12 h-12 mb-6 mx-auto">
                                    <Image src={feature.image} alt={feature.title} width={48} height={48} className="w-full h-full object-contain select-none pointer-events-none" draggable={false} style={{ WebkitUserDrag: "none" }} />
                                </div>
                                <h3 className="text-xl font-bold">{feature.title}</h3>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
