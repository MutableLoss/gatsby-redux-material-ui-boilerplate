import React from "react";
import { Provider } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";

import createStore from "../../state/createStore";
export default function TopLayout({ children, theme }) {
  const store = createStore();

  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>
    </Provider>
  );
}