import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../../../static/instad-logo.png'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'gatsby';
import clsx from 'clsx';

const NavLinks = [
  {
    id: 'Develop',
    children: [
      { id: 'Om oss',  active: true, slug:'om-oss' },
      { id: 'Tjenester',  slug:'tjenester' },
      { id: 'Ledige stillinger ', slug:'ledige-stillinger' },
      { id: 'Events', slug:'events' },
      { id: 'Blogg', slug:'blogg' },
      { id: 'Kontakt oss', slug:'kontakt-oss' },
    ],
  },
];

const styles = (theme) => ({

  secondaryBar: {
    zIndex: 0,
  },
  menuLink:{
    color:"#000",
    textDecoration:'none',
    textAlign:"center"
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  appbar:{
    backgroundColor: "#FEDB00",

  },
  appbarSmall:{
      flexDirection:"row",
  }
});

function Header(props) {
  const url_LINK = 'http://localhost:8000/'
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar  className={classes.appbar} position="sticky" elevation={0}>
        <Toolbar>
          <Grid className={classes.appbarSmall} container spacing={1} justify='space-between'>
            <Hidden smUp>
              <img height="67" width="60" src={Logo}></img>
            </Hidden>
            <Hidden xsDown>
              <img height="107" width="100" src={Logo}></img>
            </Hidden>
            {/*<Hidden xsDown> 
            {NavLinks.map(({ id, children }) => (
              <React.Fragment key={id}>
              {children.map(({ id: childId, icon, active, slug }) => (
              <Link className={classes.menuLink} to={url_LINK + slug}>
                <ListItem
                  key={childId}
                  button
                  className={clsx(classes.item, active && classes.itemActiveItem)}
                >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
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
                </Hidden> */}

            <Hidden >
              <Grid item  alignContent="center">
                <IconButton
                  color="black"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);