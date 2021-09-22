//** @jsx jsx */
import { jsx, css } from "@emotion/react"
import * as React from 'react';
import PropTypes from "prop-types"
import MuiLink from "@mui/material/Link"
import { Link as GatsbyLink } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const styles = {
    container: css`
      margin: 0 auto;
      max-width: 960;
      padding: 0 1.0875rem 1.45rem;
    `,
    footer: css`
      margin-top: 2rem;
    `
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div css={styles.container}>
        <main>{children}</main>
        <footer css={styles.footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <MuiLink component={GatsbyLink} to="https://www.gatsbyjs.com">Gatsby</MuiLink>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
