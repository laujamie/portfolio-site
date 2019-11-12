import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="greeting">
      <h2 className="sm-header">Hi, my name is</h2>
      <h1 className="lg-header">Jamie Lau</h1>
    </div>
  </Layout>
)

export default IndexPage
