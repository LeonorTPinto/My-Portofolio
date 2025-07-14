import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: "#2c3e50", // Azul escuro neutro
    },
    secondary: {
      main: "#95a5a6", // Cinza claro elegante
    },
    background: {
      default: "#ecf0f1", // Fundo cinza muito claro
      paper: "#ffffff",
    },
    text: {
      primary: "#2c3e50", // Texto escuro
      secondary: "#7f8c8d", // Texto secundário
    },
  },
  typography: {
    fontFamily: "Segoe UI, Arial, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  }
});

theme= responsiveFontSizes(theme);

export default theme;