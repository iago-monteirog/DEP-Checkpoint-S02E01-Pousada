import React from "react";
import Section from "../../components/Section";
import VipImg from "../../assets/img/Suite2.png";
import QuartoImg from "../../assets/img/Quarto2.png";
import ApartamentoImg from "../../assets/img/Apartamento.png";
import BoxReserva from "../../components/BoxReserva";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import Box from "../../components/Box";

export default function Quarto(props) {
  const {
    match: {
      params: { tipo, checkout, checkin },
    },
  } = props;
  const checkinDate = checkin && checkin.replace(/-/g, "/");
  const checkoutDate = checkout && checkout.replace(/-/g, "/");
  const isApartamento = tipo.toLowerCase() === "apartamento";

  return (
    <Section title={isApartamento ? "Apartamento" : "Vip"}>
      <div className="Quarto">
        <div className="Quarto__head">
          <div className="Quarto__image">
            {isApartamento ? <img src={VipImg} /> : <img src={QuartoImg} />}
          </div>
          <div className="Quarto__reserva">
            <Box>
              <h3>Reserva</h3>
              <Input
                name="checkin"
                onChange={() => {
                  console.log("changed");
                }}
                label="Check-in"
                placeholder="Digite uma data"
                feedback=""
                value={checkinDate}
              />
              <Input
                name="checkout"
                onChange={() => {
                  console.log("changed");
                }}
                label="Check-out"
                placeholder="Digite uma data"
                value={checkoutDate}
              />
              <Input
                name="checkout"
                onChange={() => {
                  console.log("changed");
                }}
                label="Total"
                placeholder="R$"
              />
              <Button text="Reservar" theme="orange" />
            </Box>
          </div>
        </div>
        <div className="Quarto__body">
          <div className="Content text-centered">
            <div className="Content__columns">
              <article>
                <h2>Incluso</h2>
                <p>
                  Ar condicionado, Wifi Gratuito, Café da manhã Frigobar, Cama
                  de casal, Cama de solteiro TV de LED Até 4 pessoas.
                </p>
              </article>
              <article>
                <h2>Descrição</h2>
                <p>
                  Como cidade capital, abriga na zona chamada Plateau,
                  promontório à beira-mar, edifícios públicos e outras
                  construções de importância, como o Palácio Presidencial,
                  construído no fim do século XIX para ser a residência do
                  governador português.
                </p>
                <p>
                  Como cidade capital, abriga na zona chamada Plateau,
                  promontório à beira-mar, edifícios públicos e outras
                  construções de importância, como o Palácio Presidencial,
                  construído no fim do século XIX para ser a residência do
                  governador português.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
