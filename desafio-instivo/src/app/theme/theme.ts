import { createTheme, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    highlight: Palette["primary"];
    white: string;
    black: string;
    purple: string;
    chipBackground?: string;
    transparent?: string;
  }

  interface PaletteOptions {
    highlight: PaletteOptions["primary"];
    white: string;
    black: string;
    purple: string;
    chipBackground?: string;
    transparent?: string;
  }
}

export const palette: PaletteOptions = {
  mode: "dark",
  primary: {
    light: "#9ACBD0",
    main: "#48A6A7", 
    dark: "#336D82",
    contrastText: "#FFFFFF",
  },
  secondary: {
    light: "#B3B3B3",
    main: "#999999", 
    dark: "#7F7F7F",
  },
  success: {
    light: "#66BB6A",
    main: "#4CAF50", 
    dark: "#388E3C",
  },
  warning: {
    main: "#e87d37",
  },
  error: {
    main: "rgb(255, 72, 72)", 
  },
  info: {
    main: "#76dbf4",
  },
  highlight: {
    light: "#fffb79",
    main: "#f6ea75",
    dark: "#eadf70",
  },
  background: {
    default: "#F5ECE0", 
  },
  text: {
    primary: "#EEEEEE", 
    secondary: "#CCCCCC", 
  },
  white: "#FFFFFF",
  black: "#000000",
  purple:" #693382",
  transparent: "#00000000",
};

export const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F2EFE7",
          color: "#EEEEEE",
          userSelect: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            backgroundColor: "#336D82", 
            color: "#EEEEEE",
            borderRadius: "5px",
            padding: "12px",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
          },
          "& .MuiOutlinedInput-input": {
            color: "#EEEEEE",
            padding: "6px",
          },
          "& .MuiInputLabel-root": {
            color: "#EEEEEE",
            fontWeight: 400,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #999",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#999",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            outline: "1px solid rgb(255, 72, 72)",
          },
          "&.Mui-error .MuiFormHelperText-root": {
            color: "rgb(255, 72, 72)",
            fontSize: "0.75rem",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #4CAF50", 
          },
        },
      },
    },
  },
  typography: {
    fontSize: 10,
    fontFamily: "'Roboto', sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700, color: "#EEEEEE" },
    h2: { fontSize: "1.5rem", fontWeight: 600, color: "#EEEEEE" },
    body1: { fontSize: "1rem", color: "#EEEEEE" },
    body2: { fontSize: "0.875rem", color: "#CCCCCC" },
  },
});
