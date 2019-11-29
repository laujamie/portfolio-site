import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"
import amber from "@material-ui/core/colors/amber"

const baseTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber,
  },
  typography: {
    h2: {
      fontSize: "3rem",
    },
  },
  overrides: {
    Link: {
      underline: {
        "&&&&:hover:before": {
          textDecoration: "none",
        },
      },
    },
  },
})

const theme = responsiveFontSizes(baseTheme)

export default theme
