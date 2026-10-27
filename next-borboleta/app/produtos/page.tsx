"use client";
import { useEffect } from "react";

const projetos = [
  {
    id: 1,
    nome: "Loja Virtual",
    descricao: "E-commerce simples com carrinho de compras.",
    detalhes: "Loja online com vitrine de produtos, página de detalhes e carrinho de compras. Ideal para pequenos negócios que querem começar a vender pela internet.",
    autor: "Desenvolvedor myIT",
    prazo: "30 dias",
    preco: "R$ 1.800",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    nome: "Dashboard de Vendas",
    descricao: "Painel visual para acompanhar métricas de vendas.",
    detalhes: "Painel com gráficos e indicadores de vendas por período, produto e região. Ajuda a equipe comercial a tomar decisões com base em dados.",
    autor: "Desenvolvedor myIT",
    prazo: "45 dias",
    preco: "R$ 2.500",
    tecnologias: ["JavaScript", "React"]
  },
  {
    id: 3,
    nome: "App de Tarefas",
    descricao: "Lista de tarefas com marcação de concluído.",
    detalhes: "Aplicativo para organizar tarefas do dia a dia, com marcação de concluído e filtro por status. Simples de usar, pensado para estudantes.",
    autor: "Desenvolvedor myIT",
    prazo: "15 dias",
    preco: "R$ 900",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 4,
    nome: "Blog Pessoal",
    descricao: "Site de blog com posts e comentários.",
    detalhes: "Blog com página inicial, lista de publicações e área de comentários. Layout limpo, com foco na leitura e boa aparência no celular.",
    autor: "Desenvolvedor myIT",
    prazo: "20 dias",
    preco: "R$ 1.100",
    tecnologias: ["HTML", "CSS"]
  },
  {
    id: 5,
    nome: "API de Clima",
    descricao: "Consumo de dados climáticos em tempo real.",
    detalhes: "Serviço que busca a previsão do tempo de uma cidade e entrega os dados prontos para serem exibidos em qualquer site ou aplicativo.",
    autor: "Desenvolvedor myIT",
    prazo: "25 dias",
    preco: "R$ 1.500",
    tecnologias: ["JavaScript", "Node.js"]
  }
];

export default function ProdutosPage() {
  useEffect(() => {
    (window as any).renderizarProjetos = (lista: typeof projetos) => {
      const grid = document.querySelector("#gridProdutos");
      if (!grid) return;

      grid.innerHTML = lista.map((projeto) => {
        const tags = projeto.tecnologias.map((tec) => `<li>${tec}</li>`).join("");
        return `
          <article class="card-produto">
              <h3>${projeto.nome}</h3>
              <p>${projeto.descricao}</p>
              <ul class="tecnologias">${tags}</ul>
              <button class="link-projeto" onclick="window.abrirProjeto(${projeto.id})">VER PROJETO</button>
          </article>
        `;
      }).join("");
    };

    (window as any).abrirProjeto = (id: number) => {
      const escolhido = projetos.find((p) => p.id === id);
      if (!escolhido) return;

      const tags = escolhido.tecnologias.map((tec) => `<li>${tec}</li>`).join("");
      const card = document.querySelector("#detalheCard");
      if (!card) return;

      card.innerHTML = `
        <h2>${escolhido.nome}</h2>
        <p class="detalhe-autor">Desenvolvido por ${escolhido.autor}</p>
        <p>${escolhido.detalhes}</p>
        <div class="detalhe-info">
            <div><span>PRAZO</span><strong>${escolhido.prazo}</strong></div>
            <div><span>VALOR</span><strong>${escolhido.preco}</strong></div>
        </div>
        <ul class="tecnologias">${tags}</ul>
        <button class="link-projeto" onclick="window.fecharProjeto()">VOLTAR AOS PROJETOS</button>
      `;

      const listaProjetos = document.querySelector("#listaProjetos") as HTMLElement;
      const detalheProjeto = document.querySelector("#detalheProjeto") as HTMLElement;
      if (listaProjetos) listaProjetos.style.display = "none";
      if (detalheProjeto) detalheProjeto.style.display = "block";
    };

    (window as any).fecharProjeto = () => {
      const listaProjetos = document.querySelector("#listaProjetos") as HTMLElement;
      const detalheProjeto = document.querySelector("#detalheProjeto") as HTMLElement;
      if (detalheProjeto) detalheProjeto.style.display = "none";
      if (listaProjetos) listaProjetos.style.display = "block";
    };

    (window as any).ordenarPorNome = () => {
      projetos.sort((a, b) => a.nome.localeCompare(b.nome));
      (window as any).renderizarProjetos(projetos);
    };

    (window as any).renderizarProjetos(projetos);
  }, []);

  return (
    <>
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
        <section className="produtos-topo">
          <h1 className="fade-item">NOSSOS PROJETOS</h1>
          <p className="fade-item">Conheça os projetos desenvolvidos por um único profissional, responsável por todas as soluções apresentadas no site.</p>
        </section>

        <div id="listaProjetos">
          <section className="filtros-secao">
            <div id="filtros" className="filtros fade-item"></div>
            <button className="ordenar-btn fade-item" onClick={() => (window as any).ordenarPorNome()}>Ordenar por nome (A-Z)</button>
          </section>

          <section className="grid-secao">
            <div id="gridProdutos" className="grid-produtos"></div>
          </section>
        </div>

        <section id="detalheProjeto" className="detalhe-secao">
          <article id="detalheCard" className="detalhe-card"></article>
        </section>
      </main>
    </>
  );
}