import React from "react"

import { Button } from "@material-ui/core"

import GithubIcon from "../components/github"
import LinkedinIcon from "../components/linkedin"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      description="Portfolio website for Jamie Lau."
      lang="en"
      title="Home"
    />
    <div className="greeting">
      <h2 className="sm-header">Hi, my name is</h2>
      <h1 className="lg-header">Jamie Lau</h1>
      <GithubIcon />
      <LinkedinIcon />
      <Button color="primary">Learn More</Button>
    </div>
  </Layout>
)

export default IndexPage
