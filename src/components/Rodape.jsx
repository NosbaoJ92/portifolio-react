function Rodape() {
  return (
    <footer className="rodape">
      <div className="container rodape-conteudo">
        <a className="marca" href="#inicio">
          <span className="marca-simbolo">&lt;JN /&gt;</span>
        </a>
        <p>
          © {new Date().getFullYear()} Joabson Nogueira. Desenvolvido com React.
        </p>
      </div>
    </footer>
  )
}

export default Rodape
