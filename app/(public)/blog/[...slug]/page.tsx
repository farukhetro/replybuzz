import { getBlogPostByPath } from "@/lib/blogger";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const dynamic = 'force-dynamic';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string[] }> }) {
    // In Next.js 15 params is a Promise and must be awaited
    const { slug } = await params;
    const path = '/' + slug.join('/');
    const post = await getBlogPostByPath(path);

    if (!post) {
        notFound();
    }

    return (
        <div className="pt-16 pb-24 w-full min-h-screen bg-slate-50/30">
            <div className="container mx-auto px-4 max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold mb-12 transition-all group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    Back to Blog
                </Link>

                <article>
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            {post.labels && post.labels.map((label: string) => (
                                <span key={label} className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-black uppercase tracking-wider rounded-xl">
                                    {label}
                                </span>
                            ))}
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                                {new Date(post.published).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 py-6 border-y border-slate-100">
                            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                                {post.author.displayName.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-black text-slate-900">{post.author.displayName}</p>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Author • ReplyBuzz</p>
                            </div>
                        </div>
                    </header>

                    <div
                        className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed 
                        prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                        prose-p:mb-8 prose-p:text-lg md:prose-p:text-xl
                        prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-slate-100
                        prose-strong:text-slate-900 prose-strong:font-black"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-primary opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-4">Want more insights?</h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
                            Automate your Google Business reviews & blog posts with ReplyBuzz AI today.
                        </p>
                        <Link href="/#pricing">
                            <Button className="h-14 px-10 rounded-2xl bg-primary text-black font-black text-xl hover:bg-white transition-all shadow-xl shadow-primary/20">
                                Get Started Free
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
