import React from "react"

import { Container, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  flex: {
    flexGrow: 1,
  },
  footer: {
    padding: 0,
    position: "absolute",
    left: 0,
    right: 0,
  },
  footerCol: {
    textAlign: "center",
  },
})

const Footer = props => {
  const classes = useStyles()

  return (
    <div id="footer">
      <Container className={classes.footer}>
        <Grid container>
          <Grid container item sm={8} xs={12} className={classes.footerCol}>
            <Typography variant="h5">Hello</Typography>
          </Grid>
          <Grid container item sm={4} xs={12} className={classes.footerCol}>
            <Typography>World!</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography>
              &#169;&nbsp;Jamie&nbsp;Lau&nbsp;{new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
