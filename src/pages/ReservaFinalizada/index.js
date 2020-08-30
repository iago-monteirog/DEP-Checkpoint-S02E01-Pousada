import React from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";

export default function ReservaFinalizada(props) {
  const {
    match: {
      params: { nome },
    },
  } = props;

  return (
    <div className="ReservaFinalizada">
      <Section
        title={`Parabéns, ${nome}
            sua reserva foi 
            feita com sucesso!`}
      >
        <Button linkTo="/admin/reservas" text="Ver reservas" theme="orange" />
      </Section>
    </div>
  );
}
