import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Replybuzz",
    description: "ReplyBuzz Privacy Policy - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">ReplyBuzz &bull; Last updated: March 2026</p>

            <div className="space-y-8 text-lg text-slate-700 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                    <p className="mb-4">ReplyBuzz (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) values your privacy.</p>
                    <p className="mb-4">This Privacy Policy explains how we collect, use, store, and protect information when you use ReplyBuzz and related services.</p>
                    <p>By using ReplyBuzz, you agree to this Privacy Policy.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                    <p className="mb-4">We collect only information reasonably necessary to operate the platform.</p>
                    
                    <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">A. Account Information</h3>
                    <p className="mb-2">When you sign in or create an account, we may collect:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Authentication provider ID (such as Google account ID)</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">B. Business Information</h3>
                    <p className="mb-2">If you connect third-party services such as Google Business Profile, we may access information you authorize, including:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Business name</li>
                        <li>Business locations</li>
                        <li>Business description</li>
                        <li>Reviews</li>
                        <li>Posts</li>
                        <li>Related profile data</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">C. Technical Information</h3>
                    <p className="mb-2">We may automatically collect limited technical data such as:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device type</li>
                        <li>Log data</li>
                        <li>Usage activity</li>
                        <li>Error reports</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Information</h2>
                    <p className="mb-2">We may use collected information to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Provide and improve ReplyBuzz features</li>
                        <li>Generate AI-assisted content</li>
                        <li>Connect authorized third-party accounts</li>
                        <li>Process subscriptions and billing status</li>
                        <li>Maintain security and prevent abuse</li>
                        <li>Monitor platform performance</li>
                        <li>Communicate important service updates</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">4. AI Processing</h2>
                    <p className="mb-4">ReplyBuzz may use third-party AI providers to generate content such as review replies, summaries, or suggested posts.</p>
                    <p className="mb-4">Information relevant to the requested task may be processed by those providers solely to deliver the feature.</p>
                    <p>We do not use your data for unrelated purposes unless stated otherwise.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Integrations</h2>
                    <p className="mb-4">ReplyBuzz may integrate with third-party platforms including Google and payment providers.</p>
                    <p className="mb-4">When you connect third-party accounts, you authorize the permissions you approve.</p>
                    <p className="mb-4">Use of those third-party services may also be governed by their own privacy policies and terms.</p>
                    <p>We are not responsible for third-party systems or policies.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Payments</h2>
                    <p className="mb-4">If paid plans are offered, payments may be processed by third-party providers such as PayPal or Razorpay.</p>
                    <p className="mb-4">ReplyBuzz does not store full payment card information.</p>
                    <p>We may receive billing confirmations, subscription status, and transaction references required to manage access.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Storage and Security</h2>
                    <p className="mb-4">We use commercially reasonable safeguards to protect data.</p>
                    <p className="mb-4">Information may be stored using secure cloud infrastructure providers.</p>
                    <p>However, no online system can guarantee absolute security.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Sharing</h2>
                    <p className="mb-4">We do not sell personal information.</p>
                    <p className="mb-2">We may share limited information only when necessary with:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Cloud hosting providers</li>
                        <li>Authentication providers</li>
                        <li>Payment processors</li>
                        <li>AI service providers</li>
                        <li>Legal authorities when required by law</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Data Retention</h2>
                    <p className="mb-2">We retain data only as long as reasonably necessary to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Provide the service</li>
                        <li>Meet legal or operational obligations</li>
                        <li>Resolve disputes</li>
                        <li>Enforce agreements</li>
                    </ul>
                    <p>We may delete or anonymize data when no longer needed.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Your Choices</h2>
                    <p className="mb-2">Depending on applicable law, you may be able to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Disconnect linked accounts</li>
                        <li>Request account deletion</li>
                        <li>Update certain account information</li>
                        <li>Stop using the platform at any time</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Children's Privacy</h2>
                    <p>ReplyBuzz is not intended for children under the age required by applicable law to use online services independently.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">12. International Use</h2>
                    <p className="mb-4">Your information may be processed in countries where our service providers operate.</p>
                    <p>By using ReplyBuzz, you consent to such transfers where legally permitted.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to This Policy</h2>
                    <p className="mb-4">We may update this Privacy Policy from time to time.</p>
                    <p>Updated versions will be posted on this page with a revised date.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact</h2>
                    <p className="mb-4">For privacy-related requests or questions, please contact us through the official website contact form.</p>
                    <p className="text-sm text-slate-500">&copy; 2026 ReplyBuzz. All rights reserved.</p>
                </section>
            </div>
        </div>
    );
}
