"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardContent({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [connectedLocations, setConnectedLocations] = useState(0);

    useEffect(() => {
        let mounted = true;
        fetch("/api/dashboard")
            .then(res => res.json())
            .then(json => {
                if (mounted) setConnectedLocations(json.data?.connectedLocations || 0);
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });
        return () => { mounted = false; };
    }, []);

    if (loading) {
        return (
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
                    <div className="h-5 w-64 bg-muted rounded animate-pulse mt-2"></div>
                </div>
                <div className="space-y-8 animate-pulse">
                    <Skeleton className="h-[200px] w-full rounded-xl" />
                </div>
            </div>
        );
    }

    if (connectedLocations === 0) {
        return (
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
                    <p className="text-muted-foreground mt-1">Connect your account to get started with automation.</p>
                </div>
                <Card className="border-2 border-dashed shadow-none">
                    <CardContent className="flex flex-col items-center justify-center p-16 text-center">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <MapPin className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">Welcome to ReplyBuzz!</h2>
                        <p className="text-muted-foreground max-w-md mb-8">
                            To start automating your review replies and generating GBP posts, you need to connect your Google Business Profile first.
                        </p>
                        <Link href="/locations">
                            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-lg h-14 px-8 rounded-xl font-semibold">
                                <Plus className="w-5 h-5 mr-2" /> Connect your Google Business Profile
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return <>{children}</>;
}
