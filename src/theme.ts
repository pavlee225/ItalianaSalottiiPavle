import {createTheme} from '@mui/material/styles';

export const themeLight = createTheme({
  palette: {
    text: {
      primary: '#101010',
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      'Satoshi',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontFamily: 'General Sans',
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'General Sans',
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'General Sans',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.3rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: '1.15rem',
      fontWeight: 500,
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
        color: 'inherit',
      }
    }
  }
});
