import type { Metadata, Viewport } from "next";
import { Mulish, Poppins, Cedarville_Cursive } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cedarville",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Vikrant", template: "%s | Vikrant" },
  description: "Personal portfolio of Vikrant.",
};

export const viewport: Viewport = {
  themeColor: "#05060a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} ${poppins.variable} ${cedarville.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}