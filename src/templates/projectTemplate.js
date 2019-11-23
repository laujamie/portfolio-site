import React from "react"
import { graphql } from "gatsby"

import { Container, Grid, Typography } from "@material-ui/core"

import Layout from "../components/layout"

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h1">{frontmatter.title}</Typography>
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
      }
    }
  }
`
