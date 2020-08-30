import React from "react";
import Section from "../../components/Section";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";

export default function FinalizarReserva() {
  return (
    <Section title="Finalizar Reserva">
      <div className="FinalizarReserva">
        <div className="container">
          <div className="FinalizarReserva__inside">
            <form>
              <Input
                label="nome"
                placeholder="Seu nome"
                onChange={() => {
                  console.log("changed");
                }}
                feedback="insira seu nome"
              />
              <Input
                label="E-mail"
                placeholder="Seu e-mail"
                onChange={() => {
                  console.log("changed");
                }}
                feedback="insira seu e-mail"
              />
              <div className="FinalizarReserva__valor">
                <p>Valor total R$ 549,00</p>
              </div>
              <Button theme="green" text="Finalizar Reseva" isFullWidth />
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
