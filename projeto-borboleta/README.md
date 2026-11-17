# SITE WEB - Projeto Extensionista (Parte 2: Borboleta)

## Sobre o projeto

Este projeto é a continuação direta do Projeto 1. O site de apresentação de projetos de um profissional da área de tecnologia, antes feito com HTML, CSS e JavaScript puro, foi migrado para uma arquitetura baseada em **componentização com React**, utilizando o framework **Next.js** (App Router, com TypeScript).

A plataforma reúne, em um único ambiente digital, informações sobre os trabalhos realizados, permitindo que visitantes conheçam as soluções desenvolvidas e, havendo interesse, entrem em contato diretamente com o responsável.

Na Parte 2, o site passou a contar com:

* interface dividida em componentes reutilizáveis (`Header`, `Footer`, `CardProjeto`, `Tecnologias`, entre outros);
* estado interno (`useState`) e efeitos (`useEffect`) controlando filtro, ordenação, formulários e o carregamento dos dados;
* uma API construída dentro do próprio Next.js (`/api/projetos`), com listagem, cadastro, busca, atualização e exclusão de projetos (GET, POST, PUT e DELETE), seguindo a Aula 10 da disciplina;
* consumo dessa API pela interface com `fetch`, para preencher a lista, o detalhe e os formulários de forma dinâmica;
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

No App Router do Next.js, cada pasta dentro de `app/` que contém um arquivo `page.tsx` vira uma rota. Uma pasta entre colchetes, como `[id]`, vira uma rota dinâmica. Uma pasta com `route.ts` vira uma rota de API.

| Rota | Tipo | Arquivo |
|---|---|---|
| `/` | Simples | `app/page.tsx` |
| `/produtos` | Simples | `app/produtos/page.tsx` |
| `/login` | Simples | `app/login/page.tsx` |
| `/registrar` | Simples | `app/registrar/page.tsx` |
| `/produtos/novo` | Simples | `app/produtos/novo/page.tsx` |
| `/produtos/[id]` | Dinâmica | `app/produtos/[id]/page.tsx` |
| `/produtos/[id]/editar` | Dinâmica | `app/produtos/[id]/editar/page.tsx` |
| `/api/projetos` | API | `app/api/projetos/route.ts` |
| `/api/projetos/[id]` | API (dinâmica) | `app/api/projetos/[id]/route.ts` |

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
* **API no mesmo projeto:** o Next.js permite criar a API junto do site, sem servidor separado.
* **Rotas por pastas:** cada pasta com `page.tsx` dentro de `app/` vira uma rota. O detalhe do projeto deixou de ser um bloco escondido/mostrado com `display` e virou uma página própria, com URL compartilhável (`/produtos/2`).
* **Estilos isolados:** com CSS Modules, as classes de um componente não vazam para o resto do site.

---

## Estrutura de arquivos

```
next-borboleta/
├── app/
│   ├── api/
│   │   └── projetos/
│   │       ├── [id]/
│   │       │   └── route.ts
│   │       └── route.ts
│   ├── login/
│   │   └── page.tsx
│   ├── produtos/
│   │   ├── [id]/
│   │   │   ├── editar/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── novo/
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
│   ├── FormProjeto.tsx / .module.css
│   ├── Footer.tsx / .module.css
│   ├── FormLogin.tsx
│   ├── FormRegistrar.tsx
│   ├── Formulario.module.css
│   ├── Header.tsx / .module.css
│   ├── ListaProjetos.tsx / .module.css
│   └── Tecnologias.tsx / .module.css
├── data/
│   └── passos.ts
├── lib/
│   ├── db.ts
│   └── validacao.ts
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
* `lib/db.ts`: fonte de dados em memória (um array com os 5 projetos iniciais) e as funções que o alteram.
* `lib/validacao.ts`: confere se os dados recebidos nas requisições POST e PUT são válidos.
* `types/projeto.ts`: tipo TypeScript de um projeto.

---

## A API

A API segue a Aula 10 da disciplina: uma rota de API do Next.js recebe a requisição, executa a ação (listar, cadastrar, buscar, atualizar ou excluir) sobre os dados e devolve a resposta em JSON.

```
Interface React  --fetch-->  Rota de API (Next.js)  -->  lib/db.ts (dados em memória)
```

| Ação | Método | Endpoint | Resposta |
|---|---|---|---|
| Listar | GET | `/api/projetos` | 200 com a lista de projetos |
| Cadastrar | POST | `/api/projetos` | 201 com o projeto criado, ou 400 se os dados forem inválidos |
| Buscar | GET | `/api/projetos/[id]` | 200 com o projeto, ou 404 |
| Atualizar | PUT | `/api/projetos/[id]` | 200 com o projeto atualizado, 400 ou 404 |
| Excluir | DELETE | `/api/projetos/[id]` | 200 com a confirmação, ou 404 |

Um projeto tem os campos `id`, `nome`, `descricao`, `detalhes`, `autor`, `prazo`, `preco` e `tecnologias` (lista de textos). No cadastro e na atualização, `nome`, `descricao`, `detalhes`, `prazo`, `preco` e ao menos uma tecnologia são obrigatórios. O `autor` é opcional e, se não vier, assume "Desenvolvedor myIT". O `id` é gerado pela própria API.

**Dados em memória:** os projetos ficam em um array em `lib/db.ts`, como mostrado na aula. Enquanto o servidor está ativo, as operações alteram esse array. Quando o servidor reinicia, os dados voltam aos 5 projetos iniciais, pois não há banco de dados.

**Onde a API é usada no site:**

| Tela | Chamada |
|---|---|
| `/produtos` (lista) | GET `/api/projetos` |
| `/produtos/[id]` (detalhe) | GET `/api/projetos/[id]` e DELETE `/api/projetos/[id]` (botão Excluir) |
| `/produtos/novo` | POST `/api/projetos` |
| `/produtos/[id]/editar` | GET e PUT `/api/projetos/[id]` |

---

## Trechos de código

### 1. Fonte de dados em memória (`lib/db.ts`)

```ts
// guarda o array em globalThis para que ele sobreviva a recarregamentos em desenvolvimento
const global = globalThis as typeof globalThis & { projetosDb?: Projeto[] };

if (!global.projetosDb) {
  global.projetosDb = inicial;
}

const projetos = global.projetosDb;

export function listar(): Projeto[] {
  return projetos;
}

export function criar(dados: NovoProjeto): Projeto {
  // o novo id é o maior id existente + 1
  const id = projetos.reduce((maior, projeto) => Math.max(maior, projeto.id), 0) + 1;
  const novo: Projeto = { id, ...dados };
  projetos.push(novo);
  return novo;
}
```

### 2. Listar e cadastrar (`app/api/projetos/route.ts`)

Em Next.js, um arquivo `route.ts` que exporta funções com o nome do método HTTP cria uma rota de API.

```ts
export async function GET() {
  // connection() indica que a resposta deve ser gerada a cada requisição
  await connection();
  return Response.json(listar());
}

export async function POST(request: Request) {
  // lê o corpo JSON da requisição (null se vier quebrado)
  const dados = await request.json().catch(() => null);
  const projeto = validarProjeto(dados);

  // dados inválidos: responde 400
  if (!projeto) {
    return Response.json({ erro: "Dados inválidos" }, { status: 400 });
  }

  // projeto criado: responde 201
  return Response.json(criar(projeto), { status: 201 });
}
```

### 3. Buscar, atualizar e excluir (`app/api/projetos/[id]/route.ts`)

O nome da pasta entre colchetes indica que `id` é um parâmetro da URL. A mesma rota atende `/api/projetos/1`, `/api/projetos/2` e assim por diante.

```ts
export async function GET(_request: Request, { params }: RouteContext<"/api/projetos/[id]">) {
  await connection();
  // lê o parâmetro [id] da URL
  const { id } = await params;
  const projeto = buscar(Number(id));

  if (!projeto) {
    return Response.json({ erro: "Projeto não encontrado" }, { status: 404 });
  }

  return Response.json(projeto);
}

export async function DELETE(_request: Request, { params }: RouteContext<"/api/projetos/[id]">) {
  const { id } = await params;

  if (!excluir(Number(id))) {
    return Response.json({ erro: "Projeto não encontrado" }, { status: 404 });
  }

  return Response.json({ mensagem: "Projeto excluído" });
}
```

O PUT segue a mesma ideia: lê o corpo, valida e chama `atualizar(id, projeto)`.

### 4. Consumindo a API com `fetch` (`components/ListaProjetos.tsx`)

```tsx
"use client";

export default function ListaProjetos() {
  // estados: lista vinda da API, filtro, ordenação, carregamento e erro
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [filtro, setFiltro] = useState("todos");
  const [ordenado, setOrdenado] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  // roda uma vez, quando o componente aparece, e busca os dados na API
  useEffect(() => {
    fetch("/api/projetos", { cache: "no-store" })
      .then((resposta) => resposta.json())   // converte a resposta em JSON
      .then((dados: Projeto[]) => setProjetos(dados))   // atualiza o estado
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }, []);

  // ...
}
```

`"use client"` indica que o componente roda no navegador, o que é necessário para usar `useState`, `useEffect` e eventos de clique.

### 5. Filtro e ordenação derivados do estado (`components/ListaProjetos.tsx`)

```tsx
// aplica o filtro escolhido
const filtrados =
  filtro === "todos"
    ? projetos
    : projetos.filter((projeto) => projeto.tecnologias.includes(filtro));

// aplica a ordenação A-Z em uma cópia da lista
const exibidos = ordenado
  ? [...filtrados].sort((a, b) => a.nome.localeCompare(b.nome))
  : filtrados;
```

Os cards são desenhados com `exibidos.map(...)`. Quando `filtro` ou `ordenado` mudam, o React redesenha a lista sozinho.

### 6. POST, PUT e DELETE com `fetch` (`components/FormProjeto.tsx` e `components/DetalheProjeto.tsx`)

```tsx
// cadastro (POST) ou edição (PUT), conforme exista ou não um id
const resposta = await fetch(id === undefined ? "/api/projetos" : `/api/projetos/${id}`, {
  method: id === undefined ? "POST" : "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ ...campos, tecnologias }),
});

// exclusão (DELETE): não envia corpo
await fetch(`/api/projetos/${id}`, { method: "DELETE" });
```

Nos três casos o `fetch` informa o método e, quando necessário, envia o corpo em JSON.

### 7. Rota dinâmica de página (`app/produtos/[id]/page.tsx`)

```tsx
// gera, na compilação, as páginas /produtos/1 até /produtos/5
export function generateStaticParams() {
  return listar().map((projeto) => ({ id: String(projeto.id) }));
}

export default async function ProjetoPage({ params }: PageProps<"/produtos/[id]">) {
  // lê o parâmetro [id] da URL e entrega ao componente, que busca na API
  const { id } = await params;

  return (
    <>
      <Header />
      <main>
        <DetalheProjeto id={Number(id)} />
      </main>
    </>
  );
}
```

### 8. Formulário controlado com validação (`components/FormRegistrar.tsx`)

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

### 9. Animação de aparecer ao rolar a página (`components/FadeScroll.tsx`)

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

Para testar a API diretamente no navegador: `http://localhost:3000/api/projetos` e `http://localhost:3000/api/projetos/1`.

Para testar POST, PUT e DELETE sem usar o site (em outro terminal):

```bash
curl -X POST http://localhost:3000/api/projetos -H "Content-Type: application/json" -d '{"nome":"Portfólio","descricao":"Site pessoal","detalhes":"Portfólio com projetos","prazo":"10 dias","preco":"R$ 700","tecnologias":["HTML","CSS"]}'

curl -X PUT http://localhost:3000/api/projetos/6 -H "Content-Type: application/json" -d '{"nome":"Portfólio v2","descricao":"Site pessoal","detalhes":"Portfólio","prazo":"12 dias","preco":"R$ 800","tecnologias":["HTML","CSS","React"]}'

curl -X DELETE http://localhost:3000/api/projetos/6
```

Outros comandos (`package.json`): `npm run build` (gera a versão de produção), `npm run start` (executa a versão de produção) e `npm run lint` (verifica o código).

---

## Uso de Inteligência Artificial

* Ferramenta utilizada: Claude (Anthropic), pelo chat.
* Finalidade e forma de uso:
  * **Wireframe:** o Claude gerou o wireframe estático em cinza e branco das cinco telas do site (Home, Produtos, Detalhe, Login e Cadastro), a partir do enunciado do Projeto 2 e do site do Projeto 1. Pedimos que ele indicasse apenas onde ficariam as rotas simples e a rota dinâmica.
  * **Migração para React e Next.js:** enviamos o código do Projeto 1 (HTML, CSS e JavaScript) e o Claude converteu o site para Next.js com App Router e TypeScript. Ele dividiu as páginas em componentes reutilizáveis, trocou a manipulação direta do DOM por `useState` e `useEffect`, separou os estilos em CSS Modules e criou as rotas do site.
  * **API:** a partir dos slides, o Claude construiu a API interna do Next.js (GET, POST, PUT e DELETE em `/api/projetos`), a fonte de dados em memória, a validação dos dados e as telas que consomem a API com `fetch`.
  * **Explicações de conceitos:** usamos o Claude para entender roteamento simples e dinâmico, componentização, componentes de servidor e de cliente (`"use client"`), `useState`, `useEffect` e como funciona uma requisição à API.
  * **Organização do repositório e debug:** o Claude orientou como separar as duas partes do projeto no GitHub, como remover o projeto Next duplicado, como configurar o `.gitignore` e como rodar o site (inclusive pelo Codespaces).
  * **Documentação:** o Claude ajudou a escrever e a atualizar este README.
* O código gerado foi testado por nós rodando o projeto, e o Claude também compilou o projeto e testou os endpoints da API durante o desenvolvimento. Todos os integrantes estudaram o código para conseguir explicá-lo na apresentação.

---

## Aprendizados

* **Componentização:** aprendemos a dividir a interface em peças reutilizáveis (`Header`, `Footer`, `CardProjeto`, `Tecnologias`, entre outras) e a passar dados entre elas por props. Uma mudança em um componente vale para o site todo, o que não acontecia no Projeto 1, onde o cabeçalho era copiado em cada arquivo HTML.
* **Estado e efeitos:** entendemos que `useState` guarda os dados que mudam e faz o React redesenhar a tela sozinho (filtro, ordenação, campos dos formulários), e que `useEffect` executa ações em momentos específicos, como buscar dados na API quando a página abre e registrar o evento de scroll.
* **Rotas no Next.js:** cada pasta com `page.tsx` dentro de `app/` vira uma página. Rotas simples têm endereço fixo (`/produtos`, `/login`) e a rota dinâmica `/produtos/[id]` atende vários endereços com o mesmo arquivo, lendo o parâmetro da URL.
* **Servidor e cliente:** no App Router, os componentes são de servidor por padrão. Só usam `"use client"` os que têm estado, efeitos ou eventos. Deixamos as páginas no servidor e levamos para o cliente apenas a parte interativa.
* **API e `fetch`:** aprendemos que a interface envia uma requisição, a rota de API interpreta a ação, mexe nos dados e responde em JSON. Praticamos os métodos GET, POST, PUT e DELETE, os códigos de resposta (200, 201, 400 e 404), a validação dos dados recebidos e o consumo com `fetch` e `useEffect`.
* **Dados em memória:** a API guarda os projetos em um array, então os dados voltam ao estado inicial quando o servidor reinicia. Entendemos que uma aplicação real precisaria de um banco de dados.
* **Estilos e HTML semântico:** usamos CSS Modules para isolar os estilos de cada componente e um `globals.css` só para o que é comum ao site. Aprendemos a preferir tags com significado (`header`, `main`, `section`, `article`, `footer`, `dl`, `label`) em vez de `div`.
* **Formulários controlados:** os campos dos formulários têm o valor guardado no estado, e a validação (tamanho mínimo da senha e confirmação igual) mostra mensagens de erro condicionalmente.
* **Dificuldades encontradas:**
  * O repositório acabou com dois projetos Next.js, um dentro do outro, o que gerou desconto. Resolvemos mantendo uma única pasta `next-borboleta` e conferindo que só existe um `package.json`.
  * Descobrimos a importância do `.gitignore` para não enviar `node_modules` e `.next` ao GitHub.
  * Com a API, vimos que as respostas precisam ser geradas a cada requisição (não pré-geradas na compilação), senão uma lista cadastrada não apareceria.
  * Enfrentamos a diferença entre o que roda no servidor e no cliente, e a regra de código sem comentários explicativos com identificação de autoria no topo de cada arquivo.
