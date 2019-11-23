import React from "react"

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import Link from "../components/link"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container style={{ height: "60vh" }}>
      <Typography variant="h2" style={{ paddingTop: "20vh" }}>
        404: Sorry the page you were looking for wasn't found
      </Typography>
      <Typography variant="h4" style={{ paddingTop: "3vh" }}>
        {" "}
        <Link to="/" color="inherit" style={{ fontWeight: "100" }}>
          Return home
        </Link>
      </Typography>
    </Container>
  </Layout>
)

export default NotFoundPage
