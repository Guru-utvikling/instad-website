import React from "react";
import Header from "../components/Header/Header";
import VareTjenester from "../components/Vare Tjenester/VareTjenester";
import LedigeStillinger from "../components/Ledige stillinger/LedigeStillinger";
import TrengerHjelp from "../components/Trenger hjelp/TrengerHjelp";

const Home = () => {
  return (
    <div>
      <Header />
      <VareTjenester />
      <LedigeStillinger />
      <TrengerHjelp />
    </div>
  );
};

export default Home;
