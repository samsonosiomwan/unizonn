import {createTheme} from "@material-ui/core";
// import {grey} from "@material-ui/core/colors"
export const theme = createTheme({
  palette: {
    spacing: (value) => value * 2,
    primary: {
      main: "#FFFFFF",
      dark: "#F4F6F5",
    },
    secondary: {
      main: "#05c731",
      // light: "white",
      // dark: "white",
      contrastText: "white",
    },
  },

  typography: {
    fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
  },
});