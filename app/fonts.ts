import { Poppins, Inter } from "next/font/google";

export const title = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  variable: "--font-poppins"
});

export const text = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});