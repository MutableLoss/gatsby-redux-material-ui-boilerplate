import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";

const Header = ({ siteTitle }) => {
  const styles = {
    header: {
      backgroundColor: 'primary.main',
      mb: {
        mobile: 2,
        desktop: 4
      }
    },
    link: {
      color: 'primary.contrastText',
      textDecoration: 'none'
    },
    title: {
      my: 0,
      mx: 'auto',
      maxWidth: 960,
      px: {
        mobile: 2,
        tablet: 4
      },
      py: {
        mobile: 4,
        tablet: 8
      }
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
