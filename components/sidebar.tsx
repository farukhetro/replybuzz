"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MapPin, Star, FileText, BarChart3, CreditCard, Settings, LogOut as LogOutIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sidebarLinks = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Locations", href: "/locations", icon: MapPin },
    { name: "Reviews", href: "/reviews", icon: Star },
    { name: "GBP Posts", href: "/blogs", icon: FileText },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Billing", href: "/billing", icon: CreditCard },
    { name: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
    isMobile?: boolean;
    onLinkClick?: () => void;
}

export function Sidebar({ isMobile, onLinkClick }: SidebarProps) {
    const pathname = usePathname();
    const { user, logOut } = useAuth();

    // Get initials for avatar fallback
    const initials = user?.displayName
        ? user.displayName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
        : user?.email?.substring(0, 2).toUpperCase() || 'U';

    return (
        <div className={cn(
            "flex w-64 flex-col bg-sidebar text-sidebar-foreground",
            !isMobile && "h-screen border-r",
            isMobile && "h-full"
        )}>
            <div className="flex h-16 items-center border-b px-6">
                <Link href="/" className="flex items-center space-x-2" onClick={onLinkClick}>
                    <Image src="/logo.png" alt="ReplyBuzz Logo" width={140} height={40} className="object-contain" priority />
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="grid items-start px-4 text-sm font-medium gap-1">
                    {sidebarLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onLinkClick}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-sidebar-accent/50",
                                    isActive ? "bg-sidebar-accent text-primary font-semibold" : ""
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="border-t p-4 flex flex-col gap-4">
                {user && (
                    <div className="flex items-center gap-3 px-2">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                            <AvatarFallback>{initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-sm font-medium truncate">{user.displayName || "User"}</span>
                            <span className="text-xs text-muted-foreground truncate">{user.email}</span>
                        </div>
                    </div>
                )}
                <button
                    onClick={() => logOut()}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-destructive hover:bg-sidebar-accent/50"
                >
                    <LogOutIcon className="h-4 w-4" />
                    Logout
                </button>
            </div>
        </div>
    );
}
