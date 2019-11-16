import React from "react"

import { Paper, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  flex: {
    flexGrow: 1,
  },
  footer: {
    padding: 0,
    position: "absolute",
    textAlign: "center",
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "primary",
  },
})

const Footer = props => {
  const classes = useStyles()

  return (
    <div id="footer">
      <Paper className={classes.footer} square="true">
        <Grid container>
          <Grid container item sm={8}>
            <Typography>Hello</Typography>
          </Grid>
          <Grid container item sm={4}>
            <Typography>World!</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Footer
