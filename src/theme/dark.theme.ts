import { createTheme } from "@mui/material";
import { blueGrey, cyan, green } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: green["A200"],
      },
      secondary: {
        main: cyan["A400"],
      },
      background: {
        default: blueGrey['800'],
        paper: blueGrey['700'],
      }
    },
  });