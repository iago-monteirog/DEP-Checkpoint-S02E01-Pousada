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
import Contato from "./pages/Contato";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quartos" exact component={Quartos} />
          <Route path="/quartos/:tipo" exact component={Quarto} />
          <Route path="/quartos/:tipo/:checkout/:checkin" exact component={Quarto} />
          <Route path="/reserva" exact component={FinalizarReserva} />
          <Route path="/admin/reservas" exact component={ReservasFeitas} />
          <Route path="/contato" exact component={Contato} />
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
