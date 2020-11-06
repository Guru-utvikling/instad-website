import React from "react";
import { Grid, Box, Button, Hidden } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import BgImage from "../../../static/ledige-bg.png";
import Icon from "../../../static/ledige-stillinger-icon.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  title: {
    color: "white",
    fontSize: "3rem",
    fontWeight: "900",
  },
}));

export default function TrengerHjelp() {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrapper}>
      <Grid item className={classes.title} />
    </Grid>
  );
}
