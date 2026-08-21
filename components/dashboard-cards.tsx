"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileText, Zap, MapPin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardCards() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        fetch("/api/dashboard")
            .then(res => res.json())
            .then(json => {
                if (mounted) setData(json.data);
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });
        return () => { mounted = false; };
    }, []);

    const stats = [
        {
            title: "Replies This Month",
            value: data?.repliesThisMonth ?? "--",
            description: "+0% from last month",
            icon: MessageSquare,
            color: "text-blue-500",
            bg: "bg-blue-100",
        },
        {
            title: "GBP Posts",
            value: data?.blogsPosted ?? "--",
            description: "+0 from last month",
            icon: FileText,
            color: "text-green-500",
            bg: "bg-green-100",
        },
        {
            title: "Connected Locations",
            value: data?.connectedLocations ?? "--",
            description: data?.plan ? `${data.plan.charAt(0).toUpperCase() + data.plan.slice(1)} Plan` : "Free Plan",
            icon: MapPin,
            color: "text-amber-500",
            bg: "bg-amber-100",
        },
        {
            title: "Remaining Credits",
            value: data?.remainingQuota ?? "--",
            description: "AI usage credits",
            icon: Zap,
            color: "text-primary",
            bg: "bg-primary/20",
        },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <div className={`w-8 h-8 rounded-full ${stat.bg} flex items-center justify-center`}>
                                <Icon className={`h-4 w-4 ${stat.color}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            {loading ? (
                                <div className="space-y-2 mt-2">
                                    <Skeleton className="h-8 w-20" />
                                    <Skeleton className="h-3 w-32" />
                                </div>
                            ) : (
                                <>
                                    <div className="text-2xl font-bold">{stat.value}</div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {stat.description}
                                    </p>
                                </>
                            )}
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
