import React from "react"

import { Button, Container, Grid, Typography } from "@material-ui/core"

import GithubIcon from "../components/github"
import LinkedinIcon from "../components/linkedin"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        description="Portfolio website for Jamie Lau."
        lang="en"
        title="Home"
      />
      <Container id="landing">
        <Grid container align-items="center" spacing={2} id="greeting-grid">
          <Grid item xs={12}>
            <Typography id="greeting" variant="h2">
              Hi, my name is
            </Typography>
            <Typography id="greeting" variant="h1" color="primary">
              &nbsp;Jamie Lau
            </Typography>
          </Grid>
          <Grid container item xs={12} className="icons">
            <Grid item xs={3} sm={3} lg={1}>
              <a href="https://github.com/laujamie" className="icon">
                <GithubIcon />
              </a>
            </Grid>
            <Grid item xs={3} sm={3} lg={1}>
              <a href="https://linkedin.com/in/laujamie5" className="icon">
                <LinkedinIcon />
              </a>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Button variant="contained" color="secondary">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
