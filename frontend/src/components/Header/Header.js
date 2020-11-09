import React from "react";
import PropTypes from "prop-types";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import LeftSideBar from "./LeftSideBar";
import Content from "./Content";
import AppBar from "./AppBar";
import Image from "../../../static/instad-bg.png";

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
    h1:{
      color: "white",
      fontSize: "48px",
      margin: 0,
    },
    h3:{
      color:'#FEDB00',
      fontWeight:700,
      fontDecoration:'uppercase'
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
});

theme = {
  ...theme,
  overrides: {
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
};

const drawerWidth = 256;

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
  yellowButton: {
    backgroundColor: "#fed700",
    padding: "1rem",
    borderRadius: "3px",
    marginRight: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: ".8rem",
    },
    "&:hover": {
      background: "#dcb500",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  bar: {
    [theme.breakpoints.up("md")]: {
      display: "none",
      color: "green",
    },
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
  footer: {
    padding: theme.spacing(2),
    background: "#eaeff1",
  },
  navigation: {
    justifyItems: "center",
    display: "flex",
    alignContent: "center",
  },
};

function Paperbase(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.navigation}>
          <AppBar
            position="sticky"
            className={classes.bar}
            onDrawerToggle={handleDrawerToggle}
          />
          <Hidden implementation="js">
            <LeftSideBar
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <main className={classes.main}>
            <Content />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);

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
