import Link from "./link"
import PropTypes from "prop-types"
import React from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import Appbar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  logoText: {
    fontSize: "1.5rem",
    textDecoration: "none",
  },
}))

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
  const classes = useStyles()

  return (
    <HideOnScroll props={siteTitle}>
      <Appbar>
        <Toolbar>
          <Typography variant="h2" className={classes.logoText}>
            <Link to="/" color="inherit" className="headerLink">
              {siteTitle}
            </Link>
          </Typography>
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
