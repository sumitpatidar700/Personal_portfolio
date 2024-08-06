import { Inter } from "next/font/google";
import "./globals.css";
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '700'], // specify the weights you want to include
});
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>{children}</body>
    </html>
  );
}
