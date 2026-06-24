import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Alex_Brush } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "SruMan | Srushti અને Aman ની રિંગ સેરેમની",
  description: "Srushti અને Aman ની ભવ્ય રિંગ સેરેમની અને ડિજિટલ આમંત્રણ પત્રિકા. અમારા અનંતકાળની શરૂઆતની ઉજવણીમાં સામેલ થવા માટે સ્નેહભર્યું આમંત્રણ.",
  openGraph: {
    title: "SruMan | Srushti અને Aman ની રિંગ સેરેમની",
    description: "Srushti અને Aman ની ભવ્ય સગાઈ વિધિની ડિજિટલ કંકોતરી. આમંત્રણ પત્રિકા, પ્રેમ કહાની, સમારોહ સ્થળ અને ઓનલાઇન હાજરી પત્રક (RSVP).",
    type: "website",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" suppressHydrationWarning className={`${cormorant.variable} ${montserrat.variable} ${alexBrush.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#fbf9fb] text-[#2d142c] antialiased min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
