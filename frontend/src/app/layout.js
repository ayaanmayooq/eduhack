import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const inter = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jb-mono",
});

export const metadata = {
  title: "exAImination",
  description: "Generate mock tests using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="overflow-y-hidden">{children}</body>
    </html>
  );
}
