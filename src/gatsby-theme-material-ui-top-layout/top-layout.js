// @flow

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
export default function ThemeTopLayout({ children, theme }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
