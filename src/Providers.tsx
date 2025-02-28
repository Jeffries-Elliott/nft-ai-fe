"use client"

import {config} from "@/utils/wagmi";
import theme from "@/utils/theme";
import {WagmiProvider} from "wagmi";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import {ThemeProvider} from "@mui/material/styles";

const queryClient = new QueryClient();

export default function Providers({
 children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme} defaultMode="system">
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

