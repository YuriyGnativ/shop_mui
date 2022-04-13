import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export interface ThemeConfigProps {
  children: React.ReactNode;
}

// background-color: rgb(26 32 39);

export function ThemeConfig({ children }: ThemeConfigProps) {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        light: "#484848",
        main: "#212121",
        dark: "#000000",
        contrastText: "#ffffff",
      },
      secondary: {
        light: "#ababab",
        main: "#f5f5f5",
        dark: "#f7f7f7",
        contrastText: "#000",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
