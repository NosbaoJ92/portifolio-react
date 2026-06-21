function TituloSecao({ numero, etiqueta, titulo, descricao }) {
  return (
    <div className="titulo-secao">
      <span className="titulo-numero">{numero}</span>
      <div>
        <p className="titulo-etiqueta">{etiqueta}</p>
        <h2>{titulo}</h2>
        {descricao && <p className="titulo-descricao">{descricao}</p>}
      </div>
    </div>
  )
}

export default TituloSecao
