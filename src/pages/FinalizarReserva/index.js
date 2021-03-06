import React, { useState, useEffect } from "react";
import Section from "../../components/Section";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import utils from "../../utils";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

export default function FinalizarReserva(props) {
  const {
    match: {
      params: { tipo, checkout, checkin },
    },
  } = props;

  const [nome, setNome] = useState("");
  const [nomeFeedback, setNomeFeedback] = useState("");
  const [total, setTotal] = useState(0);
  const history = useHistory();
  const [buttonText, setButtonText] = useState("Finalizar reserva");

  const isApartamento = tipo.toLowerCase() === "apartamento";
  const unitCost = isApartamento ? 100 : 200;

  useEffect(() => {
    setTotal((utils.daysInterval(checkin, checkout) + 1) * unitCost);
  }, [checkout, checkin]);

  function onNomeChange(event) {
    let value = event.target.value;

    setNome(value);

    if (!value) {
      setNomeFeedback("Informe seu nome");
      return;
    } else {
      setNomeFeedback("");
    }
  }

  function onButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();

    setButtonText("Finalizando...");

    if (!nome) {
      setNomeFeedback("Informe seu nome");
      return;
    }

    const tipoId = tipo.toLowerCase() === "vip" ? 1 : 2;

    const data = {
      nome,
      tipo: tipoId,
      data_chegada: utils.formatToBRDate(checkin),
      data_saida: utils.formatToBRDate(checkout),
      valor: utils.formatMoney(total, 2, ",", ".", "R$"),
    };

    api
      .post("/reservas", data)
      .then(({ data }) => {
        if (data === "Sucesso!!!!!!") {
          history.push(`/reserva-finalizada/${nome}`);
        } else {
          alert(data);
          setButtonText("Finalizar reserva");
        }
      })
      .catch(console.log);
  }

  return (
    <Section title="Finalizar Reserva">
      <div className="FinalizarReserva">
        <div className="container">
          <div className="FinalizarReserva__inside">
            <form>
              <Input
                label="Nome"
                placeholder="Seu nome"
                onChange={onNomeChange}
                feedback={nomeFeedback}
                value={nome}
              />
              <div className="FinalizarReserva__valor">
                <p>Valor total {utils.formatMoney(total, 2, ",", ".", "R$")}</p>
              </div>
              <Button
                onClick={onButtonClick}
                theme="green"
                text={buttonText}
                isFullWidth
              />
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
