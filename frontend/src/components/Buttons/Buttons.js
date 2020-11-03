import React from 'react';
import {Grid, Box, Button} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  yellowButton:{
    backgroundColor: "#fed700",
    padding:"1rem",
    borderRadius:"3px",
    marginRight: "1rem",
    [theme.breakpoints.down('md')]: {
      fontSize:".8rem" ,
    },
    '&:hover': {
      background: "#dcb500",
    }
  },
}));

export default function Buttons() {
  const classes = useStyles();
  return  <Button size="large" className={classes.yellowButton} href="/register/cv">Register your CV</Button>  
  
}
