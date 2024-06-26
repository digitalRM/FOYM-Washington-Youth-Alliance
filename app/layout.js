import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Washington Youth Alliance",
  description: "The Washington Youth Alliance is a youth-led organization that advocates for youth issues in Washington State.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background: '#f5f5f5', overflowX: 'hidden'}}><div className=" scroll-smooth">{children}</div></body>
    </html>
  );
}
