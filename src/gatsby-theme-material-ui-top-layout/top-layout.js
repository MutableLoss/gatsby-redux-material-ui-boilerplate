import React from 'react';
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles';

// This is only a template for customization of the top layout
// Remove this file if you want to use the default from MUI
export default function ThemeTopLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
