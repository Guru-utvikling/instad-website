import React from 'react';
import {Grid, Box, Button} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import Buttons from '../../components/Buttons/Buttons'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    margin:'0',
    fontFamily: 'Calibri, sans-serif;',
    
  },
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
  whiteButton:{
    backgroundColor:"white",
    padding:"1rem",
    borderRadius:"3px",
    '&:hover': {
      background: "#f5f5f5",
    },
    [theme.breakpoints.down('md')]: {
      fontSize:".8rem" ,
    }
  },

  wrapper:{
    boxSizing: 'border-box',
    padding: theme.spacing(0,20),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0,5),
      }
  },
  sidebar: {
    backgroundColor:'#fed800',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typo:{
    fontSize:'1.25rem',
    fontWeight:"400",
    color:"#fff",
    textAlign:"justify",
    textOverflow: "ellipsis",
    [theme.breakpoints.down('md')]: {
      fontSize:"1rem" ,
    }
  },
  title:{
    fontSize:"4rem",
    [theme.breakpoints.down('md')]: {
      fontSize:"3rem" ,
      lineHeight: "3rem"
    },
    fontWeight:"900",
    color:"white",
    lineHeight: "4rem"
  }
}));

export default function MainHeaderContent() {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper} >
      <Grid  alignItems="center" container component="main" className={classes.root}>
        <Grid item xs={12} sm={12} md={7} lg={5}>
          <h1 className={classes.title}>Your business is our business</h1>
          <p className={classes.typo}>
            Instad AS is a staffing and recruitment company established in December 2019 and headquartered in the center of Bergen, Norway. We provide experienced industry professionals for a wide variety of commercial and private projects.
          </p>
          <p className={classes.typo}>
            We are a staffing company that is specialized in the areas of building and industrial construction and installation. The company invests in the best and latest innovative technological solutions available on the market to make things easier and less complicated, for both our employees and customers.
          </p>
          <div>
            <Buttons/>
            <Button size="large" className={classes.whiteButton} href="mailto:damian@guru-utvikling.no">Project inquiries</Button>
          </div>      
        </Grid>
      </Grid>
    </Box>
  );
}

//Zmien kolory buttonow