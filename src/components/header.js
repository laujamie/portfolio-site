import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Alignment } from "@blueprintjs/core"

const Header = ({ siteTitle }) => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>Jamie Lau</Navbar.Heading>
      <Navbar.Divider />
    </Navbar.Group>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
