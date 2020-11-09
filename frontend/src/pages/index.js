import React from "react"
import Header from "../components/Header/Header"
import VareTjenester from "../components/Vare Tjenester/VareTjenester"
import LedigeStillinger from "../components/Ledige stillinger/LedigeStillinger"
import TrengerHjelp from "../components/Trenger hjelp/TrengerHjelp"
import OmInstadAS from "../components/Om Instad AS/OmInstadAS"
import { useTheme } from "@material-ui/core/styles"
import MainLayout from "../layouts/index"
const Home = () => {
  return (
    <MainLayout>
      <div>
        <Header />
        <VareTjenester />
        <LedigeStillinger />
        <TrengerHjelp />
        <OmInstadAS />
      </div>
    </MainLayout>
  )
}

export default Home
