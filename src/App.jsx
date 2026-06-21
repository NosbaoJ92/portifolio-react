import { useEffect, useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Inicio from './components/Inicio'
import Sobre from './components/Sobre'
import Experiencia from './components/Experiencia'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Rodape from './components/Rodape'
import BotaoTopo from './components/BotaoTopo'

function App() {
  const [temaEscuro, setTemaEscuro] = useState(() => {
    const temaSalvo = localStorage.getItem('portfolio-tema')
    return temaSalvo ? temaSalvo === 'escuro' : true
  })

  useEffect(() => {
    document.documentElement.dataset.theme = temaEscuro ? 'dark' : 'light'
    localStorage.setItem('portfolio-tema', temaEscuro ? 'escuro' : 'claro')
  }, [temaEscuro])

  return (
    <div className="aplicacao">
      <div className="grade-fundo" aria-hidden="true" />
      <Cabecalho
        temaEscuro={temaEscuro}
        alternarTema={() => setTemaEscuro((valorAtual) => !valorAtual)}
      />

      <main>
        <Inicio />
        <Sobre />
        <Experiencia />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>

      <Rodape />
      <BotaoTopo />
    </div>
  )
}

export default App
