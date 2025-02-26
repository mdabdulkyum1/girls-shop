import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from 'react-hot-toast';
import NextAuthProvider from "@/Providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Girls Shop",
  description: "Generated by Md Abdul Kyum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="girlsShopLight">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
       <NextAuthProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
 
         <Navbar></Navbar>
           <main className="min-h-screen">
               {children}
            </main> 
           <Footer></Footer>
        </ThemeProvider>
        
          <Toaster />
          </NextAuthProvider>
      </body>
    </html>
  );
}
