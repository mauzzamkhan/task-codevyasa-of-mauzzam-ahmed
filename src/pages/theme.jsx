import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      //   main: red[500],
      main: "#fff",
    },
    secondary: {
      main: "#A88650", // Secondary color for buttons background
      contrastText: "#FFFFFF", // Text color on secondary background
    },
    typography: {
      headingstopbar: "#8D7855",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          fontSize: "16px",
          lineHeight: "20px",
          padding: "10px 16px",
          boxShadow: "none", // Flat design with no shadow
        },
      },
    },
  },
});
export default theme;
