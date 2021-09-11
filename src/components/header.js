import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"

const Header = ({ siteTitle }) => {
  const useStyles = makeStyles(theme => ({
    header: {
      background: theme.palette.primary.main,
      marginBottom: `1.45rem`,
    },
    link: {
      color: theme.palette.primary.contrastText,
      textDecoration: `none`,
    },
    title: {
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }
  }))

  const classes = useStyles()

  return (
    <header
      className={classes.header}
    >
      <div
        className={classes.title}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            classes={{root: classes.link}}
          >
            {siteTitle}
          </Link>
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
