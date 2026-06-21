import { ExternalLink, Github } from 'lucide-react'

function CardProjeto({ projeto }) {
  const {
    titulo,
    categoria,
    descricao,
    tecnologias,
    demonstracao,
    repositorio,
    destaque,
    Icone,
    gradiente,
  } = projeto

  const linkValido = (link) => link && link !== '#'

  return (
    <article className={`card-projeto ${destaque ? 'card-projeto-destaque' : ''}`}>
      <div className={`projeto-capa ${gradiente}`}>
        <Icone size={54} strokeWidth={1.4} />
        <span>{categoria}</span>
        {destaque && <b>Destaque</b>}
      </div>

      <div className="projeto-conteudo">
        <h3>{titulo}</h3>
        <p>{descricao}</p>

        <div className="projeto-tecnologias">
          {tecnologias.map((tecnologia) => (
            <span key={tecnologia}>{tecnologia}</span>
          ))}
        </div>

        <div className="projeto-links">
          {linkValido(demonstracao) ? (
            <a href={demonstracao} target="_blank" rel="noreferrer">
              <ExternalLink size={17} />
              Demonstração
            </a>
          ) : (
            <span className="link-indisponivel">
              <ExternalLink size={17} />
              Em breve
            </span>
          )}

          {linkValido(repositorio) ? (
            <a href={repositorio} target="_blank" rel="noreferrer">
              <Github size={17} />
              Código
            </a>
          ) : (
            <span className="link-indisponivel">
              <Github size={17} />
              Privado
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default CardProjeto
