import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import {useEffect} from "react";
import {useTranslations} from "next-intl";
import useFontColor from "../hooks/useFontColor";

export default function NavBar() {
  const t = useTranslations()
  const {color, hoveredColor} = useFontColor()

  const StyledLink = styled(Link)(({ theme }) => ({
    flexShrink: 0,
    color,
    textDecoration: 'none',
    marginRight: theme.spacing(3),
    "&:hover": {
      color: hoveredColor,
    }
  }));

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
        marginRight: 3,
        display: {xs: "none", sm: "none", md: "block"}
      }} />

      <StyledLink href="/stats" sx={{display: {xs: "none", sm: "none", md: "block"}}}>
        {t("Stats")}
      </StyledLink>
    </Box>
  )
}
