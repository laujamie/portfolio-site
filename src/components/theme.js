import { createMuiTheme } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"
import amber from "@material-ui/core/colors/amber"

const theme = createMuiTheme({
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

export default theme
