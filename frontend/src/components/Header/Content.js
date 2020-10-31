import React from 'react';
import {Grid, Box, Button} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../static/instad-bg.png'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    margin:'0',
    fontFamily: 'Calibri, sans-serif;',
  },
  buttons:{
    yellow:{
      backgroundColor:"green",
    },
    white:{
      backgroundColor:"white",
    }
  },

  wrapper:{
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${Image})`,
    backgroundSize: "cover",
    padding: theme.spacing(0,10),
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
    textOverflow: "ellipsis"
  },
  title:{
    fontSize:"4rem",
    fontWeight:"900",
    color:"white",
    lineHeight: "5rem"
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
            <Button size="large" className={classes.buttons.yellow} href="/register/cv">Register your CV</Button>  
            <Button size="large" className={classes.buttons.white} href="mailto:damian@guru-utvikling.no">Project inquiries</Button>
          </div>      
        </Grid>
      </Grid>
    </Box>

  );
}

//Zmien kolory buttonow