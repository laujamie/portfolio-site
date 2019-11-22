import React from "react"

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container style={{ height: "100vh" }}>
      <Typography variant="h1" style={{ paddingTop: "20vh" }}>
        Sorry the page you were looking for wasn't found
      </Typography>
    </Container>
  </Layout>
)

export default NotFoundPage
