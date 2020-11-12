import React from "react"
import Drawer from "@material-ui/core/Drawer"
import Menu from "./Menu"
import { withStyles } from "@material-ui/core/styles"
const styles = (theme) => ({
  root: {
    paper:{
      backgroundColor:"#FED800",
    }
  },
})

function Navigator(props) {
  const { classes, ...other } = props

  return (
    <Drawer
      className={classes.drawerBg}
      anchor='left'
      variant='permanent'
      {...other}
    >
      <Menu />
    </Drawer>
  )
}

export default withStyles(styles)(Navigator)
