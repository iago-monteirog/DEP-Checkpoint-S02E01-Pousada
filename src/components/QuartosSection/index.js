import React from "react";
import SuiteImg from "../../assets/img/Suite.png";
import ApartamentoImg from "../../assets/img/Apartamento.png";
import Button from "../Button";

export default function QuartosSection() {
  return (
    <div className="QuartosSection">
      <div className="container">
        <div className="QuartosSection__inside">
          <h2>Quartos</h2>
          <div className="QuartosSection__boxes">
            <div className="QuartosSection__box">
              <img src={SuiteImg} alt="suite" />
              <article>
                <p>Suite</p>
              </article>
            </div>
            <div className="QuartosSection__box">
              <img src={ApartamentoImg} alt="apartamento" />
              <article>
                <p>Apartamento</p>
              </article>
            </div>
          </div>
          <div className="QuartoSection__bottom">
            <Button
              onClick={() => {
                console.log("clicked");
              }}
              text="detalhes"
              theme="blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
