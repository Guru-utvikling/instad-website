import React from "react"

import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const MainLayout = ({children}) =>{
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}


export default MainLayout
/// Blog funkcje 
///