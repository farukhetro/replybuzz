import { DashboardCards } from "@/components/dashboard-cards";
import { MockChart } from "@/components/charts";
import { RecentActivity } from "@/components/recent-activity";
import { DashboardContent } from "@/components/dashboard-empty-state";
import { AutomationToggle } from "@/components/automation-toggle";

export default function DashboardPage() {
    return (
        <DashboardContent>
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
                        <p className="text-muted-foreground mt-1">Welcome back. Here is what is happening with your automation.</p>
                    </div>
                    <AutomationToggle />
                </div>

                <DashboardCards />

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <div className="col-span-4 rounded-xl">
                        <MockChart />
                    </div>

                    <RecentActivity />
                </div>
            </div>
        </DashboardContent>
    );
}

