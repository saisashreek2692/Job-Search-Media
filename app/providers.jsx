"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem="false" defaultTheme="dark">
        <div>
            <Header />
            {children}
            <Footer />
        </div>      
    </ThemeProvider>
  );
}
