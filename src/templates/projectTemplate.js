import React from "react"
import { graphql } from "gatsby"

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <p>{frontmatter.title}</p>
    </div>
  )
}

export default ProjectTemplate

export const pageQuery = grqphql`
query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
        frontmatter {
            path
            title
            source
            preview
        }
    }
}`
