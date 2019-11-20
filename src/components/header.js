import Link from "./link"
import PropTypes from "prop-types"
import React from "react"
import Button from "@material-ui/core/Button"
import Appbar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"

const HideOnScroll = props => {
  const { children, window } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const Header = ({ siteTitle }) => {
  return (
    <HideOnScroll props={siteTitle}>
      <Appbar id="navbar">
        <Toolbar>
          <Typography variant="h2" id="logo" noWrap>
            <Link
              to="/"
              color="inherit"
              className="headerLink"
              underline="none"
            >
              {siteTitle}
            </Link>
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Button color="inherit" href="#about">
            About Me
          </Button>
        </Toolbar>
      </Appbar>
    </HideOnScroll>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
