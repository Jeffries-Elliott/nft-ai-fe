'use client';

import {Inter} from "next/font/google";
import {createTheme} from "@mui/material/styles";

const inter = Inter({
  subsets: ['latin'],
})

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
  },
});

export default theme;
