//** @jsx jsx */
import { jsx, css } from "@emotion/react"
import PropTypes from "prop-types"
import MuiLink from "@mui/material/Link"
import { Link as GatsbyLink } from "gatsby"

import { useTheme } from "@mui/material/styles"

const Header = ({ siteTitle }) => {
  const theme = useTheme()

  const styles = {
    header: css`
      background-color: ${theme.palette.primary.main};
      margin-bottom: 1.45rem;
    `,
    link: css`
      color: ${theme.palette.primary.contrastText};
      text-decoration: none;
    `,
    title: css`
      margin: 0 auto;
      max-width: 960;
      padding: 1.45rem 1.0875rem;
    `
  }

  return (
    <header css={styles.header}>
      <div css={styles.title}>
        <h1 style={{ margin: 0 }}>
          <MuiLink
            component={GatsbyLink}
            to="/"
            sx={styles.link}
          >
            {siteTitle}
          </MuiLink>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
