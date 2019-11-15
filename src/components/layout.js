/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import theme from "./theme"
import "./layout.scss"
import { ThemeProvider } from "@material-ui/core/styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <div id="app">
          <header>
            <Header siteTitle={data.site.siteMetadata.title}></Header>
          </header>
          <main id="home">{children}</main>
          <footer>
            <p>©&nbsp;{new Date().getFullYear()}&nbsp;Jamie&nbsp;Lau.</p>
          </footer>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
