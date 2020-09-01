import React from "react";
import VipImg from "../../assets/img/Suite.png";
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
                <ImageBox img={VipImg} name="Vip" linkTo="/quartos/vip" />
              </div>
              <div className="Quarto__column-body">
                <article className="Content">
                  <p>Cative VIP</p>
                  <p>
                  Toda comodidade e praticidade você encontra nas suítes Superior. Ideal para até 4 pessoas
                  </p>
                </article>
              </div>
              <div className="QuartoColumn__bottom">
                <Button text="Consultar" theme="blue" linkTo="/quartos/vip" />
              </div>
            </div>
            <div className="Quarto__column">
              <div className="Quarto__column-head">
                <ImageBox
                  img={ApartamentoImg}
                  name="Apartamento"
                  linkTo="/quartos/apartamento"
                />
              </div>
              <div className="Quarto__column-body">
                <article className="Content">
                  <p>Cative Apartamento</p>
                  <p>
                  Com vista para área verde, toda comodidade e praticidade você encontra na suíte Deluxe. Ideal para até 3 pessoas.
                  </p>
                </article>
              </div>
              <div className="QuartoColumn__bottom">
                <Button
                  text="Consultar"
                  theme="blue"
                  linkTo="/quartos/apartamento"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
