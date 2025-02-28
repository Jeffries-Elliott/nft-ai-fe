import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/Providers";
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Header from "@/app/_components/Header";

export const metadata: Metadata = {
  title: "AiMint",
  description: "Mint nft by Ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <CssBaseline />
          <InitColorSchemeScript attribute="class" />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
