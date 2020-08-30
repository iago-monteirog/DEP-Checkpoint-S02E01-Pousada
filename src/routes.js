import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Quartos from "./pages/Quartos";
import Quarto from "./pages/Quarto";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FinalizarReserva from "./pages/FinalizarReserva";
import ReservaFinalizada from "./pages/ReservaFinalizada";
import ReservasFeitas from "./pages/ReservasFeitas";

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
          <Route path="/admin/reservas" exact component={ReservasFeitas} />
          <Route
            path="/reserva-finalizada"
            exact
            component={ReservaFinalizada}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
