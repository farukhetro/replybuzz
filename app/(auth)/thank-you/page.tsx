"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to dashboard after 30 seconds as per spec
        const timer = setTimeout(() => {
            router.push("/dashboard");
        }, 30000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="w-full max-w-lg mx-auto p-4 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-10 shadow-2xl border"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="mx-auto w-20 h-20 bg-green-100 text-green-600 flex items-center justify-center rounded-full mb-6"
                >
                    <CheckCircle2 className="w-10 h-10" />
                </motion.div>

                <h1 className="text-3xl font-bold mb-4">Welcome to ReplyBuzz</h1>
                <p className="text-xl text-slate-700 mb-6 font-medium">
                    Automation setup complete.
                </p>
                <p className="text-muted-foreground mb-8">
                    Sit back and relax. Your Google Business Profile is now running on autopilot.
                </p>

                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 flex flex-col items-center justify-center">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mb-3" />
                    <p className="text-sm text-slate-500">Redirecting to dashboard...</p>
                </div>
            </motion.div>

            {/* Background decorations */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] -z-10" />
        </div>
    );
}
