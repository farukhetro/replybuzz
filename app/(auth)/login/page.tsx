"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showComingSoon, setShowComingSoon] = useState(false);

    const handleLogin = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowComingSoon(true);
        }, 1500);
    };

    return (
        <div className="flex min-h-[100vh] flex-col bg-slate-50 text-foreground overflow-x-hidden w-full">
            <Navbar />
            
            <main className="flex-1 flex flex-col justify-center items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
                {/* Background ambient glow - shifted out to wrapper level */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute -top-[10%] -left-[5%] w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] rounded-full bg-primary/20 blur-[80px] sm:blur-[120px]" />
                    <div className="absolute top-[60%] -right-[5%] w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] rounded-full bg-blue-400/10 blur-[80px] sm:blur-[120px]" />
                </div>

                <div className="w-full max-w-[1000px] bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row flex-wrap sm:flex-nowrap">
                    
                    {/* Left Column - Branding (Hidden on mobile, block on lg) */}
                    <div className="hidden lg:flex lg:w-[45%] bg-slate-50 text-slate-900 p-12 flex-col justify-between relative overflow-hidden border-r border-slate-100">
                        {/* Background glow effects inside left column */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
                            <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/40 blur-[100px]" />
                            <div className="absolute top-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-blue-400/20 blur-[100px]" />
                        </div>
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl font-extrabold tracking-tight mb-6 leading-tight">
                                The ultimate <span className="text-primary truncate relative z-10"><span className="relative z-10">growth engine</span><span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full"></span></span> for your business.
                            </h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Join thousands of local businesses automating their Google Profile growth and closing more inbound leads.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 shrink-0">
                                    <Image src="/Place For Things/Review Auto-Pilot Get 5-star reviews daily..png" alt="Review Auto-Pilot" width={40} height={40} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-base">Review Auto-Pilot</h4>
                                    <p className="text-slate-500 text-sm font-medium">Consistent 5-star review generation.</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 shrink-0">
                                    <Image src="/Place For Things/Instant Replies Never miss a lead again..png" alt="Instant Responses" width={40} height={40} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-base">Instant Responses</h4>
                                    <p className="text-slate-500 text-sm font-medium">Never leave a potential lead waiting.</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 shrink-0">
                                    <Image src="/Place For Things/Rank Booster Dominate local map searches..png" alt="Protects Your Rank" width={40} height={40} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-base">Protects Your Rank</h4>
                                    <p className="text-slate-500 text-sm font-medium">Stay active and dominate local search.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Login */}
                    <div className="w-full lg:w-[55%] p-6 sm:p-12 lg:p-16 flex flex-col justify-center relative bg-white min-h-[400px] lg:min-h-[600px]">
                        <AnimatePresence mode="wait">
                            {!showComingSoon ? (
                                <motion.div
                                    key="login"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full max-w-sm mx-auto flex flex-col justify-center h-full"
                                >
                                    <div className="text-center mb-8 sm:mb-12 mt-4 sm:mt-0">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-3">
                                            Welcome back
                                        </h2>
                                        <p className="text-slate-500 font-medium text-sm sm:text-base">
                                            Sign in to access your dashboard.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <button
                                            onClick={handleLogin}
                                            disabled={isLoading}
                                            className="w-full relative flex items-center justify-center py-3 sm:py-4 px-4 sm:px-6 border-2 border-slate-200 rounded-xl sm:rounded-2xl shadow-sm bg-white text-base sm:text-lg font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md focus:outline-none transition-all active:scale-[0.98] group"
                                        >
                                            <span className={`transition-opacity duration-200 flex items-center ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                                </svg>
                                                Continue with Google
                                            </span>
                                            {isLoading && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin text-slate-400" />
                                                </div>
                                            )}
                                        </button>
                                        
                                        <p className="text-center text-xs sm:text-sm font-medium text-slate-400 mt-6 sm:mt-8 px-2 sm:px-4 leading-relaxed pb-4 sm:pb-0">
                                            By continuing, you agree to our <a href="#" className="underline hover:text-slate-600 transition-colors">Terms of Service</a> and <a href="#" className="underline hover:text-slate-600 transition-colors">Privacy Policy</a>.
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="coming-soon"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                                    className="w-full max-w-sm mx-auto text-center"
                                >
                                    <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 ring-8 ring-primary/5">
                                        <Loader2 className="w-10 h-10 text-primary animate-spin" />
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">System Upgrade</h3>
                                    <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                                        We are actively building the ultimate Google Business backend.
                                        Logins are paused during deployment.
                                    </p>
                                    
                                    <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100 text-left shadow-sm">
                                        <div className="flex items-start mb-4">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                            <span className="text-sm font-semibold text-slate-700">Faster engine mapping.</span>
                                        </div>
                                        <div className="flex items-start mb-4">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                            <span className="text-sm font-semibold text-slate-700">Enhanced scheduling grid.</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                            <span className="text-sm font-semibold text-slate-700">Enterprise security updates.</span>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => setShowComingSoon(false)}
                                        className="text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors inline-flex items-center"
                                    >
                                        &larr; Back to login
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
