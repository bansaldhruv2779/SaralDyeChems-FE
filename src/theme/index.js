import {createTheme} from "@mui/material";

const defaultFontFamily = [
  "Helvetica Neue",
  "-apple-system",
  "Arial",
  "Roboto",
];

function createShadow(px) {
  return `0 0 ${px}px 0 rgba(53, 64, 82,.05)`;
}

export const theme = createTheme({
  spacing: 4,
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1440,
  },
  overrides: {
    MuiButton: {
      // root: {
      //   padding: "6px 20px",
      // },
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: defaultFontFamily.join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    h1: {
      fontSize: "2rem",
      fontFamily: "Noto Sans",
      fontWeight: 800,
      lineHeight: 1.2,
    },
    // Anything related to text for buttons heading or text
  },
  shadows: [
    "none",
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
    createShadow(14),
  ],
  body: {
    background: "#FFF",
  },
  palette: {
    //Update light dark and contrastText for Primary color
    primary: {
      main: "#021961",
      light: "#021961",
      dark: "#021961",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#ff5820",
      light: "#ff5820",
      dark: "#ff5820",
      contrastText: "#fff",
    },
    buttonWhite: {
      main: "#FFF",
      light: "#FFF",
      dark: "#FFF",
      contrastText: "#000",
    },
    info: {
      main: "#847BFF",
      light: "#C2BDFF",
      dark: "#5A50E2",
      contrastText: "#FFF",
    },
    warning: {
      main: "#F7A12C",
      light: "#FFC672",
      dark: "#FF8202",
      contrastText: "#FFF",
    },
    success: {
      main: "#50D860",
      light: "#C8FFCF",
      dark: "#94FFA1",
      contrastText: "#FFF",
    },
    error: {
      main: "#CE151D",
      light: "#FF8884",
      dark: "#EE212E",
      contrastText: "#FFF",
    },
    disabled: {
      main: "#A4AFAF",
      light: "#CFDCDC",
      dark: "#6D7474",
      contrastText: "#F0F6F4",
    },
    background: {
      main: "#FFF",
      light: "#FFE",
      dark: "#28282B",
      white: "#FFF",
    },
    header: {
      main: "transparent",
      light: "#F0F6F4",
      dark: "#A4AFAF",
      white: "#E5E5E5",
    },
    primaryLight1: {
      main: "#2D5DF8",
      contrastText: "#FFF",
    },
    primaryLight2: {
      main: "#577DFA",
      contrastText: "#FFF",
    },
    grey100: {
      main: "#F8F9FA",
      contrastText: "#021961",
    },
    common: {
      primaryLight1: "#2D5DF8",
      primaryLight2: "#577DFA",
      primaryDark1: "#021143",
      white: "#ffffff",
      fontPrimary: "#2E2E2E",
      fontSecondary: "#636363",
      secondaryTransparent: "#28CDE31F",
      primaryTransparent: "#1F57FF1F",
      transparent: "transparent",
    },
  },
});
