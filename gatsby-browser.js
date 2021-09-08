/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { Provider } from 'react-redux'
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import AppTheme from './static/theme';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import createStore from './src/state/createStore'

export const wrapRootElement = ({ element, props }) => {
  const store = createStore()
  let theme = createTheme(AppTheme)
  theme = responsiveFontSizes(theme)

  return (
    <Provider store={store}>
      <ThemeTopLayout theme={theme}>
        {element}
      </ThemeTopLayout>
    </Provider>
  )
}
