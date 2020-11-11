import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import FirstIcon from "../../../static/business-improvement.svg"
import SecondIcon from "../../../static/responsible-energy-use.svg"
import ThirdIcon from "../../../static/giving-love.svg"
import FourthIcon from "../../../static/success.svg"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#FED800",
    padding: theme.spacing(0,10),
    marginTop:"35px"
  },
  inline: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(5),
  },
  primary: {
    fontSize: "5rem",
  },
  text: {
    fontSize: "1rem",
  },
}))

export const OmOssList = () => {
  const classes = useStyles()
  return (
    <>
      <List lg={12} md={12} className={classes.root} aria-label='contacts'>
        <ListItem alignItems='center'>
          <ListItemIcon className={classes.icon}>
            <img src={FirstIcon}></img>
          </ListItemIcon>
          <ListItemText
            primary={<React.Fragment>{<h2>Jordnærhet</h2>}</React.Fragment>}
            className={classes.primary}
            secondary={
              <React.Fragment>
                {
                  <p className={classes.text}>
                    Vi ønsker langvarige relasjoner basert på en ukomplisert,
                    ydmyk og troverdig tilnærming. Respekt for andre og deres
                    meninger, selvinnsikt og forståelse av at du som menneske
                    alltid kan bli bedre. Vi har en inkluderende kultur, og
                    viser hverandre tillit og respekt. Sentrale elementer er
                    kostnadsbevissthet og en rask og effektiv beslutningsprosess
                    uten unødvendig byråkrati.
                  </p>
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems='center'>
          <ListItemIcon className={classes.icon}>
            <img src={SecondIcon}></img>
          </ListItemIcon>
          <ListItemText
            primary={<React.Fragment>{<h2>Ansvarlighet</h2>}</React.Fragment>}
            className={classes.title}
            secondary={
              <React.Fragment>
                {
                  <p className={classes.text}>
                    Vi bryr oss om mennesker og miljøet rundt oss. Vi arbeider
                    sikkert - eller ikke i det hele tatt. Vi opptrer seriøst og
                    ansvarlig overfor våre oppdragsgivere.
                  </p>
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems='center'>
          <ListItemIcon className={classes.icon}>
            <img src={ThirdIcon}></img>
          </ListItemIcon>
          <ListItemText
            primary={<React.Fragment>{<h2>Rederlig</h2>}</React.Fragment>}
            className={classes.title}
            secondary={
              <React.Fragment>
                {
                  <p className={classes.text}>
                    Vi skal aldri ta snarveier eller unndra oss de rammer som
                    lover, regler og etiske retningslinjer angir.
                  </p>
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems='center'>
          <ListItemIcon className={classes.icon}>
            <img src={FourthIcon}></img>
          </ListItemIcon>
          <ListItemText
            primary={
              <React.Fragment>{<h2>Kundens suksess</h2>}</React.Fragment>
            }
            className={classes.title}
            secondary={
              <React.Fragment>
                {
                  <p className={classes.text}>
                    Kundens suksess driver vår egen suksess. Gjennom vår innsats
                    for å forenkle hverdagen for våre kunder bidrar vi til å
                    gjøre deres virksomhet mer effektiv. Dette oppnår vi ved å
                    være innovativ og lydhør. Og ser alltid etter forbedringer
                    og nye løsninger, innenfor våre satsningsområder.
                  </p>
                }
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  )
}
