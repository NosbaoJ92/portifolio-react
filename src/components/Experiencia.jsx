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
              initial={{ opacity: 0, x: indice % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="linha-tempo-marcador" />
              <span className="linha-tempo-periodo">{item.periodo}</span>
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
