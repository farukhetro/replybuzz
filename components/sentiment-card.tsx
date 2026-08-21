"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SentimentCard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        fetch("/api/reviews")
            .then(res => res.json())
            .finally(() => {
                if (mounted) setLoading(false);
            });
        return () => { mounted = false; };
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Review Sentiment</CardTitle>
                <CardDescription>Breakdown of ratings over time.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-12">
                {loading ? (
                    <div className="relative w-48 h-48 rounded-full border-[16px] border-slate-100 flex items-center justify-center animate-pulse">
                        <Skeleton className="w-16 h-8" />
                    </div>
                ) : (
                    <div className="text-center">
                        <span className="block text-3xl font-bold">N/A</span>
                        <span className="text-sm text-muted-foreground">No data available</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
