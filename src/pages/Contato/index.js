import React, { useState, useEffect } from "react";
import Section from "../../components/Section";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import Button from "../../components/Button";
import api from '../../services/api'

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [feedback, setFeedback] = useState('');

  function sendContato(e) {
    e.preventDefault();
    if(!nome || !email || !mensagem) {
      return setFeedback("Campos precisam estar preenchidos")
    }
    api.post('/feedback', {
      nome,
      email,
      mensagem
    }).then(resp => setFeedback(resp.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {

  }, [feedback])

  return (
    <Section title="Contato">
      <div className="Contato">
        <div className="Contato__columns">
          <form action="">
            <Input
              label="Nome"
              placeholder="Carlos Android"
              feedback="Insira seu nome"
              onChange={e => setNome(e.target.value)}
              value={nome}
            />
            <Input
              label="E-mail"
              placeholder="carlos@android.com"
              feedback="Insira seu email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <TextArea
              label="Mensagem"
              placeholder="Nota 10 na nac pra vcs"
              feedback="Não quer dizer nada?"
              onChange={e => setMensagem(e.target.value)}
              value={mensagem}
            />
            <Button
              text="Enviar mensagem"
              theme="orange"
              onClick={e => {
                sendContato(e);
              }}
            />
            <p className="Feedback">{feedback}</p>
          </form>
          <div className="Contato__map">
            <p>Endereço</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14630.548801381621!2d-46.931951749999996!3d-23.545547799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe528a1b85af8d21b!2sItapevi%20Center!5e0!3m2!1spt-BR!2sbr!4v1598753887839!5m2!1spt-BR!2sbr"></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}
