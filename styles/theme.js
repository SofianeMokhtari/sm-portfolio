import "@fontsource/montserrat";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
});


export default {
    useSystemColorMode: false,
    initialColorMode: "light",
    breakpoints,
    fonts: {
      body: 'Montserrat',
    },
    colors: {
      teal: {
        200: "#009F95",
        500: "#008179",
      },
      blue: {
        50: "#B9E9FF",
        100: "#8BECFF",
        200: "#005B85",
        300: "#6FC7FF",
        400: "#61B5FF",
        500: "#53A2FF",
        600: "#385D7D",
        700: "#2A466B",
        800: "#002B3F",
        900: "#0E1746",
      },
    },
  };