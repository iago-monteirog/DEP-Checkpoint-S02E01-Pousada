import React, {useEffect, useState} from "react";
import Section from "../../components/Section";
import Box from "../../components/Box";
import { Trash } from "react-feather";
import api from '../../services/api'

export default function ReservasFeitas() {

  const [reservas, setReservas] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    function getReservas() {
      api.get('/reservas')
      .then((response) => setReservas(response.data))
      .catch(err => console.log(err))
    }
    getReservas();
  }, [count])

  function excluirReserva(id) {
    api.delete(`/reserva/${id}`)
    .then(resp => setCount(count + 1))
    .catch(err => console.log(err))
  }
  
  return (
    <Section title="Reservas feitas">
      <div className="ReservasFeitas">
        {reservas.map((element, index) =>
          <Box key={index}>
          <div className="ReservasFeitasBox">
            <div className="ReservasFeitasBox-tipo">
              <p>Tipo</p>
              <p>{element.tipo === "1" ? "Vip" : "Apartamento"}</p>
            </div>
            <div className="ReservasFeitasBox-valor">
              <p>Valor</p>
              <p>{element.valor}</p>
            </div>
            <div className="ReservasFeitasBox-checkin">
              <p>Checkin</p>
              <p>{element.data_chegada}</p>
            </div>
            <div className="ReservasFeitasBox-checkout">
              <p>Checkout</p>
              <p>{element.data_saida}</p>
            </div>
            <div className="ReservasFeitasBox-excluir">
              <Trash onClick={e => excluirReserva(element.id)}/>
            </div>
          </div>
        </Box>
        )}
      </div>
    </Section>
  );
}
