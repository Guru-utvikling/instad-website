import React from "react"
import { Grid, Box, Button, Hidden } from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles"
import ToolBackground from "../../../static/tool-bg.svg"
import Buttons from "../Buttons/Buttons"
import Image1 from "../../../static/image-1.png"
import Image2 from "../../../static/image-2.png"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: "rgb(254,219,0)",
    background:
      "linear-gradient(90deg, rgba(254,219,0,1) 0%, rgba(253,218,0,0.35) 30%, rgba(255,255,255,1) 50%)",
  },
  innerGridWrapper: {
    background: `url(${ToolBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    alignItems: "center",
    justifyItems: "center",
    padding: "10rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem",
    },
  },
  innerImageWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "800px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  higherImage: {
    margin: "-15rem 0 0 -5rem ",
    [theme.breakpoints.down("md")]: {
      margin: "0rem 0 0 0rem ",
    },
  },
  para: {
    fontSize: 16,
  },
}))

export default function VareTjenester() {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Grid container component='section' className={classes.root}>
        <Hidden smDown>
          <Grid
            className={classes.innerImageWrapper}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <img height='338' width='484' src={Image1} />
            <Hidden mdDown>
              <img
                height='409'
                width='408'
                className={classes.higherImage}
                src={Image2}
              />
            </Hidden>
          </Grid>
        </Hidden>

        <Grid
          className={classes.innerGridWrapper}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <h3>VARE TJENESTER</h3>
          <h1>Bygg, Anlegg, Installasjon og Industri</h1>
          <p className={classes.para}>
            IVi kjenner markedet og mulighetene innen fagene. Vi samarbeider med
            mange både små og store kunder, både lokalt og nasjonalt. Vi har et
            bredt spekter av kandidater og ledige stillinger innenfor de
            forskjellige yrkesområdene. Vi har bransjefolk med lang erfaring og
            våre medarbeidere innehar høy kompetanse. Det viktigste for oss er
            våre medarbeidere.
          </p>
          <Buttons />
        </Grid>
      </Grid>
    </Box>
  )
}

// Zmien kolory buttonow
