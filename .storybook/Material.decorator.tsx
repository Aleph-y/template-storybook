import React, { useMemo  } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { themes } from '../src/theme'


export const MaterialDecorator = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => themes[themeKey] || themes['light'], [themeKey])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Story/>
    </ThemeProvider>
  );
};