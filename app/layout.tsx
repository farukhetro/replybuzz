import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://replybuzz.online"),
  title: {
    default: "ReplyBuzz - Automate Your Google Business Reviews & GBP Posts",
    template: "%s | ReplyBuzz"
  },
  description: "ReplyBuzz uses AI to automatically reply to your Google Business Profile reviews and generate local SEO GBP posts, saving you time and boosting your rankings.",
  keywords: [
    "Google Business Profile automation",
    "Google reviews auto reply",
    "AI review management",
    "Google My Business",
    "Local SEO automation",
    "GBP posts artificial intelligence",
    "Review management software",
    "ReplyBuzz"
  ],
  authors: [{ name: "ReplyBuzz Team", url: "https://replybuzz.online/about" }],
  creator: "ReplyBuzz",
  publisher: "ReplyBuzz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://replybuzz.online",
    siteName: "ReplyBuzz",
    title: "ReplyBuzz - Automate Your Google Business Profile",
    description: "ReplyBuzz uses AI to automatically reply to your Google Business Profile reviews and generate local SEO GBP posts.",
    images: [
      {
        url: "/Logos/Social Media.png",
        width: 1200,
        height: 630,
        alt: "ReplyBuzz - Google Business Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReplyBuzz - Automate Your Google Business Profile",
    description: "Automated review replies and local SEO posts powered by AI.",
    images: ["/Logos/Social Media.png"],
    creator: "@ReplyBuzzz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const country = headersList.get("cf-ipcountry") || "INTL";

  return (
    <html lang="en" data-country={country}>
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background`}>
        {/* Disable browser scroll restoration so page always starts at top on refresh */}
        <Script
          id="disable-scroll-restoration"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }`,
          }}
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CZ75H9ND4L"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CZ75H9ND4L');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1627020361652994');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1627020361652994&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>

        {/* Global Interaction Protection (Removed to allow normal text copying) */}

        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
