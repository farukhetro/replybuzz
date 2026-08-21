"use client";


import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Review {
    id: string;
    text: string;
    rating: number;
    location: string;
    reviewer: string;
    time: string;
    aiReply: string | null;
    status: string;
}

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;
        fetch("/api/reviews")
            .then(res => res.json())
            .then(json => {
                if (mounted) setReviews(json.data || []);
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });
        return () => { mounted = false; };
    }, []);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Reviews</h1>
                <p className="text-muted-foreground mt-1">Monitor all reviews and AI replies across your locations.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Review History</CardTitle>
                    <CardDescription>All reviews replied to by the AI. Click a row to see the AI reply.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[350px]">Review</TableHead>
                                <TableHead>Reviewer</TableHead>
                                <TableHead>Rating</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                [...Array(5)].map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell><Skeleton className="h-4 w-[220px]" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                                        <TableCell className="text-right"><Skeleton className="h-6 w-[60px] ml-auto" /></TableCell>
                                    </TableRow>
                                ))
                            ) : reviews.length > 0 ? (
                                reviews.map((review) => (
                                    <>
                                        <TableRow
                                            key={review.id}
                                            className="cursor-pointer hover:bg-muted/50"
                                            onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}
                                        >
                                            <TableCell className="font-medium truncate max-w-[350px]">{review.text}</TableCell>
                                            <TableCell className="text-muted-foreground">{review.reviewer}</TableCell>
                                            <TableCell>
                                                <div className="flex text-primary">
                                                    {Array.from({ length: review.rating }).map((_, j) => (
                                                        <Star key={j} className="w-4 h-4 fill-primary" />
                                                    ))}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">{review.location}</TableCell>
                                            <TableCell className="text-muted-foreground">{review.time}</TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Badge
                                                        variant={review.status === "Replied" ? "outline" : "secondary"}
                                                        className={review.status === "Replied" ? "bg-green-50 text-green-700 border-green-200" : ""}
                                                    >
                                                        {review.status}
                                                    </Badge>
                                                    {expandedId === review.id ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        {expandedId === review.id && review.aiReply && (
                                            <TableRow key={`${review.id}-reply`} className="bg-muted/30">
                                                <TableCell colSpan={6} className="py-4 px-6">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                                                            <MessageSquare className="w-4 h-4 text-primary" />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-semibold text-muted-foreground mb-1">AI Reply</p>
                                                            <p className="text-sm">{review.aiReply}</p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                                        No reviews found yet. Once the AI replies to reviews, they will appear here.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
