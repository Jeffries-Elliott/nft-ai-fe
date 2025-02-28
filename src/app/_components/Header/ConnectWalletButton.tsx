"use client"

import {useColorScheme} from "@mui/material/styles";
import {ConnectButton, darkTheme, lightTheme, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {useMemo} from "react";

export default function ConnectWalletButton() {
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
    <RainbowKitProvider theme={dynamicTheme}>
      <ConnectButton chainStatus="icon" showBalance={false} label="Sign in" />
    </RainbowKitProvider>
  );
}
