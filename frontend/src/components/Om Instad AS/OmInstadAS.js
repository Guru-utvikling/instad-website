import React from "react"
import { Grid } from "@material-ui/core/"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { withStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  wrapper: {
    background: "linear-gradient(90deg, #FEDB00 80%, #000000 80%)",
    backgroundRepeat: "no-repeat",
    height: "197",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    color: "black",
  },
  input: {
    backgroundColor: "",
    padding: "1rem",
    backgroundColor: "white",
    width: "350px",
    "&::placeholder": {
      color: "#f4f4f4",
    },
  },
  title: {
    color: "white",
    fontSize: "48px",
    margin: 0,
  },
  innerWrapper: {
    padding: "2rem",
    alignIitems: 'center',
    display: "inline-flex",
    flexWrap: "wrap",
    gap: "200px",
  },
  innerTextWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  para: {
    fontSize: "1.3rem",
    margin: 0,
    color: "#5C4C4C",
  },
  conversationIcon: {
    marginRight: "2rem",
    height: "62",
    width: "62",
  },
  emailIcon: {
    height: "21px",
    width: "21px",
  },
}))

export default function OmInstadAS() {
  const classes = useStyles()
  return (
      <Grid container className={classes.wrapper}>
        <Grid item className={classes.innerWrapper}>
          <Grid
            className={classes.innerGridWrapper}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <h3 className={global.typography.h1}>VARE TJENESTER</h3>
            <h1 className={global.typography.p}>
              Bygg, Anlegg, Installasjon og Industri
            </h1>
            <p className={classes.para}>
              Vi kjenner markedet og mulighetene innen fagene. Vi samarbeider
              med mange både små og store kunder, både lokalt og nasjonalt. Vi
              har et bredt spekter av kandidater og ledige stillinger innenfor
              de forskjellige yrkesområdene. Vi har bransjefolk med lang
              erfaring og våre medarbeidere innehar høy kompetanse. Det
              viktigste for oss er våre medarbeidere.
            </p>
          </Grid>
          <Grid item></Grid>
        </Grid>
        <Grid item className={classes.innerWrapper}>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
  )
}
