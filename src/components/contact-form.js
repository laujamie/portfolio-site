import React from "react"
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import useContactForm from "../libs/use-contact-form"

const ContactForm = props => {
  const {
    inputs,
    disabled,
    handleInputChange,
    handleSubmit,
    handleClearForm,
  } = useContactForm()

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h2" id="contact-header">
          Contact Me
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form className="contact" onSubmit={handleSubmit} autoComplete="off">
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
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={disabled}
          >
            Submit
          </Button>
          <Button
            onClick={handleClearForm}
            color="secondary"
            variant="contained"
          >
            Reset
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default ContactForm
