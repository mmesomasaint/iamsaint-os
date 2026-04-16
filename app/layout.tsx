import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAINT // Systems Architect",
  description: "Web3, AI, and DevOps Infrastructure for high-stakes environments.",
  metadataBase: new URL('https://iamsaint.me'), // Required for absolute OG paths
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SAINT // Systems Architect",
    description: "Architecting decentralized finance, agentic AI, and automated DevOps.",
    url: 'https://iamsaint.me',
    siteName: 'IAMSAINT.ME',
    images: [
      {
        url: '/opengraph-image.png', // Pointing to your public folder
        width: 1200,
        height: 630,
        alt: 'SAINT // Systems Architect Console',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SAINT // Systems Architect",
    description: "Web3, AI, and DevOps Infrastructure.",
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body className={`${mono.className} industrial-grid min-h-screen antialiased`}>
        {/* Top Navigation Bar - Industrial Style */}
        <nav className="border-b border-system-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-bold tracking-tighter text-system-green group">
              IAMSAINT <span className="text-[10px] text-gray-600 group-hover:text-system-green/50 transition-colors ml-1">v1.0.4</span>
            </a>

            <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-500">
              {/* Core Sectors */}
              <div className="hidden md:flex gap-6">
                <a href="/finance" className="hover:text-white transition-colors">/finance</a>
                <a href="/intelligence" className="hover:text-white transition-colors">/intelligence</a>
                <a href="/ops" className="hover:text-white transition-colors">/ops</a>
              </div>

              {/* The Journal "Trap" - High Contrast Industrial Style */}
              <a 
                href="/blog" 
                className="relative px-4 py-1.5 bg-system-green-5 border border-system-green-30 text-system-green hover:border-system-green hover:text-black transition-all duration-300 flex items-center gap-2 group"
              >
                {/* Live Status Pulse */}
                <span className="w-1.5 h-1.5 rounded-full bg-system-green animate-pulse" />
                <span className="font-bold">Journal.exe</span>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-system-green-20 hover:border-system-green" />
              </a>
            </div>
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto px-4 py-12">
          {children}
        </main>

        <footer className="border-t border-system-border mt-20">
          <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center text-[10px] text-gray-500 font-mono">
            <span>© 2026 IAMSAINT</span>
            <span className="text-system-green">ST@OL.S : ACTIVE</span>
          </div>
        </footer>
      </body>
    </html>
  );
}