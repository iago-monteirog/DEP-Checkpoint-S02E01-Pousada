import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar";
import HomeBanner from "../../components/HomeBanner";
import BoxReserva from "../../components/BoxReserva";
import About from "../../components/About";
import QuartosSection from "../../components/QuartosSection";
import Hero from "../../components/Hero";
import WhereWeAre from "../../components/WhereWeAre";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <BoxReserva />
      <About />
      <QuartosSection />
      <Hero />
      <WhereWeAre />
      <Footer />
    </>
  );
}
