import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <Paper>
        <Container>
          <Typography variant="h1">Contact Me</Typography>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  id="standard-full-width"
                  fullWidth
                  label="Name"
                  placeholder="John Doe"
                  InputLabelProps={{ shrink: true }}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-full-width"
                  fullWidth
                  label="Email"
                  placeholder="email@example.com"
                  InputLabelProps={{ shrink: true }}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-full-width"
                  fullWidth
                  label="Message"
                  placeholder="Hello World!"
                  InputLabelProps={{ shrink: true }}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button type="Submit" color="primary" variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    )
  }
}

export default ContactForm
