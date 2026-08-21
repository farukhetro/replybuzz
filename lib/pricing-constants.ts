export type PricingPlan = {
    id: string;
    name: string;
    description: string;
    locations: number;
    features: string[];
    highlight?: boolean;
    prices: {
        monthly: {
            INR: number;
            USD: number;
        };
        yearly: {
            INR: number;
            USD: number;
        };
    };
    comingSoon?: boolean;
};

export const PRICING_PLANS: PricingPlan[] = [
    {
        id: "starter",
        name: "Core",
        description: "Perfect for single location businesses.",
        locations: 1,
        features: [
            "1 Google Business Location",
            "Automated Review Replies",
            "AI-Generated Google Business Posts",
            "Smart Scheduling (human-like timing)",
            "Review Sentiment Detection",
            "Up to 40 replies per day",
            "Up to 10 posts per month",
            "Email Support",
        ],
        prices: {
            monthly: {
                INR: 399,
                USD: 9.99,
            },
            yearly: {
                INR: 2999,
                USD: 79.99,
            },
        },
    },
    {
        id: "growth",
        name: "Pro",
        description: "Ideal for growing multi-location brands.",
        locations: 3,
        highlight: true,
        features: [
            "Up to 3 Google Business Locations",
            "Automated Review Replies",
            "AI-Generated Google Business Posts",
            "Smart Scheduling (priority processing)",
            "Review Sentiment Detection",
            "Automation Dashboard",
            "Up to 150 replies per day (shared across locations)",
            "Up to 40 posts per month",
            "Priority Email Support",
        ],
        prices: {
            monthly: {
                INR: 999,
                USD: 19.99,
            },
            yearly: {
                INR: 7999,
                USD: 159.99,
            },
        },
    },
    {
        id: "agency",
        name: "Authority",
        description: "Designed for marketing agencies and large teams.",
        locations: 5,
        features: [
            "Up to 5 Google Business Locations",
            "Automated Review Replies",
            "AI-Generated Google Business Posts",
            "Smart Scheduling (high-priority processing)",
            "Review Sentiment Detection",
            "Multi-location Dashboard",
            "Automation Controls (Pause / Resume)",
            "Up to 400 replies per day (shared)",
            "Up to 120 posts per month",
            "Priority Support",
        ],
        prices: {
            monthly: {
                INR: 2499,
                USD: 49.99,
            },
            yearly: {
                INR: 19999,
                USD: 399.99,
            },
        },
    },
    {
        id: "enterprise",
        name: "Infinity",
        description: "For customized automation and large volumes.",
        locations: 0,
        comingSoon: true,
        features: [
            "Unlimited Google Business Locations",
            "Advanced Automation Controls",
            "Team Access & Role Management",
            "Custom Automation Limits",
            "Priority Infrastructure",
            "Dedicated Priority Support",
            "Enterprise-Level Security",
            "Custom Integration Options",
        ],
        prices: {
            monthly: {
                INR: 0,
                USD: 0,
            },
            yearly: {
                INR: 0,
                USD: 0,
            },
        },
    },
];
