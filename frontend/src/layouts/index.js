import React from "react"
import GlobalStyle from '../assets/styles/globalStyles.css'
import Header from '../components/Header/Header'

const MainLayout = ({children}) => (
    <>
    <GlobalStyle />
        {children}
    </>
  )
  
  export default MainLayout
  