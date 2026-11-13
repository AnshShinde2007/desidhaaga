import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desi Dhaga — Handcrafted Mulmul Cotton Sarees",
  description:
    "Discover the effortless beauty of handwoven Mulmul cotton sarees, crafted by master artisans from Santipur and Phulia weaving guilds. 100s count pure gossamer cotton, naturally dyed, 100% handloom.",
  keywords: [
    "Desi Dhaga",
    "mulmul saree",
    "cotton saree",
    "handwoven saree",
    "Indian saree",
    "handloom",
    "artisan saree",
    "Santipur",
    "Phulia",
    "Jamdani",
    "natural dye saree",
  ],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Desi Dhaga — Handcrafted Mulmul Cotton Sarees",
    description:
      "Discover the effortless beauty of handwoven Mulmul cotton sarees, crafted by master artisans from Santipur and Phulia weaving guilds.",
    siteName: "Desi Dhaga",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Desi Dhaga Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desi Dhaga — Handcrafted Mulmul Cotton Sarees",
    description:
      "Discover the effortless beauty of handwoven Mulmul cotton sarees, crafted by master artisans from Santipur and Phulia weaving guilds.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
