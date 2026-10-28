# SITE WEB - Projeto Extensionista (Parte 2: Borboleta)

## Sobre o projeto

Este projeto é a continuação direta do Projeto 1. O site de apresentação de projetos de um profissional da área de tecnologia, antes feito com HTML, CSS e JavaScript puro, está sendo migrado para uma arquitetura baseada em **componentização com React**, utilizando o framework **Next.js** (App Router, com TypeScript).

A plataforma continua reunindo, em um único ambiente digital, informações sobre os trabalhos realizados, permitindo que visitantes conheçam as soluções desenvolvidas e, havendo interesse, entrem em contato diretamente com o responsável.

Os projetos possuem valores, prazos e números de contato fictícios apenas para demonstração da interface.

### Situação atual da migração

| Item | Situação |
|---|---|
| Projeto Next.js criado (App Router + TypeScript) | Feito |
| HTML das páginas migrado para JSX (Home, Produtos, Login, Cadastro) | Feito |
| CSS unificado em `app/globals.css` | Feito |
| Interatividade com `useEffect` (animação de scroll) | Feito |
| Validação de Login e Cadastro | Feito |
| Lista de projetos, ordenação e abertura do detalhe | Feito (ainda com manipulação direta do DOM, a ser convertida para `useState`) |
| Componentes reutilizáveis (`Header`, `Footer`, `CardProjeto`) | A fazer |
| Rota de API `/api/projetos` com JSON fixo | A fazer |
| Rota dinâmica `/produtos/[id]` | A fazer |

---

## Equipe

* Vinicius Alves / RA: 10771489
* Pedro Jobe / RA: 10743750
* Diego Campos / RA: 10771507
* Nicolas Braga / RA: 10777202

---

## Ideação e protótipos (Wireframe)

O wireframe da Parte 2 foi feito em tons neutros (cinza e branco), com foco apenas na estrutura das telas e na indicação de onde ficam as rotas do Next.js.

**Legenda das etiquetas:**

* **Etiqueta escura e sólida:** rota simples (sem parâmetro).
* **Etiqueta branca e tracejada:** rota dinâmica (com parâmetro).

### Home — rota simples `/`

<img width="1280" height="1240" alt="Home@1x" src="https://github.com/user-attachments/assets/b6c8886c-f155-48bd-aa9c-026dfe9ed932" />

### Produtos — rota simples `/produtos`

<img width="1280" height="760" alt="Produtos@1x" src="https://github.com/user-attachments/assets/2f878c75-d2d7-445c-b747-908c998e7164" />


### Detalhe do projeto — rota dinâmica `/produtos/[id]`

<img width="1280" height="760" alt="Detalhe do projeto@1x" src="https://github.com/user-attachments/assets/5cad8262-09fd-4586-b986-31cf1b9864e4" />


### Login — rota simples `/login`

<img width="1280" height="720" alt="Login@1x" src="https://github.com/user-attachments/assets/42873507-1f3b-4c46-b784-b6b90136ad77" />


### Cadastro — rota simples `/registrar`

<img width="1280" height="800" alt="Cadastro@1x" src="https://github.com/user-attachments/assets/b9417db4-5b4b-41cf-87e9-ea895c759a0d" />


### Mapa de rotas

No App Router do Next.js, cada pasta dentro de `app/` que contém um arquivo `page.tsx` vira uma rota. Uma pasta entre colchetes, como `[id]`, vira uma rota dinâmica. Uma pasta com `route.ts` vira uma rota de API.

| Rota | Tipo | Arquivo | Situação |
|---|---|---|---|
| `/` | Simples | `app/page.tsx` | Feito |
| `/produtos` | Simples | `app/produtos/page.tsx` | Feito |
| `/login` | Simples | `app/login/page.tsx` | Feito |
| `/registrar` | Simples | `app/registrar/page.tsx` | Feito |
| `/produtos/[id]` | Dinâmica | `app/produtos/[id]/page.tsx` | A fazer |
| `/api/projetos` | API (GET) | `app/api/projetos/route.ts` | A fazer |

---

## Caráter extensionista

Este projeto se caracteriza como uma atividade extensionista por representar a aplicação prática de conhecimentos técnicos desenvolvidos ao longo da disciplina de Web Mobile em uma ferramenta real e acessível a qualquer pessoa externa à universidade. Diferente de um exercício acadêmico que se encerra na entrega e correção, o site permanece disponível e utilizável depois disso, cumprindo uma função concreta para quem o acessa.

Ele aproxima, de forma direta, quem possui capacidade técnica para desenvolver soluções web de quem precisa delas, reduzindo a dificuldade natural de encontrar e avaliar um desenvolvedor de confiança ao reunir, em um só lugar, exemplos de trabalho, tecnologias utilizadas, prazos e valores. Dessa forma, o projeto cumpre o papel central da extensão universitária: estabelecer uma ponte entre o conhecimento produzido dentro da universidade e uma necessidade real da comunidade fora dela.

---

## Por que migrar para componentes React?

No Projeto 1, cada página era um HTML separado e o JavaScript montava os cards escrevendo HTML dentro de texto (`innerHTML`). Com React e Next.js:

* **Reutilização:** o cabeçalho, o rodapé e o card de projeto passam a ser escritos uma única vez e usados em várias páginas.
* **Manutenção:** uma alteração no componente se reflete em todo o site.
* **Interface reativa:** quando o estado muda (por exemplo, o filtro de tecnologia), o React atualiza apenas a parte da tela afetada, sem manipular o DOM manualmente.
* **Rotas por pastas:** cada pasta com `page.tsx` dentro de `app/` vira uma rota, sem precisar ligar páginas manualmente.
* **API no mesmo projeto:** o Next.js permite criar a rota de API junto do site, sem servidor separado.

---

## Estrutura de arquivos

```
next-borboleta/
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── produtos/
│   │   └── page.tsx
│   ├── registrar/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── IMG_4902.jpeg
│   └── imagem-fundo.jpg
├── wireframe/
│   └── (imagens do wireframe)
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

* `app/layout.tsx`: layout raiz, que envolve todas as páginas (tag `html`, `body` e fontes).
* `app/globals.css`: CSS global, resultado da junção de `style.css`, `stylelogin.css`, `styleregistrar.css` e `styleprodutos.css` do Projeto 1.
* `public/`: arquivos estáticos servidos diretamente (imagem de fundo do banner e wireframe do Projeto 1).

---

## Trechos de código

### 1. Animação de aparecer ao rolar a página (`app/page.tsx`)

A Home é um componente de cliente (`"use client"`), pois usa `useEffect` e acessa `window`. O efeito roda uma vez, quando a página carrega, registra o evento de scroll e remove o evento quando o componente sai da tela.

```tsx
"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // pega todos os elementos que devem aparecer ao rolar
    const itens = document.querySelectorAll(".fade-item");

    function mostrarItens() {
      // limite = posição atual do scroll + altura da tela - margem de 50px
      const limite = window.scrollY + window.innerHeight - 50;
      for (let i = 0; i < itens.length; i++) {
        // se o item já entrou na área visível, deixa ele visível
        if (itens[i].offsetTop < limite) {
          (itens[i] as HTMLElement).style.opacity = "1";
        }
      }
    }

    window.addEventListener("scroll", mostrarItens);
    mostrarItens();

    // limpeza: remove o evento quando o componente é desmontado
    return () => window.removeEventListener("scroll", mostrarItens);
  }, []); // [] = executa apenas uma vez

  // ... JSX da página (header, hero, sobre, projetos, footer)
}
```

### 2. Validação de Login e Cadastro (`app/login/page.tsx` e `app/registrar/page.tsx`)

```tsx
const validarCadastro = (e: React.FormEvent<HTMLFormElement>) => {
  // impede o envio padrão do formulário (que recarregaria a página)
  e.preventDefault();

  const senhaInput = document.querySelector("#password") as HTMLInputElement;
  const confirmarInput = document.querySelector("#confirm-password") as HTMLInputElement;
  const erro = document.querySelector("#erroSenha") as HTMLElement;

  // regra 1: tamanho mínimo da senha
  if (senhaInput.value.length < 6) {
    erro.innerText = "A senha precisa ter no mínimo 6 caracteres.";
    erro.style.display = "block";
    return;
  }

  // regra 2: senha e confirmação devem ser iguais
  if (senhaInput.value !== confirmarInput.value) {
    erro.innerText = "As senhas não coincidem.";
    erro.style.display = "block";
    return;
  }

  // validação aprovada: segue para a área de projetos
  erro.style.display = "none";
  window.location.href = "/produtos";
};
```

O formulário usa essa função no evento `onSubmit`: `<form onSubmit={validarCadastro}>`. O Login tem apenas a regra 1.

### 3. Dados dos projetos (`app/produtos/page.tsx`)

Atualmente os projetos ficam em um array dentro da própria página (veja a seção de API abaixo para a mudança prevista):

```tsx
const projetos = [
  {
    id: 1,
    nome: "Loja Virtual",
    descricao: "E-commerce simples com carrinho de compras.",
    detalhes: "Loja online com vitrine de produtos, página de detalhes e carrinho de compras...",
    autor: "Desenvolvedor myIT",
    prazo: "30 dias",
    preco: "R$ 1.800",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  // ... mais 4 projetos (Dashboard de Vendas, App de Tarefas, Blog Pessoal, API de Clima)
];
```

### 4. Listagem, ordenação e detalhe (`app/produtos/page.tsx`)

Nesta etapa, o `useEffect` registra funções no `window` que montam os cards e o detalhe e alternam a visibilidade entre a lista e o detalhe:

```tsx
useEffect(() => {
  // monta os cards a partir da lista de projetos
  (window as any).renderizarProjetos = (lista: typeof projetos) => {
    const grid = document.querySelector("#gridProdutos");
    if (!grid) return;
    grid.innerHTML = lista.map((projeto) => {
      const tags = projeto.tecnologias.map((tec) => `<li>${tec}</li>`).join("");
      return `<article class="card-produto"> ... </article>`;
    }).join("");
  };

  // procura o projeto pelo id e mostra o detalhe no lugar da lista
  (window as any).abrirProjeto = (id: number) => {
    const escolhido = projetos.find((p) => p.id === id);
    if (!escolhido) return;
    // ... preenche #detalheCard, esconde #listaProjetos e mostra #detalheProjeto
  };

  // ordena a lista por nome (A-Z) e redesenha os cards
  (window as any).ordenarPorNome = () => {
    projetos.sort((a, b) => a.nome.localeCompare(b.nome));
    (window as any).renderizarProjetos(projetos);
  };

  (window as any).renderizarProjetos(projetos);
}, []);
```

> Esta é a parte que ainda mantém o estilo do Projeto 1 (manipulação direta do DOM). A conversão prevista é: guardar a lista em `useState`, desenhar os cards com `projetos.map(...)` dentro do JSX e trocar o detalhe por navegação para `/produtos/[id]`.

### 5. Rota de API (a implementar: `app/api/projetos/route.ts`)

No App Router, um arquivo `route.ts` que exporta uma função `GET` cria uma rota de API. Este arquivo responderá em `/api/projetos` e devolverá o JSON fixo.

```ts
import { NextResponse } from "next/server";
import projetos from "@/data/projetos.json";

export async function GET() {
  // devolve a lista de projetos (JSON fixo) com status 200
  return NextResponse.json(projetos);
}
```

### 6. Consumo da API com `useState` e `useEffect` (a implementar: `app/produtos/page.tsx`)

```tsx
"use client";
import { useState, useEffect } from "react";

export default function ProdutosPage() {
  // estado que guarda a lista (começa vazia)
  const [projetos, setProjetos] = useState([]);

  // roda uma vez, quando a página carrega, e busca os dados na API local
  useEffect(() => {
    fetch("/api/projetos")
      .then((resposta) => resposta.json())
      .then((dados) => setProjetos(dados));
  }, []);

  // ... cards desenhados com projetos.map(...)
}
```

### 7. Rota dinâmica (a implementar: `app/produtos/[id]/page.tsx`)

O nome da pasta entre colchetes indica que `id` é um parâmetro da URL. Acessar `/produtos/2` carrega o projeto de id 2.

```tsx
"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function DetalheProjeto() {
  // lê o parâmetro [id] da URL
  const { id } = useParams();
  const [projeto, setProjeto] = useState(null);

  useEffect(() => {
    fetch("/api/projetos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        // procura o projeto cujo id é igual ao da URL
        setProjeto(dados.find((p: any) => p.id === Number(id)));
      });
  }, [id]);

  // ... JSX com nome, descrição, prazo, valor e tecnologias
}
```

> Os trechos 5, 6 e 7 são o modelo do que será implementado. Substituir pelo código real quando estiverem prontos.

---

## Como rodar

Pré-requisito: Node.js instalado.

```bash
# 1. clonar o repositório
git clone <URL-DO-REPOSITORIO>

# 2. entrar na pasta do projeto
cd next-borboleta

# 3. instalar as dependências
npm install

# 4. iniciar o servidor de desenvolvimento
npm run dev
```

Depois, acessar `http://localhost:3000` no navegador.

Outros comandos disponíveis (`package.json`): `npm run build` (gera a versão de produção), `npm run start` (executa a versão de produção) e `npm run lint` (verifica o código).

---

## Deploy (opcional)

* Link: [preencher caso seja feito deploy na Vercel]

---

## Uso de Inteligência Artificial

> Seção obrigatória pelas diretrizes da disciplina. Descrever exatamente **como** e **para qual finalidade** a IA foi utilizada.

* Ferramenta utilizada: [preencher]
* Finalidade e forma de uso:
  * [ex.: ideação e criação do wireframe]
  * [ex.: entendimento de `useState` e `useEffect`]
  * [ex.: auxílio na lógica da API]
  * [ex.: debug de erros]
* Caso nenhuma IA tenha sido utilizada, declarar aqui.

---

## Aprendizados

* [Preencher com o que o grupo aprendeu sobre componentização]
* [Preencher sobre estado e efeitos (`useState` / `useEffect`)]
* [Preencher sobre rotas simples e dinâmicas no Next.js]
* [Preencher sobre a criação e o consumo da rota de API]
* [Dificuldades encontradas e como foram resolvidas]
