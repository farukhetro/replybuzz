"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function LocationsPage() {
    const [locations, setLocations] = useState<any[]>([]);
    const [hasConnection, setHasConnection] = useState<boolean>(false);
    const [quotaError, setQuotaError] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const [globalQuotaDepleted, setGlobalQuotaDepleted] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "system", "status"), (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setGlobalQuotaDepleted(!!data.googleApiQuotaDepleted);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        let mounted = true;
        
        // Add a timestamp parameter or headers to definitely avoid caching issues
        fetch(`/api/locations?t=${Date.now()}`, { cache: 'no-store' })
            .then(res => res.json())
            .then(json => {
                if (mounted) {
                    setLocations(json.locations || []);
                    setHasConnection(json.hasGoogleConnection || false);
                    setQuotaError(json.quotaError || false);
                }
            })
            .catch(err => {
                console.error("Error fetching locations:", err);
                if (mounted) {
                    setLocations([]);
                    setHasConnection(false);
                    setQuotaError(false);
                }
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });
        return () => { mounted = false; };
    }, []);

    return (
        <div className="space-y-8">
            {globalQuotaDepleted && (
                <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-md mb-6">
                    <h3 className="font-bold">Google Business Profile Sync — Coming Soon</h3>
                    <p className="text-sm mt-1">Our team is finalizing the Google Business Profile integration. The connection will be available shortly once the backend setup is completed.</p>
                    <p className="text-xs mt-2 text-blue-600">We appreciate your patience.</p>
                </div>
            )}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Locations</h1>
                    <p className="text-muted-foreground mt-1">Manage your connected Google Business Profiles.</p>
                </div>
                {globalQuotaDepleted ? (
                    <Button disabled className="bg-gray-300 text-gray-500 cursor-not-allowed">
                        <Plus className="w-4 h-4 mr-2" /> Connect Location (Coming Soon)
                    </Button>
                ) : (
                    <Link href="/api/auth/google">
                        <Button className="bg-primary text-black hover:bg-primary/90">
                            <Plus className="w-4 h-4 mr-2" /> {hasConnection ? "Connect Another Account" : "Connect Location"}
                        </Button>
                    </Link>
                )}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {loading ? (
                    [...Array(3)].map((_, i) => (
                        <Card key={i}>
                            <CardHeader className="flex flex-row items-start justify-between pb-2">
                                <div className="space-y-2">
                                    <Skeleton className="h-6 w-32" />
                                    <Skeleton className="h-4 w-48" />
                                </div>
                                <Skeleton className="h-6 w-16" />
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="flex items-center justify-between mt-4">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-8 w-16" />
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : quotaError ? (
                    <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed rounded-lg p-8">
                        <p className="text-lg font-bold text-blue-600 mb-2">Google Business Profile Sync — Coming Soon</p>
                        <p>Our team is finalizing the Google Business Profile integration. The connection will be available shortly once the backend setup is completed.</p>
                        <p className="mt-4 text-sm text-muted-foreground">We appreciate your patience.</p>
                        <Button variant="outline" className="mt-6" onClick={() => window.location.reload()}>Refresh Later</Button>
                    </div>
                ) : locations.length > 0 ? (
                    locations.map((loc, i) => (
                        <Card key={i}>
                            <CardHeader className="flex flex-row items-start justify-between pb-2">
                                <div className="space-y-1">
                                    <CardTitle className="text-xl font-bold">{loc.name}</CardTitle>
                                    <CardDescription className="flex items-center">
                                        <MapPin className="w-3 h-3 mr-1" /> {loc.address}
                                    </CardDescription>
                                </div>
                                <Badge variant={loc.status === "Active" ? "default" : "secondary"} className={loc.status === "Active" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}>
                                    {loc.status}
                                </Badge>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-sm font-medium">Automation</span>
                                    <Button variant={loc.auto ? "outline" : "default"} size="sm" className={loc.auto ? "" : "bg-primary text-black hover:bg-primary/90"}>
                                        {loc.auto ? "Pause" : "Resume"}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : hasConnection ? (
                    <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed rounded-lg p-8">
                        <p className="text-lg font-medium text-foreground mb-2">Google Connected Successfully!</p>
                        <p>However, we couldn't find any Google Business Profiles under this account.</p>
                        <p className="mt-4 text-sm">Make sure you connected the correct Google account that owns or manages your Google Business Profile. If you don't have one, you'll need to create it first on Google.</p>
                        <Link href="/api/auth/google">
                            <Button variant="outline" className="mt-6">Try a different Google account</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed rounded-lg p-8">
                        <p className="text-lg font-medium text-foreground mb-2">No locations connected yet</p>
                        <p>Click the "Connect Location" button above to link your Google Business Profile context.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
