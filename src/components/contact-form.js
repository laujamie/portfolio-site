import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <Container>
        <Typography variant="h1">Contact Me</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField id="standard-basic" label="First Name"></TextField>
          <TextField id="standard-basic" label="Last Name"></TextField>
          <TextField id="standard-basic" label="Email"></TextField>
          <Button type="Submit">Submit</Button>
        </form>
      </Container>
    )
  }
}

export default ContactForm
