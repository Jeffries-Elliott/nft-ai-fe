"use client"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ConnectWalletButton from "@/app/[locale]/_components/Header/ConnectWalletButton";
import NavBar from "@/app/[locale]/_components/Header/NavBar";
import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import useFontColor from '../hooks/useFontColor';
import UserMenu from './UserMenu';

export default function Header() {
  const {color, trigger} = useFontColor()

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={[
        {
          height: 64,
          justifyContent: 'center',
          bgcolor: trigger ? '#ffffff' : 'transparent',
          borderBottom: "1px solid",
          borderBottomColor: trigger ? "rgba(18, 18, 18, 0.08)" : 'transparent',
          transition: "all 0.2s ease-in-out",
          backdropFilter: trigger ? 'blur(8px)' : 'none',
        },
        theme =>
          theme.applyStyles('dark', {
            bgcolor: trigger ? "rgba(18, 18, 18, 0.8)" : 'transparent',
            borderBottomColor: trigger ? "rgba(255, 255, 255, 0.08)" : 'transparent',
          })
      ]}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <NavBar />

          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {/*<IconButton sx={{color}}>
              <SearchIcon />
            </IconButton>*/}

            <ConnectWalletButton />

            <IconButton sx={{color, display: {xs: 'block', md: 'none'}}}>
              <MoreIcon />
            </IconButton>

            <UserMenu color={color} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
