import { motion } from 'framer-motion'
import { Code2, HeartPulse, Lightbulb, Users } from 'lucide-react'
import TituloSecao from './TituloSecao'

const diferenciais = [
  {
    Icone: Code2,
    titulo: 'Desenvolvimento',
    texto: 'Aplicações modernas, organizadas em componentes e preparadas para crescer.',
  },
  {
    Icone: Users,
    titulo: 'Visão do usuário',
    texto: 'Experiência prática em suporte, treinamento e implantação de sistemas.',
  },
  {
    Icone: HeartPulse,
    titulo: 'Saúde e gestão',
    texto: 'Conhecimento de fluxos reais em unidades de saúde e processos administrativos.',
  },
  {
    Icone: Lightbulb,
    titulo: 'Solução de problemas',
    texto: 'Foco em compreender a necessidade antes de escolher a tecnologia.',
  },
]

function Sobre() {
  return (
    <section id="sobre" className="secao secao-alternada">
      <div className="container">
        <TituloSecao
          numero="01"
          etiqueta="Quem sou"
          titulo="Tecnologia com propósito e visão de negócio."
        />

        <div className="sobre-grade">
          <motion.div
            className="sobre-texto"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Sou desenvolvedor com foco em <strong>React</strong> e profissional
              de suporte e implantação de sistemas. Minha experiência combina
              tecnologia, atendimento, análise de processos e contato direto com
              usuários.
            </p>
            <p>
              Atuo na construção de soluções para saúde, comércio, atendimento e
              produtividade. Gosto de transformar rotinas manuais e telas
              complexas em experiências mais simples, seguras e eficientes.
            </p>
            <p>
              Minha formação em Tecnologia da Informação, Desenvolvimento de
              Sistemas e Comércio Exterior amplia minha capacidade de analisar
              projetos sob diferentes perspectivas.
            </p>

            <div className="sobre-estatisticas">
              <div>
                <strong>8+</strong>
                <span>Projetos em destaque</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Áreas de formação</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Foco em evolução</span>
              </div>
            </div>
          </motion.div>

          <div className="diferenciais-grade">
            {diferenciais.map(({ Icone, titulo, texto }, indice) => (
              <motion.article
                key={titulo}
                className="cartao-diferencial"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: indice * 0.08 }}
              >
                <div className="icone-caixa">
                  <Icone size={24} />
                </div>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
