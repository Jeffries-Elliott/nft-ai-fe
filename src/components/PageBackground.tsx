"use client"

import Box from "@mui/material/Box";
import {styled} from '@mui/material/styles';

const StyledImage = styled("img")`
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    object-position: center;
`

const backgroundColorMap = {
  light: "linear-gradient(0deg, rgb(255, 255, 255) 5%, rgba(0, 0, 0, 0) 60%) rgba(0, 0, 0, 0.6)",
  dark: "linear-gradient(0deg, rgb(18, 18, 18) 5%, rgba(0, 0, 0, 0) 60%) rgba(0, 0, 0, 0.6)"
}

export default function PageBackground({ imageUrl }: { imageUrl: string }) {
  return (
    <Box sx={
      theme => ({
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "800px",
        zIndex: -1,
        "&::after": {
          backdropFilter: "blur(20px)",
          background: backgroundColorMap[theme.palette.mode],
          pointerEvents: "none",
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
        }
      }
    )}>
      <StyledImage src={imageUrl} alt="" />
    </Box>
  )
}
