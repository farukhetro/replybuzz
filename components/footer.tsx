import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/logo.png" alt="ReplyBuzz Logo" width={160} height={45} className="object-contain" />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Automate your Google Business Profile engagement. We reply to reviews and publish GBP posts so you can focus on your business.
                        </p>
                        <div className="flex gap-4 text-muted-foreground mt-2">
                            <Link href="https://www.facebook.com/replyzbuzz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                            <Link href="https://www.instagram.com/replybuzz" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Instagram className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-foreground">Product</h4>
                        <Link href="/features" className="text-sm text-muted-foreground hover:text-primary">Features</Link>
                        <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link>

                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-foreground">Company</h4>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
                        {/* <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link> */}
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-foreground">Legal</h4>
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} ReplyBuzz. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
