import React from "react";
import { Grid, Box, Button, Hidden } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import BgImage from "../../../static/ledige-bg.png";
import Icon from "../../../static/ledige-stillinger-icon.svg";
import FindJob from "./FindJob";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    minHeight: "495px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    color: "white",
    fontSize: "3rem",
    fontWeight: "900",
    margin: 0,
  },
  para: {
    color: "white",
    fontSize: "1.2rem",
    margin: 0,
  },
}));

export default function VareTjenester() {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrapper}>
      <img src={Icon} />
      <h1 className={classes.title}>Ledige Stillinger</h1>
      <p className={classes.para}>Finn en jobb der du er</p>
      <FindJob />
    </Grid>
  );
}
