import React, { useState } from "react";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates'
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

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null
  });

  const [focus, setFocus] = useState("startDate");
  const { startDate, endDate } = dateRange;

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

    if (!utils.dateIsValid(value)) {
      setCheckinFeedback("Data inválida");
      return;
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

    if (!utils.dateIsValid(value)) {
      setCheckoutFeedback("Data inválida");
      return;
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
    if (!startDate) {
      setCheckinFeedback("Informe uma data");
      return;
    }
    
    if (!endDate) {
      setCheckoutFeedback("Informe uma data");
      return;
    }

    const startDateData = startDate._d;
    const endDateData = endDate._d;

    const formattedStartDate = `${startDateData.getDate()}-${startDateData.getMonth() + 1}-${startDateData.getFullYear()}`
    const formattedEndDate = `${endDateData.getDate()}-${endDateData.getMonth() + 1}-${endDateData.getFullYear()}`
    
    console.log(formattedStartDate)
    history.push(
      `/reserva/${formattedStartDate}/${formattedEndDate}/${tipo}`
    );
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
          <DateRangePicker
              startDate={startDate} // momentPropTypes.momentObj or null,
              startDateId="startDateId" // PropTypes.string.isRequired,
              endDate={endDate} // momentPropTypes.momentObj or null,
              endDateId="endDateId" // PropTypes.string.isRequired,
              displayFormat="DD/MM/YYYY"
              onDatesChange={({startDate, endDate}) => {setDateRange({startDate: startDate, endDate: endDate})}}
              focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={(focus) => setFocus(focus)} // PropTypes.func.isRequired,
            />
          {/* <Input
            name="checkin"
            onChange={onCheckinChange}
            label="Check-in"
            placeholder="Digite uma data"
            feedback={checkinFeedback}
          />
          <Input
            name="checkout"
            onChange={onCheckoutChange}
            label="Check-in"
            placeholder="Digite uma data"
            feedback={checkoutFeedback}
          /> */}
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
