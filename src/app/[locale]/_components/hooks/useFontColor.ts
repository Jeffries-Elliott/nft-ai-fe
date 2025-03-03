import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from '@mui/material/styles';
import { useMemo } from "react";

export default function useFontColor() {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const {color, hoveredColor} = useMemo(() => {
    let color = theme.palette.text.primary
    let hoveredColor = theme.palette.text.secondary
    if (theme.palette.mode === "dark" || !trigger) color = "#ffffff"
    if (theme.palette.mode === "light" && !trigger) hoveredColor = "rgba(255, 255, 255, 0.7)"
    return {
      color,
      hoveredColor
    }
  }, [theme.palette.mode, trigger]);

  return { color, hoveredColor, trigger };
}
