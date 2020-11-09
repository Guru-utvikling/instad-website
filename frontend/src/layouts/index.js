import React from "react"
import { ThemeProvider, withStyles,useTheme } from "@material-ui/core/styles"
import Header from "../components/Header/Header"
import global from "../assets/styles/ThemeStyles"

function MainLayout({ children }) {
  return (
    <ThemeProvider >
      {children}
    </ThemeProvider>
  )
}
export default withStyles(global)(MainLayout);
