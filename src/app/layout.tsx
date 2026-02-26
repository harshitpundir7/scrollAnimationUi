import type { Metadata } from "next";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Bull | Vitalizes Body and Mind®",
  description:
    "Red Bull Energy Drink gives you wings. Discover the premium energy drink trusted by the world's top athletes, champions, and visionaries. Experience the rush.",
  keywords: ["Red Bull", "energy drink", "wings", "athletes", "premium energy"],
  openGraph: {
    title: "Red Bull | Vitalizes Body and Mind®",
    description: "Experience the uncompromising energy that fuels world champions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${barlowCondensed.variable} ${interTight.variable} font-sans antialiased bg-[#08090a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
