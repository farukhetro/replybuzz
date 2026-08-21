import { DashboardCards } from "@/components/dashboard-cards";
import { MockChart } from "@/components/charts";
import { SentimentCard } from "@/components/sentiment-card";

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
                <p className="text-muted-foreground mt-1">Deep dive into your reputation metrics.</p>
            </div>

            <DashboardCards />

            <div className="grid gap-4 md:grid-cols-2">
                <MockChart />
                <SentimentCard />
            </div>
        </div>
    );
}
