import React, { useState, useEffect } from "react";
import Section from "../../components/Section";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import Button from "../../components/Button";
import api from "../../services/api";
import util from "../../utils";
import utils from "../../utils";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [nomeFeedback, setNomeFeedback] = useState("");
  const [emailFeedback, setEmailFeedback] = useState("");
  const [mensagemFeedback, setMensagemFeedback] = useState("");
  const [feedback, setFeedback] = useState("");

  function sendContato(e) {
    e.preventDefault();
    if (!nome || !email || !mensagem) {
      alert("Preencha todos os campos");
      return;
    }

    if (nomeFeedback || emailFeedback || mensagemFeedback) {
      alert("Preencha todos os campos corretamente");
      return;
    }

    api
      .post("/feedback", {
        nome,
        email,
        mensagem,
      })
      .then((resp) => {
        setFeedback(resp.data);
        setNome("");
        setEmail("");
        setMensagem("");
      })
      .catch((err) => console.log(err));
  }

  function onNomeChange(e) {
    let value = e.target.value;

    setNome(value);

    if (!value) {
      setNomeFeedback("Informe seu nome");
    } else {
      setNomeFeedback("");
    }
  }

  function onEmailChange(e) {
    let value = e.target.value;

    setEmail(value);

    if (!value) {
      setEmailFeedback("Informe seu e-mail");
    }

    if (!utils.emailIsValid(value)) {
      setEmailFeedback("Email inválido");
      return;
    }

    setEmailFeedback("");
  }

  function onMensagemChange(e) {
    let value = e.target.value;

    setMensagem(value);

    if (!value) {
      setMensagemFeedback("Você não quer dizer nada?");
    } else {
      setMensagemFeedback("");
    }
  }

  return (
    <Section title="Contato">
      <div className="Contato">
        <div className="Contato__columns">
          <form action="">
            <Input
              label="Nome"
              placeholder="Carlos Android"
              feedback={nomeFeedback}
              onChange={onNomeChange}
              value={nome}
            />
            <Input
              label="E-mail"
              placeholder="carlos@android.com"
              feedback={emailFeedback}
              value={email}
              onChange={onEmailChange}
            />
            <TextArea
              label="Mensagem"
              placeholder="Nota 10 na nac pra vcs"
              feedback={mensagemFeedback}
              onChange={onMensagemChange}
              value={mensagem}
            />
            <Button
              text="Enviar mensagem"
              theme="orange"
              onClick={(e) => {
                sendContato(e);
              }}
            />
            {feedback && <p className="Feedback">{feedback}</p>}
          </form>
          <div className="Contato__map">
            <p>Endereço</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15875.218658802318!2d-35.17068007522482!3d-5.883051803134015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff2ae2c55695%3A0x3ba594c57ef58fc1!2sPraia%20de%20Ponta%20Negra!5e0!3m2!1spt-BR!2sbr!4v1598921603626!5m2!1spt-BR!2sbr"></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}
