"use client"

import Box from '@mui/material/Box';
import ConnectWalletButton from "@/app/_components/Header/ConnectWalletButton";
import SwitchMode from "@/app/_components/Header/SwitchMode";
import NavBar from "@/app/_components/Header/NavBar";
import useScrolled from "@/hooks/useScrolled";

export default function Index() {
  const isScrolled = useScrolled()

  return (
    <Box component="header" sx={[
      {
        height: 72,
        px: 3,
        position: "sticky",
        top: 0,
        bgcolor: isScrolled ? '#ffffff' : 'transparent',
        borderBottom: "1px solid transparent",
        borderBottomColor: isScrolled ? "rgba(18, 18, 18, 0.08)" : 'transparent',
        transition: "all 0.2s ease-in-out",
        zIndex: 999,
      },
      theme =>
        theme.applyStyles('dark', {
          bgcolor: isScrolled ? "rgb(18, 18, 18)" : 'transparent',
          borderBottomColor: isScrolled ? "rgba(255, 255, 255, 0.08)" : 'transparent',
        })
    ]}>
      <Box sx={{
        display: 'flex',
        height: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <NavBar />
        <Box sx={{display: 'flex'}}>
          <SwitchMode />
          <ConnectWalletButton />
        </Box>
      </Box>
    </Box>
  )
}
