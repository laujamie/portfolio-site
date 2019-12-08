import React from "react"
import { graphql } from "gatsby"

import { Container, Grid, Typography } from "@material-ui/core"

import Layout from "../components/layout"

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const description = Array(frontmatter.description).map(
    (description, index) => <li key={index}>{description}</li>
  )
  return (
    <Layout>
      <Container spacing={1} style={{ height: "95vh" }}>
        <Grid container style={{ paddingTop: "10vh" }}>
          <Grid item xs={12}>
            <Typography variant="h1" style={{ fontSize: "3rem" }}>
              {frontmatter.title}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: "2vh" }}>
            <ul>{description}</ul>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        source
        preview
        description
      }
    }
  }
`
