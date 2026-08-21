export default function DocsPage() {
    return (
        <div className="pt-16 pb-24 w-full min-h-[60vh]">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Documentation</h1>
                <p className="text-lg text-muted-foreground mb-12">Learn how to maximize the value of ReplyBuzz for your business.</p>

                <div className="bg-white rounded-2xl p-12 border shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-slate-100 flex items-center justify-center rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Docs coming soon</h2>
                    <p className="text-muted-foreground">We are actively building our comprehensive knowledge base.</p>
                </div>
            </div>
        </div>
    );
}
