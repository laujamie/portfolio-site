import React from "react"

import { Button, Container, Grid, Typography } from "@material-ui/core"

import GithubIcon from "../components/github"
import LinkedinIcon from "../components/linkedin"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
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
          <Grid container item xs={12}>
            <Typography id="greeting" variant="h2">
              I'm a software developer.
            </Typography>
          </Grid>
          <Grid container item xs={12} className="icons">
            <Grid item xs={3} sm={2} lg={1}>
              <a
                href="https://github.com/laujamie"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </Grid>
            <Grid item xs={3} sm={2} lg={1}>
              <a
                href="https://linkedin.com/in/laujamie5"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Button variant="contained" color="secondary" href="/#projects">
              My Work
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container id="about-me">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" id="about" style={{ paddingTop: "3vh" }}>
              About Me
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              paddingTop: "2vh",
            }}
          >
            <Typography variant="body1" style={{ fontSize: "1.5rem" }}>
              I am an Honours Statistics and Computational Mathematics student
              at the University of Waterloo with a passion for learning and
              developing quality code.
            </Typography>
          </Grid>
          <Grid item zeroMinWidth>
            <Typography variant="body1" style={{ fontSize: "1.5rem" }}>
              When I'm not busy doing schoolwork, I enjoy working on amazing
              projects and continually learning new technologies.
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={3} sm={2} lg={1}>
              <Button color="primary" variant="outlined">
                Resume
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container id="projects">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" id="project-header">
              Projects
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
