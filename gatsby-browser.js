/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { Provider } from 'react-redux'
import createStore from './src/state/createStore'

export const wrapRootElement = ({ element, props }) => {
  const store = createStore()

  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}
