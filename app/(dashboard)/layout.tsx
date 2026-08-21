"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            {/* Desktop Sidebar */}
            <div className="hidden md:flex">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="md:hidden flex items-center justify-between px-4 h-16 border-b bg-background shrink-0">
                    <Link href="/dashboard" className="flex items-center">
                        <Image src="/logo.png" alt="ReplyBuzz Logo" width={110} height={32} className="object-contain" priority />
                    </Link>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger className="md:hidden flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent text-accent-foreground">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle mobile menu</span>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 w-64 border-r-0">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <Sidebar isMobile onLinkClick={() => setOpen(false)} />
                        </SheetContent>
                    </Sheet>
                </header>

                <main className="flex-1 overflow-y-auto w-full p-4 sm:p-6 md:p-12">
                    <div className="mx-auto max-w-6xl">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
