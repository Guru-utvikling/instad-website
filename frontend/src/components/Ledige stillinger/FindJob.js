import React, { useState } from 'react';
import {Grid, Box, Button, Hidden} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import BgImage from '../../../static/ledige-bg.png';
import Icon from '../../../static/ledige-stillinger-icon.svg'
import SearchBar from "material-ui-search-bar";
import submitSearch from '../../pages/api/apiCore'

const useStyles = makeStyles((theme) => ({
  wrapper:{
      textAlign:'center',
      color:"",
      display:"flex",
      alignItems:'center',
      justifyContent:'center',
      width:'30%'
  },
  search:{
    width:"100%"
  }
}));

export default function FindJob() {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('')
  
  return (
    <Grid container className={classes.wrapper}>
      <SearchBar
        width={100}
        value={inputValue}
        onChange={(inputValue) => setInputValue(inputValue.toString())}
        onRequestSearch={() => submitSearch(inputValue)}
      />
    </Grid>
  );
}
