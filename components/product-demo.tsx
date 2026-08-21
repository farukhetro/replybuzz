import { Video } from "lucide-react";

export function ProductDemo() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                    See ReplyBuzz in Action
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Watch how easy it is to put your entire Google Business Profile growth on autopilot in less than 2 minutes.
                </p>

                <div className="relative aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-sm border-4 border-white flex flex-col items-center justify-center text-slate-400">
                    <Video className="w-16 h-16 mb-4 opacity-50" />
                    <p className="font-medium text-lg">16:9 Video Placeholder</p>
                    <p className="text-sm opacity-70">Add your product demo video here later</p>
                </div>
            </div>
        </section>
    );
}
