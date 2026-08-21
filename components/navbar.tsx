"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/logo.png" alt="ReplyBuzz Logo" width={160} height={45} className="object-contain" priority />
                    </Link>
                    <div className="hidden md:flex gap-6 text-sm font-medium">
                        <Link href="/features" className="transition-colors hover:text-primary">Features</Link>
                        <Link href="/how-it-works" className="transition-colors hover:text-primary">How It Works</Link>
                        <Link href="/pricing" className="transition-colors hover:text-primary">Pricing</Link>

                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium transition-colors hover:text-primary">Login</Link>
                    <Link href="/login" className={buttonVariants({ className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md" })}>
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
