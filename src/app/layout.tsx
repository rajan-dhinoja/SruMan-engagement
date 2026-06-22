import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="bg-[#fbf9fb] text-[#2d142c] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
