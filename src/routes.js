import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Quartos from "./pages/Quartos";
import Quarto from "./pages/Quarto";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FinalizarReserva from "./pages/FinalizarReserva";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quartos" exact component={Quartos} />
          <Route path="/quarto/:tipo" exact component={Quarto} />
          <Route path="/reserva" exact component={FinalizarReserva} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
