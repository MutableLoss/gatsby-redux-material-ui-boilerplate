import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";

const Header = ({ siteTitle }) => {
  const styles = {
    header: {
      backgroundColor: theme => theme.palette.primary.main,
      marginBottom: '1.45rem'
    },
    link: {
      color: theme => theme.palette.primary.contrastText,
      textDecoration: 'none'
    },
    title: {
      m: '0 auto',
      maxWidth: 960,
      p: '1.45rem 1.0875rem'
    }
  }

  return (
    <Box component="header" sx={styles.header}>
      <Box component="div" sx={styles.title}>
        <Link
          to="/"
          sx={styles.link}
        >
          <Typography variant="h2" sx={{ m: 0 }}>
              {siteTitle}
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
