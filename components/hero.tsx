"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-32">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                    >

                    
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8">
                            Turn Your Google Profile Into A Customer Machine
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto font-medium">
                            Stop missing leads. Start booking more jobs today.
                        </p>
                        <p className="text-lg text-primary font-bold mb-12 max-w-3xl mx-auto">
                            Your competitors are stealing your customers. Act now.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/login" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-16 px-10 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105" })}>
                                Activate Your Customer Flow
                            </Link>
                            <Link href="/how-it-works" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto h-16 px-10 text-xl font-bold rounded-2xl border-2 hover:bg-slate-50 transition-all hover:scale-105 text-slate-900" })}>
                                See How It Works
                            </Link>
                        </div>

                        <div className="mt-16 flex flex-col items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden ring-1 ring-slate-200 shadow-sm">
                                        <img
                                            src={i <= 2 ? `/images/avatars/avatar_${i}.png` : `https://i.pravatar.cc/150?u=${i + 10}`}
                                            alt={`User ${i}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-base font-semibold text-slate-800">Trusted by businesses focused on real growth.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
