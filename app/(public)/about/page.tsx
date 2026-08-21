import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | ReplyBuzz",
    description: "ReplyBuzz was built to help businesses get more value from their Google Business Profile without wasting time on repetitive tasks.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">About ReplyBuzz</h1>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mt-10">
                <p>
                    ReplyBuzz was built to help businesses get more value from their Google Business Profile without wasting time on repetitive tasks.
                </p>
                <p>
                    For many local businesses, Google is where customers decide who to call, visit, or trust. Reviews, fast responses, and regular profile activity can directly impact visibility and customer decisions. But most business owners are busy running operations, not managing profiles every day.
                </p>
                <p>
                    That is where ReplyBuzz helps.
                </p>
                <p>
                    ReplyBuzz uses smart automation to simplify Google Business Profile management. Our platform helps businesses respond to reviews faster, publish fresh profile updates, and stay consistently active online.
                </p>
                <p>
                    By connecting your Google Business Profile, ReplyBuzz can help streamline routine engagement tasks while maintaining a professional presence that builds trust with potential customers.
                </p>
                <p>
                    We focus on keeping things simple, effective, and practical for business owners. Whether you run one location or multiple business profiles, ReplyBuzz is designed to save time and support growth.
                </p>

                <div className="mt-8">
                    <p className="font-semibold text-slate-900 mb-4">Our mission is straightforward:</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                        <li>Reduce manual work</li>
                        <li>Improve online presence</li>
                        <li>Help businesses attract more customers</li>
                        <li>Make growth tools accessible to every business</li>
                    </ul>
                </div>

                <p>
                    We believe technology should create results, not complexity.
                </p>
                <p>
                    ReplyBuzz continues to improve its platform, automation quality, reliability, and user experience while respecting privacy and transparency.
                </p>

                <div className="mt-12 pt-8 border-t">
                    <p className="text-slate-700">
                        For questions or support, please use the{" "}
                        <a href="/contact" className="text-primary hover:underline font-medium">
                            official website contact form
                        </a>
                        .
                    </p>
                    <p className="mt-6 text-sm text-slate-500">© 2026 ReplyBuzz. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
