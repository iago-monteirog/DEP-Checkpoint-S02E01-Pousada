import React, { useState } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Button from "../Button";
import utils from "../../utils";
import { useHistory } from "react-router-dom";

export default function BoxReserva() {
  const [tipo, setTipo] = useState("Vip");
  const [checkin, setCheckin] = useState("");
  const [checkinFeedback, setCheckinFeedback] = useState("");
  const [checkout, setCheckout] = useState("");
  const [checkoutFeedback, setCheckoutFeedback] = useState("");

  const history = useHistory();

  function onTipoChange(event) {
    setTipo(event.target.value);
  }

  function onCheckinChange(event) {
    let value = event.target.value;

    setCheckin(value);

    if (!value) {
      setCheckinFeedback("Informe uma data");
      return;
    } else {
      setCheckinFeedback("");
    }

    if (utils.dateIsBeforeToday(value)) {
      setCheckinFeedback("Data não pode serantes de hoje");
    }
  }

  function onCheckoutChange(event) {
    let value = event.target.value;

    setCheckout(value);
    if (!value) {
      setCheckoutFeedback("Informe uma data");
      return;
    } else {
      setCheckoutFeedback("");
    }

    if (utils.dateIsBeforeToday(value)) {
      setCheckoutFeedback("Data não pode serantes de hoje");
      return;
    }

    if (utils.daysAfterNow(value, 2)) {
      setCheckoutFeedback("Data deve ser posterior a dois dias da data atual.");
      return;
    }
  }

  function onButtonClick() {
    if (!checkin || !checkout) {
      alert("Informe checkin e checkout corretamente");
      return;
    }

    if (utils.intervalIsInvalid(checkout, checkin)) {
      alert("Intervalo de datas invalido");
      return;
    }

    history.push(`/quartos/${tipo}/${checkout}/${checkin}`);
  }

  return (
    <div className="BoxReserva">
      <div className="container">
        <div className="BoxReserva__inside">
          <Select
            name="tipo"
            onChange={onTipoChange}
            placeholder="Selecione o tipo"
            label="Tipo"
            options={[
              { text: "Vip", value: "Vip" },
              { text: "Apartamento", value: "Apartamento" },
            ]}
          />

          <Input
            inputType="date"
            name="checkin"
            onChange={onCheckinChange}
            label="Check-in"
            placeholder="Digite uma data"
            feedback={checkinFeedback}
          />
          <Input
            inputType="date"
            name="checkout"
            onChange={onCheckoutChange}
            label="Check-out"
            placeholder="Digite uma data"
            feedback={checkoutFeedback}
          />
          <Button
            text="Reservar"
            onClick={onButtonClick}
            theme="orange-outlined"
          />
        </div>
      </div>
    </div>
  );
}
