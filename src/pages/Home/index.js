import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar";
import HomeBanner from "../../components/HomeBanner";
import BoxReserva from "../../components/BoxReserva";
import About from "../../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <BoxReserva />
      <About/>
    </>
  );
}
