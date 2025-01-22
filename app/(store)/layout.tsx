import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/components/Footer";

const icon = "/Screenshot 2025-01-01 110103.png";

export const metadata: Metadata = {
  title: "Shop.co",
  description: "Buy Anything You Want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body>
          <head>
            <link rel="icon" href={icon} />
          </head>
          <main>
            <Header />
            {children}
            <Footer />
            <SanityLive />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
