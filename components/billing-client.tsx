"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pricing } from "@/components/pricing";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { PRICING_PLANS } from "@/lib/pricing-constants";
import { formatPrice, getRegionFromCountry } from "@/lib/utils";
import { useEffect, useState } from "react";

interface BillingClientProps {
    initialCurrency: "USD" | "INR";
}

export default function BillingClient({ initialCurrency }: BillingClientProps) {
    const [currency, setCurrency] = useState<"USD" | "INR">(initialCurrency);

    useEffect(() => {
        const htmlDataCountry = document.documentElement.getAttribute('data-country');

        if (initialCurrency === "USD") {
            if (htmlDataCountry === "IN") {
                setCurrency("INR");
            }
        }
    }, [initialCurrency]);

    const growthPlan = PRICING_PLANS.find(p => p.id === "growth")!;
    const yearlyPrice = growthPlan.prices.yearly[currency];

    // Mocking an empty state since user hasn't bought a plan yet during finalization phase
    const hasActivePlan = false;

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Billing & Plans</h1>
                <p className="text-muted-foreground mt-1">Manage your active subscription and payment methods.</p>
            </div>

            {hasActivePlan ? (
                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="border-primary shadow-md">
                        <CardHeader>
                            <CardTitle>Current Plan: {growthPlan.name} (Yearly)</CardTitle>
                            <CardDescription>Your plan renews on Oct 24, 2027.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-extrabold mb-4">{formatPrice(yearlyPrice, currency === "INR" ? "IN" : "INTL")}<span className="text-lg text-muted-foreground font-normal">/year</span></div>
                            <ul className="space-y-2 text-sm">
                                {growthPlan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> {feature}</li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Cancel Subscription</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Method</CardTitle>
                            <CardDescription>Securely managed via PayPal.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-lg border bg-slate-50">
                                <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-800 font-bold italic text-xs">PayPal</div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm">PayPal Account</p>
                                    <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                                </div>
                                <Button variant="ghost" size="sm">Edit</Button>
                            </div>

                            <div className="space-y-3 pt-4 border-t">
                                <h4 className="text-sm font-medium">Update Payment Details</h4>
                                <Button className="w-full bg-[#0070ba] hover:bg-[#003087] text-white">
                                    <CreditCard className="w-4 h-4 mr-2" /> Pay with PayPal
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">You will be redirected to PayPal to complete your purchase securely.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                <Card className="border-dashed border-2 bg-muted shadow-none">
                    <CardHeader className="text-center pt-10">
                        <CardTitle className="text-2xl font-bold">No Active Subscription</CardTitle>
                        <CardDescription className="text-base text-muted-foreground mt-2 max-w-md mx-auto">
                            You are currently on the free tier. Upgrade to a paid plan below to unlock automated review replies and GBP posts.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center pb-10">
                        <Button
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                            className="bg-primary text-black hover:bg-primary/90 font-semibold px-8 h-12 text-md rounded-xl"
                        >
                            View Plans
                        </Button>
                    </CardContent>
                </Card>
            )}

            <div className="pt-8 border-t">
                <h3 className="text-2xl font-bold mb-8 text-center">{hasActivePlan ? 'Change your plan' : 'Upgrade your plan'}</h3>
                <div className="-mt-8">
                    <Pricing initialCurrency={currency} isDashboard={true} />
                </div>
            </div>
        </div>
    );
}
