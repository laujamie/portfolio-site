import React from "react"

import { Paper, Grid, Typography } from "@material-ui/core"

const Footer = props => {
  return (
    <div id="footer">
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography variant="body2">
            &#169;&nbsp;Copyright&nbsp;{new Date().getFullYear()}
            &nbsp;Jamie&nbsp;Lau
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
