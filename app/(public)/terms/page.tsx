import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Replybuzz",
    description: "ReplyBuzz Terms of Service - Read the terms that govern your use of our platform.",
};

export default function TermsOfServicePage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">ReplyBuzz &bull; Last updated: March 2026</p>

            <div className="space-y-8 text-lg text-slate-700 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-4">By accessing or using ReplyBuzz, you agree to be bound by these Terms of Service.</p>
                    <p>If you do not agree, please do not use the platform.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">2. About ReplyBuzz</h2>
                    <p className="mb-2">ReplyBuzz provides software tools designed to help businesses manage and improve their Google Business Profile presence.</p>
                    <p className="mb-2">Features may include:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>AI-generated review reply assistance</li>
                        <li>Google Business Profile post publishing</li>
                        <li>Profile activity management tools</li>
                        <li>Business engagement workflows</li>
                    </ul>
                    <p>Features may change, improve, or be removed over time.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Eligibility</h2>
                    <p className="mb-4">You must be legally able to enter into a binding agreement and use the service in compliance with applicable laws.</p>
                    <p>If using ReplyBuzz on behalf of a business, you confirm you have authority to act for that business.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Account Access</h2>
                    <p className="mb-4">To use certain features, users may sign in using supported authentication providers such as Google.</p>
                    <p className="mb-4">By connecting an account, you authorize ReplyBuzz to access approved permissions required to provide requested features.</p>
                    <p className="mb-4">You may revoke access anytime through your account provider settings.</p>
                    <p>You are responsible for maintaining account security.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">5. User Responsibilities</h2>
                    <p className="mb-2">You agree to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Provide accurate business information</li>
                        <li>Use the service lawfully</li>
                        <li>Comply with Google Business Profile policies and third-party platform rules</li>
                        <li>Review and approve content where needed</li>
                        <li>Avoid misuse, spam, or harmful activity</li>
                    </ul>
                    <p>ReplyBuzz does not guarantee rankings, leads, reviews, or business growth.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Subscriptions and Payments</h2>
                    <p className="mb-4">ReplyBuzz may offer free or paid subscription plans.</p>
                    <p className="mb-2">If paid plans are offered:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Pricing will be shown before purchase</li>
                        <li>Billing may recur based on selected plan</li>
                        <li>Payments may be processed by third-party providers such as PayPal or Razorpay</li>
                        <li>We do not store full payment card details</li>
                    </ul>
                    <p>Failure to pay may result in suspension or cancellation of paid features.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Refunds</h2>
                    <p className="mb-4">Unless otherwise stated in writing, payments are non-refundable.</p>
                    <p>Exceptions may be provided at our sole discretion or where required by law.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Availability of Service</h2>
                    <p className="mb-4">We aim to provide reliable service but do not guarantee uninterrupted access.</p>
                    <p className="mb-2">Service may be limited, suspended, or modified due to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Maintenance</li>
                        <li>Third-party API changes</li>
                        <li>Technical issues</li>
                        <li>Security risks</li>
                        <li>Abuse prevention</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Third-Party Services</h2>
                    <p className="mb-4">ReplyBuzz may integrate with services such as Google.</p>
                    <p className="mb-4">We are not responsible for third-party outages, policy changes, account suspensions, or platform restrictions.</p>
                    <p>Use of third-party services may also be subject to their own terms.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Intellectual Property</h2>
                    <p className="mb-4">All ReplyBuzz branding, software, systems, and content are owned by ReplyBuzz unless otherwise stated.</p>
                    <p>You may not copy, resell, reverse engineer, or misuse the platform.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Limitation of Liability</h2>
                    <p className="mb-4">ReplyBuzz is provided &quot;as is&quot; and &quot;as available.&quot;</p>
                    <p className="mb-2">To the maximum extent permitted by law, ReplyBuzz is not liable for:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Lost profits</li>
                        <li>Lost data</li>
                        <li>Business interruption</li>
                        <li>Search ranking changes</li>
                        <li>Indirect or consequential damages</li>
                    </ul>
                    <p>Your use of the platform is at your own risk.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination</h2>
                    <p className="mb-2">We may suspend or terminate access if you:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Violate these Terms</li>
                        <li>Misuse the platform</li>
                        <li>Create security or legal risk</li>
                        <li>Abuse integrations or connected services</li>
                    </ul>
                    <p>You may stop using the service at any time.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Governing Law</h2>
                    <p className="mb-4">These Terms are governed by the laws of India.</p>
                    <p>Any disputes shall be subject to the courts of India.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Changes to Terms</h2>
                    <p className="mb-4">We may update these Terms from time to time.</p>
                    <p>Continued use of ReplyBuzz after updates means acceptance of revised Terms.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Contact</h2>
                    <p className="mb-4">For legal or support matters, please contact us through the official website contact form.</p>
                    <p className="text-sm text-slate-500">&copy; 2026 ReplyBuzz. All rights reserved.</p>
                </section>
            </div>
        </div>
    );
}
