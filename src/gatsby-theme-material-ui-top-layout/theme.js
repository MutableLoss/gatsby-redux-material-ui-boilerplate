import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import red from '@mui/material/colors/red'
import green from '@mui/material/colors/green'
import lightBlue from '@mui/material/colors/lightBlue'
import grey from '@mui/material/colors/grey'

// See the properties of MUI's default theme: 
// https://mui.com/customization/default-theme/
const DefaultTheme = createTheme()

// DefaultTheme can be removed, I'm
// just showing off how to merge themes
const AppTheme = createTheme(DefaultTheme, {
  palette: {
    mode: 'light',
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[700],
      contrastText: grey[50]
    },
    secondary: {
      light: red[500],
      main: red[700],
      dark: red[900],
      contrastText: grey[50]
    },
    action: {
      active: red[200],
      activeOpacity: 1,
      disabled: grey[200],
      disabledBackground: grey[500],
      disabledOpacity: 1,
      hover: red[100],
      hoverOpacity: 0.7,
      focus: red[600],
      focusOpacity: 1,
      selected: red[300],
      selectedOpacity: 1
    },
    background: {
      default: grey[50],
      paper: grey[200]
    },
    common: {
      black: grey[900],
      white: grey[200]
    },
    error: {
      light: red[400],
      main: red[500],
      dark: red[300],
      contrastText: grey[800]
    },
    success: {
      light: green[400],
      main: green[500],
      dark: green[300],
      contrastText: grey[800]
    },
    text: {
      primary: grey[700],
      secondary: lightBlue[500],
      disabled: grey[500]
    }
  },
  components: {},
  spacing: 4,
  typography: {
    // eslint-disable-next-line quotes
    fontFamily: ['Roboto', 'Arial', 'sans-serif'],
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    lineHeight: 1.5,
    h1: {
      fontSize: '5.5rem'
    }
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  }
});

export default responsiveFontSizes(AppTheme)
