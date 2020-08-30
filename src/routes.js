import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Quartos from "./pages/Quartos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quartos" exact component={Quartos} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
