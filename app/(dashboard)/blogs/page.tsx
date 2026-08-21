"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        fetch("/api/blogs")
            .then(res => res.json())
            .then(json => {
                if (mounted) setBlogs(json.data || []);
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });
        return () => { mounted = false; };
    }, []);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">GBP Posts</h1>
                    <p className="text-muted-foreground mt-1">Posts generated and published to your Google Business Profile.</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Article History</CardTitle>
                    <CardDescription>Manage your automated content marketing.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[450px]">Post Title</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                [...Array(4)].map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell><Skeleton className="h-4 w-[300px]" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                                        <TableCell className="text-right"><Skeleton className="h-6 w-[60px] ml-auto" /></TableCell>
                                    </TableRow>
                                ))
                            ) : blogs.length > 0 ? (
                                blogs.map((blog, i) => (
                                    <TableRow key={i}>
                                        <TableCell className="font-medium">{blog.title}</TableCell>
                                        <TableCell className="text-muted-foreground">{blog.location}</TableCell>
                                        <TableCell className="text-muted-foreground">{blog.publishedAt}</TableCell>
                                        <TableCell className="text-right">
                                            <Badge variant={blog.status === "Published" ? "default" : "secondary"} className={blog.status === "Published" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : ""}>
                                                {blog.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                                        No posts generated yet.
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
