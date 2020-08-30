import React from "react";
import Section from "../../components/Section";
import Box from "../../components/Box";
import { Trash } from "react-feather";

export default function ReservasFeitas() {
  return (
    <Section title="Reservas feitas">
      <div className="ReservasFeitas">
        <Box>
          <div className="ReservasFeitasBox">
            <div className="ReservasFeitasBox-tipo">
              <p>Tipo</p>
              <p>Quarto</p>
            </div>
            <div className="ReservasFeitasBox-valor">
              <p>Valor</p>
              <p>R$450,00</p>
            </div>
            <div className="ReservasFeitasBox-checkin">
              <p>Checkin</p>
              <p>01/01/2020</p>
            </div>
            <div className="ReservasFeitasBox-checkout">
              <p>Checkout</p>
              <p>01/01/2020</p>
            </div>
            <div className="ReservasFeitasBox-excluir">
              <Trash />
            </div>
          </div>
        </Box>
        <Box>
          <div className="ReservasFeitasBox">
            <div className="ReservasFeitasBox-tipo">
              <p>Tipo</p>
              <p>Quarto</p>
            </div>
            <div className="ReservasFeitasBox-valor">
              <p>Valor</p>
              <p>R$450,00</p>
            </div>
            <div className="ReservasFeitasBox-checkin">
              <p>Checkin</p>
              <p>01/01/2020</p>
            </div>
            <div className="ReservasFeitasBox-checkout">
              <p>Checkout</p>
              <p>01/01/2020</p>
            </div>
            <div className="ReservasFeitasBox-excluir">
              <Trash />
            </div>
          </div>
        </Box>
        <Box>
          <div className="ReservasFeitasBox">
            <div className="ReservasFeitasBox-tipo">
              <p>Tipo</p>
              <p>Quarto</p>
            </div>
            <div className="ReservasFeitasBox-valor">
              <p>Valor</p>
              <p>R$450,00</p>
            </div>
            <div className="ReservasFeitasBox-checkin">
              <p>Checkin</p>
              <p>01/01/2020</p>
            </div>
            <div className="ReservasFeitasBox-checkout">
              <p>Checkout</p>
              <p>01/01/2020</p>
            </div>
            <div className="ReservasFeitasBox-excluir">
              <Trash />
            </div>
          </div>
        </Box>
      </div>
    </Section>
  );
}
