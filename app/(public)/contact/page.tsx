"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, AlertCircle, ShieldCheck, Info } from "lucide-react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    // Captcha State (Simple Addition)
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: "" });
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaError, setCaptchaError] = useState(false);

    const generateCaptcha = useCallback(() => {
        const n1 = Math.floor(Math.random() * 8) + 2;
        const n2 = Math.floor(Math.random() * 8) + 2;
        setCaptcha({ num1: n1, num2: n2, answer: (n1 + n2).toString() });
        setCaptchaInput("");
        setCaptchaError(false);
    }, []);

    useEffect(() => {
        generateCaptcha();
    }, [generateCaptcha]);

    const getMessageCharCount = (str: string) => str.replace(/\s/g, "").length;
    const isMessageValid = getMessageCharCount(formData.message) >= 100;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Check Captcha
        if (captchaInput !== captcha.answer) {
            setCaptchaError(true);
            return;
        }

        // 2. Check Message Length
        if (!isMessageValid) {
            return;
        }

        setStatus("loading");

        try {
            const url = "https://script.google.com/macros/s/AKfycbyE2f9VFlLqEk-IR_KaAfA0bTIsvsdEb94Is68dAraYOXAZZ9hvBHzVfLSuHJ4f7Nvw/exec";

            // Add an artificial delay of 4 seconds to make the sending process feel substantial
            const delay = new Promise(resolve => setTimeout(resolve, 4000));

            const fetchRequest = fetch(url, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Wait for both the request and the minimum delay to complete
            await Promise.all([fetchRequest, delay]);

            // Success
            setStatus("success");
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
            generateCaptcha();
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        const key = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="pt-16 pb-24 w-full min-h-[70vh]">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Contact Us</h1>
                    <p className="text-lg text-slate-600">Have questions? We're here to help.</p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-2xl max-w-2xl mx-auto">
                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                                <CheckCircle2 className="w-12 h-12" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                            <p className="text-slate-600 max-w-sm text-lg">
                                Thank you for reaching out. We've received your message and will get back to you shortly.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setStatus("idle");
                                    generateCaptcha();
                                }}
                                className="mt-8 h-12 px-8 rounded-xl font-semibold border-2 border-slate-200 hover:bg-slate-50 transition-all"
                            >
                                Send another message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name" className="text-sm font-bold text-slate-700 ml-1">First name</Label>
                                    <Input
                                        id="first-name"
                                        placeholder="John"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        disabled={status === "loading"}
                                        className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus:bg-white transition-all px-4"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name" className="text-sm font-bold text-slate-700 ml-1">Last name</Label>
                                    <Input
                                        id="last-name"
                                        placeholder="Doe"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        disabled={status === "loading"}
                                        className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus:bg-white transition-all px-4"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={status === "loading"}
                                    className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus:bg-white transition-all px-4"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <Label htmlFor="message" className="text-sm font-bold text-slate-700">Message</Label>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isMessageValid ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                                        Chars: {getMessageCharCount(formData.message)} / 100
                                    </span>
                                </div>
                                <textarea
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={status === "loading"}
                                    className="flex min-h-[150px] w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-base shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus:bg-white focus-visible:ring-2 focus-visible:ring-primary/20 transition-all disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="How can we help? (Min 100 characters excluding spaces)"
                                />
                                {!isMessageValid && formData.message.length > 0 && (
                                    <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-1 ml-1 font-medium">
                                        <Info className="w-3 h-3" />
                                        Please write at least {100 - getMessageCharCount(formData.message)} more characters.
                                    </p>
                                )}
                            </div>

                            {/* Captcha Section */}
                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-sm">Security Verification</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 bg-white border border-slate-200 rounded-xl h-12 flex items-center justify-center font-mono text-xl font-bold text-slate-800 shadow-sm tracking-widest">
                                        {captcha.num1} + {captcha.num2} = ?
                                    </div>
                                    <Input
                                        type="number"
                                        placeholder="Ans"
                                        value={captchaInput}
                                        onChange={(e) => setCaptchaInput(e.target.value)}
                                        disabled={status === "loading"}
                                        className={`w-28 h-12 rounded-xl text-center text-lg font-bold border-2 ${captchaError ? 'border-red-400 focus:ring-red-100' : 'border-slate-200'}`}
                                        required
                                    />
                                </div>
                                {captchaError && (
                                    <p className="text-xs font-bold text-red-500 ml-1">Incorrect answer. Please try again.</p>
                                )}
                            </div>

                            {status === "error" && (
                                <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <span>Something went wrong. Please check your connection and try again.</span>
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={status === "loading" || !isMessageValid}
                                className="w-full h-14 text-black font-black text-xl bg-primary hover:bg-primary/90 rounded-2xl shadow-lg shadow-primary/20 transition-all active:scale-95 disabled:opacity-70 disabled:grayscale"
                            >
                                {status === "loading" ? (
                                    <span className="flex items-center gap-3">
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                        Sending...
                                    </span>
                                ) : !isMessageValid && formData.message.length > 0 ? (
                                    "Message too short"
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
