"use client"

import {useColorScheme} from "@mui/material/styles";
import {ConnectButton, darkTheme, lightTheme, RainbowKitProvider, Locale} from "@rainbow-me/rainbowkit";
import {useMemo} from "react";
import {useLocale, useTranslations} from "next-intl";

export default function ConnectWalletButton() {
  const t = useTranslations()
  const locale = useLocale() as Locale;
  const { mode, systemMode } = useColorScheme();
  const dynamicTheme = useMemo(() => {
    const theme = {
      light: lightTheme(),
      dark: darkTheme(),
    }
    return systemMode ? theme[systemMode]: theme[mode as "light" | "dark"];
  },[mode, systemMode])

  if(!mode) return null

  return (
    <RainbowKitProvider theme={dynamicTheme} locale={locale}>
      <ConnectButton chainStatus="icon" showBalance={false} label={t("Sign in")} />
    </RainbowKitProvider>
  );
}
