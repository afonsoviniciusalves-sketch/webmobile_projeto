// Vinicius Alves - RA 10771489
// Pedro Jobe - RA 10743750
// Diego Campos - RA 10771507
// Nicolas Braga - RA 10777202

import type { Projeto } from "@/types/projeto";

export const projetos: Projeto[] = [
  {
    id: 1,
    nome: "Loja Virtual",
    descricao: "E-commerce simples com carrinho de compras.",
    detalhes: "Loja online com vitrine de produtos, página de detalhes e carrinho de compras. Ideal para pequenos negócios que querem começar a vender pela internet.",
    autor: "Desenvolvedor myIT",
    prazo: "30 dias",
    preco: "R$ 1.800",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    nome: "Dashboard de Vendas",
    descricao: "Painel visual para acompanhar métricas de vendas.",
    detalhes: "Painel com gráficos e indicadores de vendas por período, produto e região. Ajuda a equipe comercial a tomar decisões com base em dados.",
    autor: "Desenvolvedor myIT",
    prazo: "45 dias",
    preco: "R$ 2.500",
    tecnologias: ["JavaScript", "React"],
  },
  {
    id: 3,
    nome: "App de Tarefas",
    descricao: "Lista de tarefas com marcação de concluído.",
    detalhes: "Aplicativo para organizar tarefas do dia a dia, com marcação de concluído e filtro por status. Simples de usar, pensado para estudantes.",
    autor: "Desenvolvedor myIT",
    prazo: "15 dias",
    preco: "R$ 900",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    nome: "Blog Pessoal",
    descricao: "Site de blog com posts e comentários.",
    detalhes: "Blog com página inicial, lista de publicações e área de comentários. Layout limpo, com foco na leitura e boa aparência no celular.",
    autor: "Desenvolvedor myIT",
    prazo: "20 dias",
    preco: "R$ 1.100",
    tecnologias: ["HTML", "CSS"],
  },
  {
    id: 5,
    nome: "API de Clima",
    descricao: "Consumo de dados climáticos em tempo real.",
    detalhes: "Serviço que busca a previsão do tempo de uma cidade e entrega os dados prontos para serem exibidos em qualquer site ou aplicativo.",
    autor: "Desenvolvedor myIT",
    prazo: "25 dias",
    preco: "R$ 1.500",
    tecnologias: ["JavaScript", "Node.js"],
  },
];
