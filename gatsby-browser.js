/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import Layout from './src/components/layout'
import { Provider } from 'react-redux'
import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import createStore from './src/state/createStore'

export const wrapRootElement = ({ element, props }) => {
  const store = createStore()
  const theme = createMuiTheme({
    status: {
      danger: orange[500]
    },
    spacing: 4
  })

  return (
    <Provider store={store}>
      <ThemeTopLayout theme={theme}>
        <Layout>
          {element}
        </Layout>
      </ThemeTopLayout>
    </Provider>
  )
}
