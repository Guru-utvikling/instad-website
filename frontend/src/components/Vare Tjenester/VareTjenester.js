import React from 'react';
import {Grid, Box, Button} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../static/instad-bg.png'



const useStyles = makeStyles((theme) => ({
  wrapper:{
    backgroundColor:"#000",
    height:"700px"
  }
}));

export default function VareTjenester() {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper} >
      <h1>VareTjenester</h1>
    </Box>

  );
}

//Zmien kolory buttonow