import React from "react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.wrapper}>
      <Grid item>
        <h1></h1>
        <List>
          <ListItem>
            <ListItemText
              primary={<React.Fragment>{<h2>Meny</h2>}</React.Fragment>}
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
                      kostnadsbevissthet og en rask og effektiv
                      beslutningsprosess uten unødvendig byråkrati.
                    </p>
                  }
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item>
        <h1></h1>
        <List>
          <ListItem>{""}</ListItem>
        </List>
      </Grid>
      <Grid item>
        <h1></h1>
        <List>
          <ListItem></ListItem>
        </List>
      </Grid>
      <Grid item>
        <h1></h1>
        <List>
          <ListItem></ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default Footer
