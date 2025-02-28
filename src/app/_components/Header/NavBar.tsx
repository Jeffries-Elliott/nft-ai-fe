import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import useScrolled from "@/hooks/useScrolled";
import {useEffect} from "react";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  const isScrolled = useScrolled()

  const StyledLink = styled(Link)(({ theme }) => {
    let color = theme.palette.text.primary
    let hoveredColor = theme.palette.text.secondary
    if (theme.palette.mode === "dark" || !isScrolled) color = "#ffffff"
    if (theme.palette.mode === "light" && !isScrolled) hoveredColor = "rgba(255, 255, 255, 0.7)"

    return {
      flexShrink: 0,
      color,
      textDecoration: 'none',
      marginRight: theme.spacing(3),
      "&:hover": {
        color: hoveredColor,
      }
    }
  });

  useEffect(() => {
    console.log("rerender")
  }, []);

  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Image src="/logo.png" alt="logo" width={40} height={40} style={{marginRight: "20px"}} />

      <StyledLink href="/" sx={{fontSize: "18px"}}>
        AiMint Nexus
      </StyledLink>

      <Box sx={{
        width: "1px",
        height: "20px",
        backgroundColor: "grey",
        marginRight: 3
      }} />

      <StyledLink href="/stats">
        Stats
      </StyledLink>
    </Box>
  )
}
