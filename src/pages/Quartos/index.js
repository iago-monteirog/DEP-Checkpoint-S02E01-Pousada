import React from "react";
import SuiteImg from "../../assets/img/Suite.png";
import ApartamentoImg from "../../assets/img/Apartamento.png";
import Button from "../../components/Button";
import ImageBox from "../../components/ImageBox";
import Section from "../../components/Section";

export default function Quartos() {
  return (
    <Section title="Quartos">
      <div className="Quartos">
        <div className="Quartos__inside">
          <div className="Quartos__columns">
            <div className="Quarto__column">
              <div className="Quarto__column-head">
                <ImageBox img={SuiteImg} name="Suite" />
              </div>
              <div className="Quarto__column-body">
                <article className="Content">
                  <p>MINI DESCRIÇÃO</p>
                  <p>
                    Como cidade capital, abriga na zona chamada Plateau,
                    promontório à beira-mar, edifícios públicos e outras
                    construções de importância, como o Palácio Presidencial,
                    construído no fim do século XIX para ser a residência do
                    governador português.
                  </p>
                </article>
              </div>
              <div className="QuartoColumn__bottom">
                <Button text="Consultar" theme="blue" />
              </div>
            </div>
            <div className="Quarto__column">
              <div className="Quarto__column-head">
                <ImageBox img={ApartamentoImg} name="Apartamento" />
              </div>
              <div className="Quarto__column-body">
                <article className="Content">
                  <p>MINI DESCRIÇÃO</p>
                  <p>
                    Como cidade capital, abriga na zona chamada Plateau,
                    promontório à beira-mar, edifícios públicos e outras
                    construções de importância, como o Palácio Presidencial,
                    construído no fim do século XIX para ser a residência do
                    governador português.
                  </p>
                </article>
              </div>
              <div className="QuartoColumn__bottom">
                <Button text="Consultar" theme="blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
