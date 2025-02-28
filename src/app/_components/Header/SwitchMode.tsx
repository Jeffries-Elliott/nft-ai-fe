"use client"

import {useColorScheme} from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import {useMemo} from "react";


export default function SwitchMode() {
  const { mode, systemMode, setMode } = useColorScheme();
  const currentMode = useMemo(() => systemMode ? systemMode : mode,[mode, systemMode]);

  if (!mode) return null;

  return (
    <IconButton sx={{marginRight: 1}} onClick={() => setMode(currentMode === "dark" ? "light" : "dark")}>
      { currentMode === "dark" ? <LightMode /> : <DarkMode /> }
    </IconButton>
  )
}
