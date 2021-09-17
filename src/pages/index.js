import * as React from "react"
import MuiLink from "@mui/material/Link"
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site with <MuiLink component={GatsbyLink} to="https://redux.js.org/" target="_blank">Redux</MuiLink> and <MuiLink component={GatsbyLink} to="https://material-ui.com/" target="_blank">Material-UI</MuiLink>.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <MuiLink component={GatsbyLink} to="/page-2/">Go to page 2</MuiLink> <br />
      <MuiLink component={GatsbyLink} to="/using-typescript/">Go to "Using TypeScript"</MuiLink>
    </p>
  </Layout>
)

export default IndexPage
