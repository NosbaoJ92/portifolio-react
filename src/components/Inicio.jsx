import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

function Inicio() {
  return (
    <section id="inicio" className="secao inicio">
      <div className="container inicio-grade">
        <motion.div
          className="inicio-conteudo"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="etiqueta-disponibilidade">
            <span className="ponto-online" />
            Disponível para novos projetos
          </span>

          <p className="inicio-saudacao">Olá, eu sou</p>

          <h1>
            Joabson
            <span>Nogueira.</span>
          </h1>

          <h2>
            Desenvolvedor React e analista de
            <strong> suporte e implantação.</strong>
          </h2>

          <p className="inicio-texto">
            Transformo necessidades reais em sistemas modernos, responsivos e
            fáceis de usar, unindo desenvolvimento front-end, experiência com
            usuários e conhecimento de processos.
          </p>

          <div className="inicio-botoes">
            <a className="botao botao-primario" href="#projetos">
              Ver projetos
              <ArrowRight size={18} />
            </a>
            <a className="botao botao-secundario" href="#contato">
              Entrar em contato
            </a>
          </div>

          <div className="redes-inicio">
            <a
              href="https://github.com/NosbaoJ92"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/joabson-nogueira-6a3489177"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:joabsonno@gmail.com" aria-label="E-mail">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="inicio-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          aria-label="Ilustração de código"
        >
          <div className="orbita orbita-um" />
          <div className="orbita orbita-dois" />

          <div className="cartao-codigo">
            <div className="janela-topo">
              <span />
              <span />
              <span />
              <p>portfolio.jsx</p>
            </div>

            <div className="codigo">
              <p><span className="codigo-roxo">const</span> desenvolvedor = {'{'}</p>
              <p className="recuo">
                nome: <span className="codigo-verde">'Joabson'</span>,
              </p>
              <p className="recuo">
                foco: <span className="codigo-verde">'React'</span>,
              </p>
              <p className="recuo">
                experiencia: <span className="codigo-verde">'Sistemas'</span>,
              </p>
              <p className="recuo">
                objetivo: <span className="codigo-verde">'Criar soluções'</span>,
              </p>
              <p>{'}'}</p>
              <br />
              <p>
                <span className="codigo-azul">desenvolvedor</span>.
                <span className="codigo-amarelo">construir</span>()
              </p>
            </div>
          </div>

          <div className="selo-flutuante selo-react">React</div>
          <div className="selo-flutuante selo-firebase">Firebase</div>
          <div className="selo-flutuante selo-ui">UI/UX</div>
        </motion.div>
      </div>

      <a className="rolar-indicador" href="#sobre" aria-label="Ir para sobre">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}

export default Inicio
