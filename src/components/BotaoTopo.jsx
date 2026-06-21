import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function BotaoTopo() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 500)
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <a
      href="#inicio"
      className={`botao-topo ${visivel ? 'botao-topo-visivel' : ''}`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </a>
  )
}

export default BotaoTopo
