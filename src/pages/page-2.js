import * as React from "react"
import MuiLink from "@mui/material/Link"
import { Link as GatsbyLink } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <MuiLink component={GatsbyLink} to="/">Go back to the homepage</MuiLink>
  </Layout>
)

export default SecondPage
