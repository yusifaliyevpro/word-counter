import type { Metadata } from "next";
import { Poppins, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const source_sans_3 = Source_Code_Pro({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Count Word by Yusif Aliyev",
  description:
    "You can use this app as a text editor to count words and get statistics",
  authors: [{ name: "Yusif Aliyev", url: "https://yusifaliyevpro.com/" }],
  openGraph: {
    title: "Count Word by YusifAliyevPro",
    description:
      "You can use this app as a text editor to count words and get statistics",
    images: [
      {
        url: "/Count-Word.png",
        width: 1200,
        height: 630,
        alt: "Count-Word Logo 1200x630",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${source_sans_3.className} ${poppins.variable} min-h-svh`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
