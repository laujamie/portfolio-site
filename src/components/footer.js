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
    textAlign: "center",
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
          <Grid container item xs={12} style={{ textAlign: "center" }}>
            <Typography>
              &#169;&nbsp;Copyright&nbsp;{new Date().getFullYear()}
              &nbsp;Jamie&nbsp;Lau
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
