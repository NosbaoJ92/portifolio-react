import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { projetos } from '../data/projetos'
import CardProjeto from './CardProjeto'
import TituloSecao from './TituloSecao'

function Projetos() {
  const [filtro, setFiltro] = useState('Todos')

  const categorias = useMemo(
    () => ['Todos', ...new Set(projetos.map((projeto) => projeto.categoria))],
    [],
  )

  const projetosFiltrados =
    filtro === 'Todos'
      ? projetos
      : projetos.filter((projeto) => projeto.categoria === filtro)

  return (
    <section id="projetos" className="secao">
      <div className="container">
        <TituloSecao
          numero="04"
          etiqueta="Portfólio"
          titulo="Projetos desenvolvidos."
          descricao="Soluções criadas para resolver problemas reais em diferentes contextos."
        />

        <div className="filtros-projetos" aria-label="Filtrar projetos">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={filtro === categoria ? 'filtro-ativo' : ''}
              onClick={() => setFiltro(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        <motion.div layout className="projetos-grade">
          {projetosFiltrados.map((projeto) => (
            <motion.div
              layout
              key={projeto.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CardProjeto projeto={projeto} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projetos
