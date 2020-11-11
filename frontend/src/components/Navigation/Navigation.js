import React, { useState } from "react"
import { makeStyles,} from "@material-ui/styles"
import Hidden from "@material-ui/core/Hidden"
import AppBar from "../Header/AppBar"
import LeftSideBar from "../Header/LeftSideBar"

const useStyles = makeStyles((theme) => ({

  navigation: {
    justifyItems: "center",
    display: "flex",
    alignContent: "center",
  },
}))
const drawerWidth = 256

const Navigation = () => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <nav className={classes.navigation}>
      <AppBar
        position='sticky'
        className={classes.bar}
        onDrawerToggle={handleDrawerToggle}
      />
      <Hidden implementation='js'>
        <LeftSideBar
          PaperProps={{ style: { width: drawerWidth } }}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
        />
      </Hidden>
    </nav>
  )
}

export default Navigation
