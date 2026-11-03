# SITE WEB - Projeto Extensionista (Parte 2: Borboleta)

## Sobre o projeto

Este projeto é a continuação direta do Projeto 1. O site de apresentação de projetos de um profissional da área de tecnologia, antes feito com HTML, CSS e JavaScript puro, foi migrado para uma arquitetura baseada em **componentização com React**, utilizando o framework **Next.js** (App Router, com TypeScript).

A plataforma reúne, em um único ambiente digital, informações sobre os trabalhos realizados, permitindo que visitantes conheçam as soluções desenvolvidas e, havendo interesse, entrem em contato diretamente com o responsável.

Na Parte 2, o site passou a contar com:

* interface dividida em componentes reutilizáveis (`Header`, `Footer`, `CardProjeto`, `Tecnologias`, entre outros);
* estado interno (`useState`) controlando filtro, ordenação e formulários, e efeito (`useEffect`) na animação de scroll;
* dados dos projetos centralizados em `data/projetos.ts`, usados pela lista e pelo detalhe (a integração com a API fornecida pela professora será feita em uma etapa seguinte);
* rotas simples (`/`, `/produtos`, `/login`, `/registrar`) e uma rota dinâmica (`/produtos/[id]`);
* estilos com CSS Modules por componente e um `globals.css` para o que é comum a todo o site (sem Tailwind).

Os projetos possuem valores, prazos e números de contato fictícios apenas para demonstração da interface.

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

No App Router do Next.js, cada pasta dentro de `app/` que contém um arquivo `page.tsx` vira uma rota. Uma pasta entre colchetes, como `[id]`, vira uma rota dinâmica.

| Rota | Tipo | Arquivo |
|---|---|---|
| `/` | Simples | `app/page.tsx` |
| `/produtos` | Simples | `app/produtos/page.tsx` |
| `/login` | Simples | `app/login/page.tsx` |
| `/registrar` | Simples | `app/registrar/page.tsx` |
| `/produtos/[id]` | Dinâmica | `app/produtos/[id]/page.tsx` |

---

## Caráter extensionista

Este projeto se caracteriza como uma atividade extensionista por representar a aplicação prática de conhecimentos técnicos desenvolvidos ao longo da disciplina de Web Mobile em uma ferramenta real e acessível a qualquer pessoa externa à universidade. Diferente de um exercício acadêmico que se encerra na entrega e correção, o site permanece disponível e utilizável depois disso, cumprindo uma função concreta para quem o acessa.

Ele aproxima, de forma direta, quem possui capacidade técnica para desenvolver soluções web de quem precisa delas, reduzindo a dificuldade natural de encontrar e avaliar um desenvolvedor de confiança ao reunir, em um só lugar, exemplos de trabalho, tecnologias utilizadas, prazos e valores. Dessa forma, o projeto cumpre o papel central da extensão universitária: estabelecer uma ponte entre o conhecimento produzido dentro da universidade e uma necessidade real da comunidade fora dela.

---

## Por que migrar para componentes React?

No Projeto 1, cada página era um HTML separado e o JavaScript montava os cards escrevendo HTML dentro de texto (`innerHTML`), com funções soltas chamadas por `onclick`. Com React e Next.js:

* **Reutilização:** o cabeçalho, o rodapé, o card de projeto e a lista de tecnologias são escritos uma única vez e usados em várias páginas. No Projeto 1, o cabeçalho era copiado em cada HTML.
* **Manutenção:** uma alteração no componente se reflete em todo o site.
* **Interface reativa:** quando o estado muda (por exemplo, o filtro de tecnologia), o React atualiza apenas a parte da tela afetada, sem manipular o DOM manualmente.
* **Rotas por pastas:** cada pasta com `page.tsx` dentro de `app/` vira uma rota. O detalhe do projeto deixou de ser um bloco escondido/mostrado com `display` e virou uma página própria, com URL compartilhável (`/produtos/2`).
* **Estilos isolados:** com CSS Modules, as classes de um componente não vazam para o resto do site.

---

## Estrutura de arquivos

```
next-borboleta/
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── produtos/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── produtos.module.css
│   ├── registrar/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── home.module.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AuthLayout.tsx / .module.css
│   ├── BotaoLink.tsx / .module.css
│   ├── CardProjeto.tsx / .module.css
│   ├── DetalheProjeto.tsx / .module.css
│   ├── FadeScroll.tsx
│   ├── Footer.tsx / .module.css
│   ├── FormLogin.tsx
│   ├── FormRegistrar.tsx
│   ├── Formulario.module.css
│   ├── Header.tsx / .module.css
│   ├── ListaProjetos.tsx / .module.css
│   └── Tecnologias.tsx / .module.css
├── data/
│   ├── passos.ts
│   └── projetos.ts
├── types/
│   └── projeto.ts
├── public/
│   └── imagem-fundo.jpg
├── next.config.ts
├── package.json
└── README.md
```

* `app/layout.tsx`: layout raiz, que envolve todas as páginas (`html`, `body`, idioma e título).
* `app/globals.css`: apenas o que é comum ao site todo (reset, fonte e a classe `fade-item`).
* `components/`: componentes reutilizáveis, cada um com seu `.module.css`.
* `data/projetos.ts`: os dados fixos (mockados) dos projetos, usados pela lista e pelo detalhe.
* `types/projeto.ts`: tipo TypeScript de um projeto.

---

## Trechos de código

### 1. Dados dos projetos (`data/projetos.ts`)

Os projetos ficam em um único arquivo, tipados com o `Projeto` de `types/projeto.ts`. Lista e detalhe leem daqui, então trocar a origem dos dados (por exemplo, pela API da professora) fica concentrado em poucos pontos.

```ts
export const projetos: Projeto[] = [
  {
    id: 1,
    nome: "Loja Virtual",
    descricao: "E-commerce simples com carrinho de compras.",
    detalhes: "Loja online com vitrine de produtos, página de detalhes e carrinho de compras...",
    autor: "Desenvolvedor myIT",
    prazo: "30 dias",
    preco: "R$ 1.800",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  // ... mais 4 projetos (Dashboard de Vendas, App de Tarefas, Blog Pessoal, API de Clima)
];
```

### 2. Filtro e ordenação com `useState` (`components/ListaProjetos.tsx`)

```tsx
"use client";

export default function ListaProjetos() {
  // estados: tecnologia escolhida no filtro e se a lista está ordenada
  const [filtro, setFiltro] = useState("todos");
  const [ordenado, setOrdenado] = useState(false);

  // tecnologias únicas, sem repetir (reduce + spread)
  const tecnologias = projetos.reduce<string[]>((acumulado, projeto) => {
    const novas = projeto.tecnologias.filter((tec) => !acumulado.includes(tec));
    return [...acumulado, ...novas];
  }, []);

  // aplica o filtro escolhido
  const filtrados =
    filtro === "todos"
      ? projetos
      : projetos.filter((projeto) => projeto.tecnologias.includes(filtro));

  // aplica a ordenação A-Z em uma cópia da lista
  const exibidos = ordenado
    ? [...filtrados].sort((a, b) => a.nome.localeCompare(b.nome))
    : filtrados;

  // ... cards desenhados com exibidos.map(...)
}
```

`"use client"` indica que o componente roda no navegador, o que é necessário para usar `useState` e eventos de clique. Quando `filtro` ou `ordenado` mudam, o React redesenha a lista sozinho.

### 3. Rota dinâmica (`app/produtos/[id]/page.tsx`)

O nome da pasta entre colchetes indica que `id` é um parâmetro da URL. Acessar `/produtos/2` mostra o projeto de id 2.

```tsx
// gera, na compilação, as páginas /produtos/1 até /produtos/5
export function generateStaticParams() {
  return projetos.map((projeto) => ({ id: String(projeto.id) }));
}

export default async function ProjetoPage({ params }: PageProps<"/produtos/[id]">) {
  // lê o parâmetro [id] da URL
  const { id } = await params;

  // procura o projeto cujo id é igual ao da URL
  const projeto = projetos.find((item) => item.id === Number(id));

  // se não existir, mostra a página de "não encontrado"
  if (!projeto) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <DetalheProjeto projeto={projeto} />
      </main>
    </>
  );
}
```

### 4. Navegação entre páginas (`components/CardProjeto.tsx`)

```tsx
// Link navega sem recarregar a página; o id vem do projeto
<BotaoLink href={`/produtos/${projeto.id}`}>VER PROJETO</BotaoLink>
```

### 5. Formulários controlados com validação (`components/FormRegistrar.tsx`)

```tsx
const [senha, setSenha] = useState("");
const [confirmar, setConfirmar] = useState("");
const [erro, setErro] = useState("");

function validarCadastro(e: FormEvent<HTMLFormElement>) {
  // impede o envio padrão do formulário
  e.preventDefault();

  // regra 1: tamanho mínimo da senha
  if (senha.length < 6) {
    setErro("A senha precisa ter no mínimo 6 caracteres.");
    return;
  }

  // regra 2: senha e confirmação devem ser iguais
  if (senha !== confirmar) {
    setErro("As senhas não coincidem.");
    return;
  }

  // validação aprovada: segue para a área de projetos
  setErro("");
  router.push("/produtos");
}
```

Os campos de senha são "controlados": o valor vem do estado (`value={senha}`) e é atualizado a cada digitação (`onChange`). A mensagem de erro aparece apenas quando o estado `erro` tem texto.

### 6. Animação de aparecer ao rolar a página (`components/FadeScroll.tsx`)

```tsx
useEffect(() => {
  // pega todos os elementos marcados com a classe fade-item
  const itens = document.querySelectorAll<HTMLElement>(".fade-item");

  function mostrarItens() {
    // limite = posição atual do scroll + altura da tela - margem de 50px
    const limite = window.scrollY + window.innerHeight - 50;
    itens.forEach((item) => {
      // se o item já entrou na área visível, ele fica visível
      if (item.offsetTop < limite) {
        item.style.opacity = "1";
      }
    });
  }

  window.addEventListener("scroll", mostrarItens);
  mostrarItens();

  // limpeza: remove o evento quando o componente sai da tela
  return () => window.removeEventListener("scroll", mostrarItens);
}, []);
```
