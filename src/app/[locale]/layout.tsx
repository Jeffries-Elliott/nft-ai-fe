import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from "next";
import Providers from "@/Providers";
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Header from "@/app/[locale]/_components/Header";
import { NextIntlClientProvider } from "next-intl";
import {use} from "react";
import {getMessages} from "next-intl/server";

export const metadata: Metadata = {
  title: "AiMint",
  description: "Mint nft by Ai",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = use(params)
  const messages = use(getMessages());

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <CssBaseline />
            <InitColorSchemeScript attribute="class" />
            <Header />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
