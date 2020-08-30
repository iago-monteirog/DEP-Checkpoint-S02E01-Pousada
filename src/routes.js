import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Quartos from "./pages/Quartos";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quartos" exact component={Quartos} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
