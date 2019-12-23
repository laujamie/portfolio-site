import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Button, Grid, Typography } from "@material-ui/core"
import GithubIcon from "../components/github"
import LinkedinIcon from "../components/linkedin"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

const IndexPage = props => {
  return (
    <Layout>
      <SEO lang="en" title="Home" />
      <Grid container spacing={3} id="home">
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          alignContent="center"
          spacing={1}
          id="landing"
        >
          <Grid item xs={12}>
            <Typography id="greeting" variant="h2">
              Hi, my name is
            </Typography>
            <Typography id="greeting" variant="h2" color="primary">
              &nbsp;Jamie Lau
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">I'm a software developer.</Typography>
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Grid item>
              <a
                href="https://github.com/laujamie"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://linkedin.com/in/laujamie5"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            </Grid>
            <Grid item>
              <Button color="primary" variant="outlined">
                Resume
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid container item xs={12}>
            <Typography variant="h2" id="about">
              About Me
            </Typography>
          </Grid>
          <Grid
            container
            item
            spacing={1}
            style={{
              paddingTop: "0.5rem",
            }}
          >
            <Grid item xs={10}>
              <Typography variant="body1">
                I am an Honours Statistics and Computational Mathematics student
                at the University of Waterloo with a passion for learning and
                developing quality software.
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">
                When I'm not busy doing schoolwork, I enjoy working on amazing
                projects and continually learning new technologies.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Typography id="projects" variant="h2">
              Projects
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">This is a WIP.</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <ContactForm></ContactForm>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
