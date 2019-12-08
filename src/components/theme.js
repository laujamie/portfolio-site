import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"
import amber from "@material-ui/core/colors/amber"

const baseTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber,
  },
  typography: {
    h1: {
      fontFamily: "'Nunuto', sans-serif",
      fontSize: "3.5rem",
      fontWeight: "600",
      letterSpacing: "-0.045em",
    },
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
