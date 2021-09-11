import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'
import lightBlue from '@material-ui/core/colors/lightBlue'
import grey from '@material-ui/core/colors/grey'

const AppTheme = createTheme({
  themeName: 'Default Theme',
  palette: {
    type: 'light',
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
    disabled: {
      light: grey[700],
      main: grey[800],
      dark: grey[900]
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
    }
  },
  overrides: {},
  spacing: 4,
  typography: {
    // eslint-disable-next-line quotes
    fontFamily: "'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
    fontWeight: 'normal',
    lineHeight: 1.5
  },
  zIndex: {
    modal: 1300,
    snackbar: 1400,
    drawer: 1200,
    appBar: 1100,
    mobileStepper: 1000,
    tooltip: 1500
  }
});

const theme = responsiveFontSizes(AppTheme)

export default theme
