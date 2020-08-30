import React from "react";
import SuiteImg from "../../assets/img/Suite.png";
import ApartamentoImg from "../../assets/img/Apartamento.png";
import Button from "../Button";
import ImageBox from "../ImageBox";

export default function QuartosSection() {
  return (
    <div className="QuartosSection">
      <div className="container">
        <div className="QuartosSection__inside">
          <h2>Quartos</h2>
          <div className="QuartosSection__boxes">
            <ImageBox img={SuiteImg} name="Suite" />
            <ImageBox img={ApartamentoImg} name="Apartamento" />
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
