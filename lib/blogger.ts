export interface BlogPost {
    id: string;
    title: string;
    content: string;
    published: string;
    updated: string;
    url: string;
    slug: string; // SEO-friendly path, e.g. "/2026/03/post-title.html"
    author: {
        displayName: string;
    };
    labels?: string[];
}

function extractSlug(url: string): string {
    try {
        return new URL(url).pathname; // e.g. "/2026/03/why-ignoring-customer-reviews.html"
    } catch {
        return url;
    }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    const BLOG_ID = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
    const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;

    if (!BLOG_ID || !API_KEY || BLOG_ID === "your_blog_id_here") {
        console.warn("Blogger API: Missing or default credentials in .env.local");
        return [];
    }

    try {
        const response = await fetch(
            `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=50`,
            { cache: 'no-store' }
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Blogger API Error Status:", response.status, errorData);
            return [];
        }

        const data = await response.json();
        const items: BlogPost[] = (data.items || []).map((post: BlogPost) => ({
            ...post,
            slug: extractSlug(post.url),
        }));
        console.log(`Blogger API: Successfully found ${items.length} posts.`);
        return items;
    } catch (error) {
        console.error("Blogger API: Error fetching posts:", error);
        return [];
    }
}

export async function getBlogPostByPath(path: string): Promise<BlogPost | null> {
    const BLOG_ID = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
    const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;

    if (!BLOG_ID || !API_KEY) return null;

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    try {
        const response = await fetch(
            `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/bypath?path=${encodeURIComponent(normalizedPath)}&key=${API_KEY}`,
            { cache: 'no-store' }
        );

        if (!response.ok) return null;
        const post = await response.json();
        return { ...post, slug: extractSlug(post.url) };
    } catch (error) {
        console.error("Blogger API: Error fetching post by path:", error);
        return null;
    }
}
