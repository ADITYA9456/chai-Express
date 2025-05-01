import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Wrapper from "@/app/components/Sessionwraper";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chai Express",
  description: "A hub for all chai lovers ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
        <Wrapper>
          <Navbar />
          <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
            {children}
          </div>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}