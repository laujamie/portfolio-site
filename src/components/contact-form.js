import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import useContactForm from "../libs/use-contact-form"

const ContactForm = props => {
  const { inputs, handleInputChange, handleSubmit } = useContactForm()

  return (
    <Paper>
      <Container>
        <Typography variant="h1">Contact Me</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                id="standard-full-width"
                fullWidth
                label="Name"
                placeholder="John Doe"
                name="name"
                value={inputs.name}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-full-width"
                fullWidth
                label="Email"
                name="email"
                placeholder="email@example.com"
                value={inputs.email}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-full-width"
                fullWidth
                label="Message"
                name="message"
                placeholder="Hello World!"
                value={inputs.message}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  )
}

export default ContactForm
