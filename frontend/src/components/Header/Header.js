import React from "react"
import PropTypes from "prop-types"
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Image from "../../../static/instad-bg.png"
import Content from './Content'

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
      instad: "#FED800",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
    h1: {
      color: "white",
      fontSize: "48px",
      margin: 0,
    },
    h3: {
      color: "#FEDB00",
      fontWeight: 700,
      fontDecoration: "uppercase",
    },
    p: {
      fontSize: 16,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
})

theme = {
  ...theme,
  overrides: {
    MuiListItemText: {
      primary: {
        fontSize: "5rem",
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: theme.palette.primary.instad,
      },
    },
    MuiButton: {
      padding: "2rem",

      label: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "",
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
        margin: "0 16px",
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#404854",
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
}

const drawerWidth = 256

const styles = {
  root: {
    display: "flex",
    minHeight: "90vh",
    alignContent: "start",
    flexDirection: "column",
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${Image})`,
    backgroundSize: "cover",
  },
  app: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: theme.spacing(0),
  },
}

function Paperbase(props) {
  const { classes } = props
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.app}>
          <main className={classes.main}>
            <Content />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Paperbase)

{
  /* <Hidden smUp implementation="js">
            <LeftSideBar
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <LeftSideBar PaperProps={{ style: { width: drawerWidth } }} />
        </Hidden> */
}
