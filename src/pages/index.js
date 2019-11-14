import React from "react"

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
    </div>
  </Layout>
)

export default IndexPage
