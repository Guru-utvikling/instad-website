import React from "react"
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
  Hidden,
} from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles"
import EmailIcon from "../../../static/send.svg"
import ConversationIcon from "../../../static/conversion-icon.svg"
const useStyles = makeStyles((theme) => ({
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

export default function TrengerHjelp() {
  const classes = useStyles()
  return (
    <Grid container className={classes.wrapper}>
      <Grid item className={classes.innerWrapper}>
        <div className={classes.innerTextWrapper}>
          <img
            alt='Conversation icon'
            className={classes.conversationIcon}
            src={ConversationIcon}
          />
          <div>
            <h2 className={classes.title}>Trenger hjelp?</h2>
            <p className={classes.para}>
              La oss nå om problemet ditt, og en profesjonell vil kontakte deg.
            </p>
          </div>
        </div>

        <FormControl>
          <Input
            placeholder='E-post'
            className={classes.input}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='newsleter input'
                >
                  <img className={classes.emailIcon} src={EmailIcon}></img>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}
