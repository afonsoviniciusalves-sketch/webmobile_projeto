"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const itens = document.querySelectorAll(".fade-item");

    function mostrarItens() {
      const limite = window.scrollY + window.innerHeight - 50;
      for (let i = 0; i < itens.length; i++) {
        if (itens[i].offsetTop < limite) {
          (itens[i] as HTMLElement).style.opacity = "1";
        }
      }
    }

    window.addEventListener("scroll", mostrarItens);
    mostrarItens();

    return () => window.removeEventListener("scroll", mostrarItens);
  }, []);

  return (
    <div style={{ backgroundColor: "#f4f8fc", minHeight: "100vh" }}>
      <header className="header-site">
        <a href="/">
          <span className="logo-icone">M</span>
          <span className="nome-logo">myIT</span>
        </a>

        <nav className="navegacao">
          <ul>
            <li><a href="/produtos">Produtos</a></li>
          </ul>
        </nav>

        <div className="acoes-topo">
          <a href="/login" className="btn-entrar">ENTRAR</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-conteudo">
            <h1 className="fade-item">FAÇA PARTE DO PROJETO EXTENSIONISTA</h1>
            <a href="/registrar" className="fade-item">FAÇA PARTE!</a>

            <span className="descubra-mais fade-item">
              <span className="seta">↓</span> Mais informações abaixo
            </span>
          </div>
        </section>

        <section className="sobre" id="sobre">
          <h2 className="fade-item">COMO FUNCIONA</h2>

          <ol className="passos">
            <li className="passo fade-item">
              <span className="passo-numero">1</span>
              <h3>Conheça o projeto</h3>
              <p>Assim que você chega ao site, apresentamos o Projeto Extensionista e explicamos como ele conecta clientes que precisam de um site a desenvolvedores que estão colocando a mão na massa em projetos reais.</p>
            </li>

            <li className="passo fade-item">
              <span className="passo-numero">2</span>
              <h3>Escolha seu acesso</h3>
              <p>Você faz login ou cadastro escolhendo um dos dois perfis disponíveis: Cliente ou Desenvolvedor. Cada perfil tem seu próprio cadastro.</p>
            </li>

            <li className="passo fade-item">
              <span className="passo-numero">3</span>
              <h3>Área do Cliente</h3>
              <p>Ao entrar como Cliente, você é direcionado a um hub central, onde pode visualizar os projetos publicados pelos desenvolvedores.</p>
            </li>

            <li className="passo fade-item">
              <span className="passo-numero">4</span>
              <h3>Área do Desenvolvedor</h3>
              <p>No seu perfil: dados de contato no topo, barra lateral com os projetos que você já publicou, e um botão para adicionar novos.</p>
            </li>

            <li className="passo fade-item">
              <span className="passo-numero">5</span>
              <h3>Visualização pública</h3>
              <p>Quando um Cliente clica em um projeto, é levado ao perfil daquele desenvolvedor — em modo visualização, sem editar ou postar.</p>
            </li>
          </ol>
        </section>

        <section className="projetos" id="produtos">
          <header>
            <h2 className="fade-item">EXEMPLO DE PROJETO</h2>
          </header>

          <article className="card-projeto fade-item">
            <div className="card-projeto-conteudo">
              <h3>Nome do Projeto</h3>
              <p>Exemplo de uma solução desenvolvida pelo responsável pelo site. Aqui você pode conhecer a proposta, as tecnologias utilizadas e entrar em contato caso tenha interesse em um projeto semelhante.</p>
              <ul className="tecnologias">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <a href="/login" className="link-projeto">VER PROJETO</a>
            </div>
          </article>
        </section>
      </main>

      <footer className="rodape-site">
        <p>&copy; 2026 Projeto Extensionista - myIT</p>
      </footer>
    </div>
  );
}