import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  metadataBase: new URL('https://washington-youth.vercel.app'),
  title: "Washington Youth Alliance",
  description: "The Washington Youth Alliance is a youth-led organization that advocates for youth issues in Washington State.",
  openGraph: {
    title: 'Washington Youth Alliance',
    description: "The Washington Youth Alliance is a youth-led organization that advocates for youth issues in Washington State.",
    url: 'https://washington-youth.vercel.app',
    siteName: 'Washington Youth Alliance',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image of the white house with the line made with the Washington Youth Alliance colors.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background: '#f5f5f5', overflowX: 'hidden'}}><div className=" scroll-smooth">{children}</div></body>
    </html>
  );
}
