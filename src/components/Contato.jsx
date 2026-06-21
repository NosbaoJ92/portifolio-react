import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import TituloSecao from './TituloSecao'

function Contato() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })

  const atualizarCampo = (evento) => {
    const { name, value } = evento.target
    setFormulario((dados) => ({ ...dados, [name]: value }))
  }

  const enviarMensagem = (evento) => {
    evento.preventDefault()

    const assunto = encodeURIComponent(
      formulario.assunto || `Contato pelo portfólio — ${formulario.nome}`,
    )

    const corpo = encodeURIComponent(
      `Nome: ${formulario.nome}\nE-mail: ${formulario.email}\n\n${formulario.mensagem}`,
    )

    window.location.href = `mailto:joabsonno@gmail.com?subject=${assunto}&body=${corpo}`
  }

  return (
    <section id="contato" className="secao secao-alternada">
      <div className="container">
        <TituloSecao
          numero="05"
          etiqueta="Vamos conversar"
          titulo="Tem uma ideia ou oportunidade?"
          descricao="Estou disponível para conversar sobre projetos, desenvolvimento, implantação de sistemas e novas oportunidades."
        />

        <div className="contato-grade">
          <motion.div
            className="contato-informacoes"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Entre em contato</h3>
            <p>
              Envie uma mensagem pelo formulário ou utilize um dos canais abaixo.
            </p>

            <a href="mailto:joabsonno@gmail.com" className="contato-item">
              <div className="icone-caixa">
                <Mail size={22} />
              </div>
              <div>
                <span>E-mail</span>
                <strong>joabsonno@gmail.com</strong>
              </div>
            </a>

            <div className="contato-item">
              <div className="icone-caixa">
                <MapPin size={22} />
              </div>
              <div>
                <span>Localização</span>
                <strong>Baixada Santista — SP</strong>
              </div>
            </div>

            <div className="contato-redes">
              <a href="https://github.com/NosbaoJ92" target="_blank" rel="noreferrer">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/joabson-nogueira-6a3489177" target="_blank" rel="noreferrer">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            className="formulario-contato"
            onSubmit={enviarMensagem}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="formulario-linha">
              <label>
                Nome
                <input
                  type="text"
                  name="nome"
                  value={formulario.nome}
                  onChange={atualizarCampo}
                  placeholder="Seu nome"
                  required
                />
              </label>

              <label>
                E-mail
                <input
                  type="email"
                  name="email"
                  value={formulario.email}
                  onChange={atualizarCampo}
                  placeholder="voce@email.com"
                  required
                />
              </label>
            </div>

            <label>
              Assunto
              <input
                type="text"
                name="assunto"
                value={formulario.assunto}
                onChange={atualizarCampo}
                placeholder="Sobre o que deseja conversar?"
              />
            </label>

            <label>
              Mensagem
              <textarea
                name="mensagem"
                value={formulario.mensagem}
                onChange={atualizarCampo}
                placeholder="Escreva sua mensagem..."
                rows="6"
                required
              />
            </label>

            <button className="botao botao-primario" type="submit">
              Enviar mensagem
              <Send size={18} />
            </button>

            <small>
              O envio abrirá seu aplicativo de e-mail com a mensagem preenchida.
            </small>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contato
