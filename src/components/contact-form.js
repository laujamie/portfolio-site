import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import useContactForm from "../libs/use-contact-form"

const useStyles = makeStyles({
  contactForm: {
    marginTop: "1.5rem",
  },
})

const ContactForm = props => {
  const { inputs, handleInputChange, handleSubmit } = useContactForm()
  const classes = useStyles()

  return (
    <Paper elevate="10" className={classes.contactForm}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" id="contact-header">
              Contact Me
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Grid item container xs={12} spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="standard-full-width"
                    fullWidth
                    required
                    label="Name"
                    placeholder="Your Name"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="email"
                    id="standard-full-width"
                    fullWidth
                    required
                    label="Email"
                    placeholder="email@example.com"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-full-width"
                    fullWidth
                    required
                    label="Message"
                    placeholder="Hello World!"
                    name="message"
                    multiline
                    rowsMax="4"
                    value={inputs.message || ""}
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
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default ContactForm
