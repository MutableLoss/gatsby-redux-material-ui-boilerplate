import * as React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";
import { useStaticQuery, graphql } from "gatsby";

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
    container: {
      m: '0 auto',
      maxWidth: 960,
      p: '0 1.0875rem 1.45rem'
    },
    footer: {
      marginTop: '2rem'
    }
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box component="div" sx={styles.container}>
        <main>{children}</main>
        <Box component="footer" sx={styles.footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link to="https://www.gatsbyjs.com">Gatsby</Link>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
