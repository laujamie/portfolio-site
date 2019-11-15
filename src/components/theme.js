import { createMuiTheme } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: "#ffffff",
    },
  },
  overrides: {
    MuiLink: {
      underline: {
        "&&&&:hover:before": {
          textDecoration: "none",
        },
      },
    },
  },
})

export default theme
