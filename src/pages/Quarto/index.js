import React, { useState, useEffect } from "react";
import Section from "../../components/Section";
import VipImg from "../../assets/img/Suite2.png";
import ApartamentoImg from "../../assets/img/Apartamento.png";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import Box from "../../components/Box";
import utils from "../../utils";
import { useHistory } from "react-router-dom";

export default function Quarto(props) {
  const {
    match: {
      params: { tipo, checkout, checkin },
    },
  } = props;
  const history = useHistory();

  const isApartamento = tipo.toLowerCase() === "apartamento";
  const unitCost = isApartamento ? 100 : 200;

  const [checkinDate, setCheckin] = useState(
    checkin && checkin.replace(/-/g, "/")
  );
  const [checkoutDate, setCheckout] = useState(
    checkout && checkout.replace(/-/g, "/")
  );
  const [checkinFeedback, setCheckinFeedback] = useState("");
  const [checkoutFeedback, setCheckoutFeedback] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    try {
      setTotal((utils.daysInterval(checkinDate, checkoutDate) + 1) * unitCost);
    } catch (err) {
      setTotal(0);
    }
  }, [checkinDate, checkoutDate]);

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
    if (!checkinDate) {
      setCheckinFeedback("Informe uma data");
      return;
    }

    if (!checkoutDate) {
      setCheckoutFeedback("Informe uma data");
      return;
    }

    if (!utils.dateIsValid(checkinDate)) {
      setCheckinFeedback("Data inválida");
      return;
    }

    if (!utils.dateIsValid(checkoutDate)) {
      setCheckoutFeedback("Data inválida");
      return;
    }

    if (utils.intervalIsInvalid(checkoutDate, checkinDate)) {
      alert("Intervalo de datas invalido");
      return;
    }

    history.push(
      `/reserva/${checkinDate.replace(/\//g, "-")}/${checkoutDate.replace(
        /\//g,
        "-"
      )}/${tipo}`
    );
  }

  return (
    <Section title={isApartamento ? "Apartamento" : "Vip"}>
      <div className="Quarto">
        <div className="Quarto__head">
          <div className="Quarto__image">
            {isApartamento ? (
              <img src={VipImg} />
            ) : (
              <img src={ApartamentoImg} />
            )}
          </div>
          <div className="Quarto__reserva">
            <Box>
              <h3>Reserva</h3>
              <Input
                name="checkin"
                onChange={onCheckinChange}
                label="Check-in"
                placeholder="Digite uma data"
                feedback={checkinFeedback}
                value={checkinDate}
              />
              <Input
                name="checkout"
                onChange={onCheckoutChange}
                label="Check-out"
                placeholder="Digite uma data"
                value={checkoutDate}
                feedback={checkoutFeedback}
              />
              <Input
                name="checkout"
                label="Total"
                value={utils.formatMoney(total, 2, ",", ".", "R$")}
                disabled
                placeholder="R$"
              />
              <Button onClick={onButtonClick} text="Reservar" theme="orange" />
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
                Venha saborear um delicioso café da manhã, preparado especialmente para você
                </p>
                <p>
                Temos um espaço aconchegante sempre com as melhores opções e receitas para você aproveitar ao máximo seu café da manhã: pães diversos, sucos naturais, frios, bolos, ovos mexidos, iorgurte natural, mel e granola são algumas opções para começar bem o seu dia!
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
