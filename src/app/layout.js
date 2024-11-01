import {NextUIProvider} from "@nextui-org/react";
import { Inter } from 'next/font/google'
import "./globals.css";



export const metadata = {
  title: "Iconsax Font",
  description: "Generated by create next app",
};
const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
  })
   

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      
      <body>
      <NextUIProvider>
        {children}
        </NextUIProvider>
      </body>
      
    </html>
  );
}
