import { motion } from 'framer-motion'
import { experiencias } from '../data/experiencias'
import TituloSecao from './TituloSecao'

function Experiencia() {
  return (
    <section id="experiencia" className="secao">
      <div className="container">
        <TituloSecao
          numero="02"
          etiqueta="Trajetória"
          titulo="Experiência que conecta pessoas, processos e sistemas."
          descricao="Uma trajetória construída entre desenvolvimento, suporte, implantação e aprendizado contínuo."
        />

        <div className="linha-tempo">
          {experiencias.map((item, indice) => (
            <motion.article
              key={`${item.periodo}-${item.cargo}`}
              className="linha-tempo-item"
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: indice * 0.08,
              }}
            >
              <div className="linha-tempo-periodo-wrapper">
                <span className="linha-tempo-periodo">
                  {item.periodo}
                </span>
              </div>

              <div className="linha-tempo-coluna">
                <span className="linha-tempo-marcador" />
              </div>

              <div className="linha-tempo-cartao">
                <h3>{item.cargo}</h3>

                <h4>{item.empresa}</h4>

                <p>{item.descricao}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiencia