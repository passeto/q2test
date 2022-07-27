import { createTheme } from '@mui/material/styles'

const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

const breakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values,
  up: (key) => `@media (min-width:${values[key]}px)`,
}

const overrides = {
  MuiButton: {
    root: {
      borderRadius: '10px',
      textTransform: 'none',
    },
  },
  MuiPaper: {
    rounded: {
      borderRadius: '12px',
      '@media(max-width: 600px)': {
        borderRadius: '0px',
      },
    },
  },
}

const themeLayout = createTheme({
  palette: {
    backgroungGlobal: {
      main: '#0b2c46',
    },
    primary: {
      main: '#006cb4',
      light: '#006cb4',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#86FFE9',
      light: '#86FFE9',
      contrastText: '#ffffff',
    },
    success: {
      main: '#1FE390',
      dark: '#10c87a',
      contrastText: '#ffffff',
    },
    blue: {
      500: '#35BFEE',
    },
    grey: {
      400: '#BFC7CF',
      500: '#AAB4BE',
      600: '#6F7E8C',
    },
  },
  typography: {
    fontFamily: [
      'Exo',
      'Open Sans',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  overrides,
  breakpoints,
})

export default themeLayout
