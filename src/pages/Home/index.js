import React from "react";
import "./Home.scss";
import HomeBanner from "../../components/HomeBanner";
import BoxReserva from "../../components/BoxReserva";
import About from "../../components/About";
import QuartosSection from "../../components/QuartosSection";
import Hero from "../../components/Hero";
import WhereWeAre from "../../components/WhereWeAre";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <BoxReserva />
      <About />
      <QuartosSection />
      <Hero />
      <WhereWeAre />
    </>
  );
}
