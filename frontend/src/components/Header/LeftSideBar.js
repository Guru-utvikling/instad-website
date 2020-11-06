import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import PermMediaOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActual";
import PublicIcon from "@material-ui/icons/Public";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import { Link } from "gatsby";
import Logo from "../../../static/instad-logo.png";

const url_LINK = "http://localhost:8000/";
const categories = [
  {
    id: "Develop",
    children: [
      { id: "Om oss", icon: <PeopleIcon />, active: true, slug: "om-oss" },
      { id: "Tjenester", icon: <DnsRoundedIcon />, slug: "tjenester" },
      {
        id: "Ledige stillinger ",
        icon: <PermMediaOutlinedIcon />,
        slug: "ledige-stillinger",
      },
      { id: "Events", icon: <PublicIcon />, slug: "events" },
      { id: "Blogg", icon: <SettingsEthernetIcon />, slug: "blogg" },
      {
        id: "Kontakt oss",
        icon: <SettingsInputComponentIcon />,
        slug: "kontakt-oss",
      },
    ],
  },
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.primary.instad,
  },
  mainlist: {
    padding: theme.spacing(2, 2),
    textAlign: "center",
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "black",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.primary.instad,
  },
  itemActiveItem: {
    color: "#4fc3f7",
  },
  itemPrimary: {
    fontSize: "1rem",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  menuLink: {
    color: "inherit",
    textDecoration: "none",
  },
});

function Navigator(props) {
  const { classes, ...other } = props;

  return (
    <Drawer anchor="left" variant="permanent" {...other}>
      <List className={classes.mainlist} disablePadding>
        <Link to={url_LINK}>
          <img width={140} height={147} src={Logo} alt="instad-logo" />
        </Link>

        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, slug }) => (
              <Link key={id} className={classes.menuLink} to={url_LINK + slug}>
                <ListItem
                  key={childId}
                  button
                  className={clsx(
                    classes.item,
                    active && classes.itemActiveItem
                  )}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
