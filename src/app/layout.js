import "./globals.css";
import Navbar from "./components/Navbar";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Study Buddy",
  description: "Developed by Anilov Villanueva",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSans.variable} antialiased min-h-screen hide-scrollbar`}
      >
        <div className="fixed inset-0 bg-gradient-to-b from-blue-500 to-purple-700 -z-10 h-full min-h-screen"></div>
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
