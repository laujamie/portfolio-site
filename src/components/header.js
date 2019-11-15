import Link from "./link"
import PropTypes from "prop-types"
import React from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import Appbar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
}))

const Header = ({ siteTitle }) => {
  return (
    <Appbar>
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" color="inherit">
            {siteTitle}
          </Link>
        </Typography>
      </Toolbar>
    </Appbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
