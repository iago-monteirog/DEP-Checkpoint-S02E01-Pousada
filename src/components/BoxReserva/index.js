import React from "react";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Button from "../Button";

export default function BoxReserva() {
  return (
    <div className="BoxReserva">
      <div className="container">
        <div className="BoxReserva__inside">
          <Select
            name="tipo"
            onChange={() => {
              console.log("changed");
            }}
            placeholder="Selecione o tipo"
            label="Tipo"
            options={[
              { text: "a", value: "a" },
              { text: "a", value: "a" },
            ]}
          />
          <Input
            name="checkin"
            onChange={() => {
              console.log("changed");
            }}
            label="Check-in"
            placeholder="Digite uma data"
            feedback=""
          />
          <Input
            name="checkout"
            onChange={() => {
              console.log("changed");
            }}
            label="Check-in"
            placeholder="Digite uma data"
          />
          <Button text="Reservar" theme="orange-outlined" />
        </div>
      </div>
    </div>
  );
}
