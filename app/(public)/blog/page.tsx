import Link from "next/link";
import { getBlogPosts, BlogPost } from "@/lib/blogger";

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="pt-16 pb-24 w-full min-h-[60vh]">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">ReplyBuzz Blog</h1>
                    <p className="text-lg text-slate-600">Tips, strategies, and updates about local SEO.</p>
                </div>

                {posts.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 border border-slate-200 shadow-xl flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-slate-100 flex items-center justify-center rounded-2xl mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">No posts yet</h2>
                        <p className="text-slate-500 max-w-sm">
                            We're currently setting up our blog. Check back soon for insights on growing your Google Business Profile.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-8">
                        {posts.map((post: BlogPost) => (
                            <Link
                                key={post.id}
                                href={`/blog${post.slug}`}
                                className="group block bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        {post.labels && post.labels.map(label => (
                                            <span key={label} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider rounded-full">
                                                {label}
                                            </span>
                                        ))}
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            {new Date(post.published).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 group-hover:text-primary transition-colors mb-4 leading-tight">
                                    {post.title}
                                </h2>
                                <div
                                    className="text-slate-600 line-clamp-3 text-lg leading-relaxed mb-6"
                                    dangerouslySetInnerHTML={{ __html: post.content.replace(/<[^>]*>?/gm, '').slice(0, 300) + "..." }}
                                />
                                <div className="flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all">
                                    Read Article
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
