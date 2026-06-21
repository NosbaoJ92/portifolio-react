import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const links = [
  { nome: 'Início', destino: '#inicio' },
  { nome: 'Sobre', destino: '#sobre' },
  { nome: 'Experiência', destino: '#experiencia' },
  { nome: 'Habilidades', destino: '#habilidades' },
  { nome: 'Projetos', destino: '#projetos' },
  { nome: 'Contato', destino: '#contato' },
]

function Cabecalho({ temaEscuro, alternarTema }) {
  const [menuAberto, setMenuAberto] = useState(false)
  const [comSombra, setComSombra] = useState(false)

  useEffect(() => {
    const aoRolar = () => setComSombra(window.scrollY > 24)
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  const fecharMenu = () => setMenuAberto(false)

  return (
    <header className={`cabecalho ${comSombra ? 'cabecalho-ativo' : ''}`}>
      <div className="container cabecalho-conteudo">
        <a className="marca" href="#inicio" onClick={fecharMenu}>
          <span className="marca-simbolo">&lt;JN /&gt;</span>
        </a>

        <nav className={`navegacao ${menuAberto ? 'navegacao-aberta' : ''}`}>
          {links.map((link) => (
            <a key={link.destino} href={link.destino} onClick={fecharMenu}>
              {link.nome}
            </a>
          ))}
        </nav>

        <div className="cabecalho-acoes">
          <button
            className="botao-icone"
            type="button"
            onClick={alternarTema}
            aria-label={temaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            {temaEscuro ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            className="botao-icone botao-menu"
            type="button"
            onClick={() => setMenuAberto((valor) => !valor)}
            aria-label="Abrir menu"
          >
            {menuAberto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Cabecalho
