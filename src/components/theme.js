import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"
import amber from "@material-ui/core/colors/amber"

const baseTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber,
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
