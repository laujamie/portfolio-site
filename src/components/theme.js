import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"
import amber from "@material-ui/core/colors/amber"

const baseTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber,
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    h1: {
      fontFamily: "'Nunuto', sans-serif",
      fontSize: "3.5rem",
      fontWeight: "600",
      letterSpacing: "-0.045em",
    },
    h2: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: "3rem",
      fontWeight: "400",
      latterSpacing: "-0.045em",
    },
    body1: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: "1.4rem",
      fontWeight: "300",
      letterSpacing: "-0.01875em",
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
