import React from "react"
import { Grid } from "@material-ui/core/"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { withStyles, useTheme } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Buttons from "../Buttons/Buttons"
import { OmOssList } from "./OmOssList"
const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: "white",
    backgroundRepeat: "no-repeat",
    height: "197",
    display: "flex",
    flexDirection: "row",
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
  title: {
    color: "black",
    fontSize: "3rem",
    margin: 0,
  },
  subtitle: {
    margin: 0,
  },
  CTAText: {
    fontSize: "3rem",
    margin: 0,
    color: "#fff",
  },
  innerWrapper: {
    alignIitems: "center",
    display: "inline-flex",
    minHeight: "500px",
    flexWrap: "wrap",
    gap: "200px",
  },

  innerCTASectionWrapper: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#212121",
    padding: "2rem",
    alignIitems: "center",
    justifyContent: "center",
    padding: theme.spacing(8),
    gap: theme.spacing(10, 10),
  },
  innerWrapperRight:{
    display:"flex",
    alignIitems: "flex-end",
    minHeight: "500px",
  },
  OmossCOntent: {
    padding: theme.spacing(15),
  },
  OmossLink: {
    fontSize: "1.5rem",
    color: theme.palette.instad,
  },
  innerTextWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  innerTextWrapperRight: {
    backgroundColor: "#000",
    padding:"2rem"
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
      <Grid xs={12} sm={12} md={6} lg={6} item className={classes.innerWrapper}>
        <Grid className={classes.innerGridWrapper} item>
          <Grid item className={classes.OmossCOntent}>
            <h3>VARE TJENESTER</h3>
            <h1 className={classes.title}>Om Instad AS</h1>
            <p className={classes.para}>
              Instad AS ble startet i desember 2019, av Bjarne Jakobsen og Trond
              Erik Stølås. Begge har lang erfaring i bransjen, og målet er å
              gjøre ting enkelt. Enkelt for kunde og samarbeidspartnere, og
              enkelt for våre kandidater/medarbeidere med å bruke det nyeste av
              teknologiske løsninger. Samtidig ønsker vi å skape en lokal
              forankring i bedriften vår. Vi skal være det foretrukne
              bemanningsselskapet på Vestlandet.
            </p>
            <Link className={classes.OmossLink} to='om-oss'>
              Mer om oss
            </Link>
          </Grid>
          <Grid item className={classes.innerCTASectionWrapper}>
            <h2 className={classes.CTAText}>Bli med oss!</h2>
            <Buttons />
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={6} item className={classes.innerWrapperRight}>
          <OmOssList />
      </Grid>
    </Grid>
  )
}
