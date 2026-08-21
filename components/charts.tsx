"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function MockChart() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        fetch("/api/dashboard")
            .then(res => res.json())
            .finally(() => {
                if (mounted) setLoading(false);
            });
        return () => { mounted = false; };
    }, []);

    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Activity Overview</CardTitle>
                <CardDescription>
                    Review replies and blog generation over the past 30 days.
                </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-slate-50 border-t border-b flex items-end justify-between px-6 pt-4 pb-0 items-center overflow-hidden">
                    {loading ? (
                        <div className="flex h-full w-full items-end justify-between px-2 pb-6 gap-2">
                            {[...Array(14)].map((_, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                                    <Skeleton className="w-full flex-1" style={{ height: `${Math.random() * 50 + 20}%`, minHeight: '30px' }} />
                                    <Skeleton className="w-4 h-3" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex h-full w-full items-center justify-center">
                            <p className="text-muted-foreground">Not enough data to display chart.</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
