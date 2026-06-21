import { motion } from 'framer-motion'
import { gruposHabilidades } from '../data/habilidades'
import TituloSecao from './TituloSecao'

function Habilidades() {
  return (
    <section id="habilidades" className="secao secao-alternada">
      <div className="container">
        <TituloSecao
          numero="03"
          etiqueta="Conhecimentos"
          titulo="Tecnologias e competências."
          descricao="Ferramentas que utilizo para tirar ideias do papel e entregar soluções úteis."
        />

        <div className="habilidades-grade">
          {gruposHabilidades.map((grupo, indice) => (
            <motion.article
              key={grupo.titulo}
              className="grupo-habilidades"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: indice * 0.08 }}
            >
              <span className="grupo-numero">0{indice + 1}</span>
              <h3>{grupo.titulo}</h3>
              <div className="lista-habilidades">
                {grupo.itens.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Habilidades
