"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function RecentActivity() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        fetch("/api/dashboard")
            .then(res => res.json())
            .then(json => {
                if (mounted) setData(json.data?.recentActivity || []);
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });
        return () => { mounted = false; };
    }, []);

    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                    Latest automated actions taken on your behalf.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {loading ? (
                        [...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-4">
                                <Skeleton className="w-2 h-2 rounded-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[200px]" />
                                    <Skeleton className="h-3 w-[150px]" />
                                </div>
                            </div>
                        ))
                    ) : data.length > 0 ? (
                        data.map((activity, i) => (
                            <div key={i} className="flex items-center">
                                <div className={`w-2 h-2 mt-1.5 rounded-full ${activity.type === 'Reply' ? 'bg-primary' : 'bg-green-500'} mr-4 self-start`} />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">{activity.text}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {activity.loc} · {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-6 text-muted-foreground">
                            <p className="text-sm">No recent activity yet.</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
