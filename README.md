# SITE WEB - Projeto Extensionista

## Sobre o projeto

O projeto consiste no desenvolvimento de uma plataforma web que tem como objetivo conectar pessoas que precisam de um site a programadores capazes de desenvolver essa solução.

A plataforma busca facilitar o contato entre clientes e desenvolvedores, permitindo que o usuário encontre profissionais de acordo com critérios como preço e prazo de desenvolvimento.

Além disso, o projeto apresenta uma área de projetos, permitindo visualizar diferentes projetos desenvolvidos pela comunidade, filtrar os projetos por tecnologia e ordená-los por nome.

![wireframe](./IMG_4902.jpeg)

## Equipe

* Vinicius Alves / RA: 10771489
* Pedro Jobe / RA: 10743750
* Diego Campos / RA: 10771507
* Nicolas Braga / RA: 10777202

## Estrutura de arquivos

O site possui quatro páginas HTML e arquivos CSS e JavaScript responsáveis pela estrutura, estilização e funcionalidades:

| Página | HTML | CSS | JavaScript |
|---|---|---|---|
| Home | `index.html` | `style.css` | `script.js` |
| Login | `login.html` | `stylelogin.css` | — |
| Cadastro | `registrar.html` | `styleregistrar.css` | — |
| Produtos / Projetos | `produtos.html` | `styleprodutos.css` | `script.js` + `script-produtos.js` |

A página inicial utiliza `script.js` para controlar a aparição dos elementos marcados com a classe `fade-item`.

A página de Produtos utiliza `script-produtos.js` para carregar os projetos a partir de um texto em JSON, transformar os dados em objetos, gerar os cards na página, criar os filtros por tecnologia e permitir a ordenação dos projetos por nome.

---

# Página Inicial (`index.html`)

## 1. Cabeçalho (`<header class="header-site">`)

Responsável por apresentar a identidade visual do projeto, o acesso à página de produtos e o botão de entrada.

```html
<header class="header-site">
    <a href="index.html">
        <span class="logo-icone">M</span>
        <span class="nome-logo">Mackenzie</span>
    </a>

    <nav class="navegacao">
        <ul>
            <li><a href="produtos.html">Produtos</a></li>
        </ul>
    </nav>

    <div class="acoes-topo">
        <a href="login.html" class="btn-entrar">ENTRAR</a>
    </div>
</header>
```

**Explicação:**

* O logo está dentro de um link para `index.html`, permitindo retornar à página inicial.
* `<nav class="navegacao">` contém o acesso à página `produtos.html`, onde ficam os projetos da comunidade.
* O botão `.btn-entrar` direciona para `login.html`.
* A navegação da Home não possui mais um botão separado para Cliente e Desenvolvedor; existe um único acesso à tela de login.

---

## 2. Seção Principal / Banner (`<section class="hero">`)

Apresenta a mensagem principal do projeto, o botão de chamada para ação e uma indicação de que existem mais informações abaixo.

```html
<section class="hero">
    <div class="hero-conteudo">
        <h1 class="fade-item">FAÇA PARTE DO PROJETO EXTENSIONISTA</h1>
        <a href="#fale-conosco" class="fade-item">FAÇA PARTE!</a>

        <span class="descubra-mais fade-item">
            <span class="seta">↓</span> Mais informações abaixo
        </span>
    </div>
</section>
```

**Explicação:**

* `<h1>` apresenta o título principal.
* O link com texto `FAÇA PARTE!` funciona como chamada para ação.
* `<span class="descubra-mais">` apresenta uma seta e a mensagem "Mais informações abaixo".
* A classe `fade-item` é utilizada pelo `script.js` para controlar a aparição gradual dos elementos.
* O fundo do banner utiliza `imagem-fundo.jpg` junto com um gradiente escuro para melhorar a leitura do texto.

---

## 3. Seção "Como Funciona" (`<section class="sobre" id="sobre">`)

Apresenta, em cinco passos, a proposta de funcionamento da plataforma.

```html
<section class="sobre" id="sobre">
    <h2 class="fade-item">COMO FUNCIONA</h2>

    <ol class="passos">
        <li class="passo fade-item">
            <span class="passo-numero">1</span>
            <h3>Conheça o projeto</h3>
            <p>Assim que você chega ao site, apresentamos o Projeto Extensionista e explicamos como ele conecta clientes que precisam de um site a desenvolvedores que estão colocando a mão na massa em projetos reais.</p>
        </li>

        <li class="passo fade-item">
            <span class="passo-numero">2</span>
            <h3>Escolha seu acesso</h3>
            <p>Você faz login ou cadastro escolhendo um dos dois perfis disponíveis: Cliente ou Desenvolvedor. Cada perfil tem seu próprio cadastro.</p>
        </li>

        <li class="passo fade-item">
            <span class="passo-numero">3</span>
            <h3>Área do Cliente</h3>
            <p>Ao entrar como Cliente, você é direcionado a um hub central, onde pode visualizar os projetos publicados pelos desenvolvedores.</p>
        </li>

        <li class="passo fade-item">
            <span class="passo-numero">4</span>
            <h3>Área do Desenvolvedor</h3>
            <p>No seu perfil: dados de contato no topo, barra lateral com os projetos que você já publicou, e um botão para adicionar novos.</p>
        </li>

        <li class="passo fade-item">
            <span class="passo-numero">5</span>
            <h3>Visualização pública</h3>
            <p>Quando um Cliente clica em um projeto, é levado ao perfil daquele desenvolvedor — em modo visualização, sem editar ou postar.</p>
        </li>
    </ol>
</section>
```

**Explicação:**

* `<ol class="passos">` organiza as cinco etapas em uma lista ordenada.
* Cada `<li class="passo">` representa uma etapa.
* `<span class="passo-numero">` exibe visualmente o número de cada etapa.
* Os elementos possuem a classe `fade-item`, permitindo que sua opacidade seja alterada pelo JavaScript.

---

## 4. Seção "Exemplo de Projeto" (`<section class="projetos" id="produtos">`)

Apresenta um exemplo visual de projeto na página inicial e serve como acesso à ideia de projetos disponibilizados pela plataforma.

```html
<section class="projetos" id="produtos">
    <header>
        <h2 class="fade-item">EXEMPLO DE PROJETO</h2>
    </header>

    <article class="card-projeto fade-item">
        <div class="card-projeto-imagem"></div>
        <div class="card-projeto-conteudo">
            <h3>Nome do Projeto</h3>
            <p>Descrição curta explicando o que o projeto resolve e para quem ele foi feito.</p>
            <ul class="tecnologias">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
            <a href="#" class="link-projeto">VER PROJETO</a>
        </div>
    </article>
</section>
```

**Explicação:**

* `.card-projeto` representa um exemplo de projeto.
* `.card-projeto-imagem` reserva o espaço para a imagem do projeto.
* `.card-projeto-conteudo` contém nome, descrição, tecnologias e botão.
* `.tecnologias` apresenta as tecnologias utilizadas.
* `.link-projeto` representa o acesso ao projeto.
* A página inicial mantém esse card como exemplo; a listagem de projetos efetivamente funcional está em `produtos.html`.

---

## 5. Rodapé (`<footer class="rodape-site">`)

Exibe a identificação do projeto no final da página.

```html
<footer class="rodape-site">
    <p>&copy; 2026 Projeto Extensionista - Mackenzie</p>
</footer>
```

**Explicação:**

* `<footer>` representa o rodapé da página.
* `&copy;` exibe o símbolo `©`.
* O texto identifica o ano e o Projeto Extensionista - Mackenzie.

---

# `script.js` — Aparição dos elementos

O arquivo `script.js` controla a opacidade dos elementos que possuem a classe `fade-item`.

```js
const itens = document.querySelectorAll(".fade-item");

for (let i = 0; i < itens.length; i++) {
    itens[i].style.opacity = "1";
}
```

**Explicação:**

* `document.querySelectorAll(".fade-item")` seleciona todos os elementos que possuem a classe `fade-item`.
* O `for` percorre todos os elementos encontrados.
* `style.opacity = "1"` altera a opacidade dos elementos para que eles fiquem visíveis.
* A função é executada quando o script é carregado nas páginas que utilizam `script.js`.
* Na versão atual, o script não utiliza `IntersectionObserver`; a alteração acontece diretamente após a seleção dos elementos.

---

# `style.css` — Destaques de estilo da Home

## 6. Reset e tipografia

```css
* {
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
```

**Explicação:**

* O reset remove margens e espaçamentos padrão.
* `scroll-behavior: smooth` deixa a rolagem dos links internos suave.
* O `body` utiliza uma sequência de fontes do sistema.

---

## 7. Sistema de aparição

```css
.fade-item {
    opacity: 0;
    transition: opacity 0.6s ease;
}
```

**Explicação:**

* Os elementos `.fade-item` começam com `opacity: 0`.
* O `transition` cria uma transição suave de opacidade.
* O `script.js` altera a opacidade para `1`, fazendo os elementos aparecerem.

---

## 8. Cabeçalho

O `.header-site` utiliza Flexbox para organizar o logo, a navegação e o botão de entrada.

Principais funcionalidades:

* Logo direciona para `index.html`.
* Link "Produtos" direciona para `produtos.html`.
* Botão "ENTRAR" direciona para `login.html`.
* O layout se adapta para telas menores.

---

## 9. Banner (Hero)

O `.hero` utiliza:

* `background-image` com `imagem-fundo.jpg`;
* `linear-gradient` para aplicar uma camada escura sobre a imagem;
* `background-size: cover` para preencher a área;
* `background-position: center` para centralizar a imagem;
* Flexbox no conteúdo do banner;
* transição de opacidade nos elementos marcados como `.fade-item`.

---

## 10. Seção "Como Funciona"

Os cards da seção `.sobre` são organizados com Flexbox.

Cada `.passo` possui:

* número visual;
* título;
* descrição;
* borda;
* fundo;
* sombra;
* espaçamento interno.

Em telas menores, os elementos podem ocupar linhas diferentes devido ao uso de `flex-wrap`.

---

## 11. Seção de projetos

A Home apresenta um card de exemplo com:

* espaço para imagem;
* nome do projeto;
* descrição;
* lista de tecnologias;
* botão `VER PROJETO`.

A listagem completa e interativa dos projetos fica na página `produtos.html`.

---

## 12. Responsividade

```css
@media (max-width: 768px) {

    .header-site {
        padding: 1rem;
    }

    .navegacao {
        display: none;
    }

    .hero {
        padding: 3rem 1.5rem;
    }

    .hero h1 {
        font-size: 1.6rem;
    }

    .card-projeto {
        flex-direction: column;
    }

    .card-projeto-imagem {
        flex: 0 0 180px;
    }
}
```

**Explicação:**

* Em telas de até 768px, o menu de navegação é ocultado.
* O banner diminui seus espaçamentos.
* O título do banner reduz o tamanho da fonte.
* O card de projeto passa a organizar imagem e conteúdo verticalmente.

---

# Página de Produtos / Projetos (`produtos.html`)

A página `produtos.html` foi adicionada ao projeto para apresentar os projetos desenvolvidos pela comunidade.

```html
<main>

    <section class="produtos-topo">
        <h1 class="fade-item">NOSSOS PROJETOS</h1>
        <p class="fade-item">Conheça os projetos desenvolvidos pela nossa comunidade.</p>
    </section>

    <section class="filtros-secao">
        <div id="filtros" class="filtros fade-item"></div>
        <button class="ordenar-btn fade-item" onclick="ordenarPorNome()">Ordenar por nome (A-Z)</button>
    </section>

    <section class="grid-secao">
        <div id="gridProdutos" class="grid-produtos"></div>
    </section>

</main>
```

## 13. Topo da página

A seção `.produtos-topo` apresenta:

* o título "NOSSOS PROJETOS";
* uma descrição da página;
* identificação visual semelhante à identidade da Home.

---

## 14. Filtros por tecnologia

O elemento:

```html
<div id="filtros" class="filtros fade-item"></div>
```

é preenchido dinamicamente pelo `script-produtos.js`.

São criados botões para:

* Todos;
* HTML;
* CSS;
* JavaScript;
* React;
* Node.js.

Os filtros são obtidos a partir das tecnologias existentes nos projetos, portanto os botões não precisam ser escritos manualmente no HTML.

---

## 15. Ordenação por nome

O botão:

```html
<button class="ordenar-btn fade-item" onclick="ordenarPorNome()">
    Ordenar por nome (A-Z)
</button>
```

chama a função `ordenarPorNome()` do `script-produtos.js`.

A função organiza os projetos em ordem alfabética pelo atributo `nome` e atualiza a lista exibida.

---

## 16. Grid de projetos

O elemento:

```html
<div id="gridProdutos" class="grid-produtos"></div>
```

funciona como o espaço onde os cards dos projetos são inseridos pelo JavaScript.

Os projetos não são escritos diretamente no HTML. Eles são gerados dinamicamente a partir dos dados do arquivo `script-produtos.js`.

---

# `script-produtos.js` — Funcionalidades da página de projetos

## 17. Dados dos projetos e `JSON.parse`

Os projetos são inicialmente armazenados como um texto em formato JSON:

```js
const projetosJSON = `[
    { "nome": "Loja Virtual", "descricao": "E-commerce simples com carrinho de compras.", "tecnologias": ["HTML", "CSS", "JavaScript"], "link": "#" },
    { "nome": "Dashboard de Vendas", "descricao": "Painel visual para acompanhar métricas de vendas.", "tecnologias": ["JavaScript", "React"], "link": "#" },
    { "nome": "App de Tarefas", "descricao": "Lista de tarefas com marcação de concluído.", "tecnologias": ["HTML", "CSS", "JavaScript"], "link": "#" },
    { "nome": "Blog Pessoal", "descricao": "Site de blog com posts e comentários.", "tecnologias": ["HTML", "CSS"], "link": "#" },
    { "nome": "API de Clima", "descricao": "Consumo de dados climáticos em tempo real.", "tecnologias": ["JavaScript", "Node.js"], "link": "#" }
]`;

const projetos = JSON.parse(projetosJSON);
```

**Explicação:**

* `projetosJSON` armazena os dados como texto.
* `JSON.parse()` converte o texto JSON em uma estrutura de objetos JavaScript.
* Cada projeto possui `nome`, `descricao`, `tecnologias` e `link`.

---

## 18. Renderização dos projetos

A função `renderizarProjetos(lista)` recebe uma lista de projetos e cria os cards dentro de `#gridProdutos`.

```js
function renderizarProjetos(lista) {
    const grid = document.querySelector("#gridProdutos");

    grid.innerHTML = lista.map(function (projeto) {
        const tags = projeto.tecnologias.map(function (tec) {
            return "<li>" + tec + "</li>";
        }).join("");

        return `
            <article class="card-produto">
                <div class="card-produto-imagem"></div>
                <div class="card-produto-conteudo">
                    <h3>${projeto.nome}</h3>
                    <p>${projeto.descricao}</p>
                    <ul class="tecnologias">${tags}</ul>
                    <a href="${projeto.link}" class="link-projeto">VER PROJETO</a>
                </div>
            </article>
        `;
    }).join("");
}
```

**Explicação:**

* `querySelector("#gridProdutos")` localiza o local onde os cards serão inseridos.
* `map()` percorre os projetos.
* Um segundo `map()` percorre as tecnologias de cada projeto.
* `join("")` transforma os elementos gerados em uma única string HTML.
* Template strings `` `${...}` `` inserem os dados dos objetos diretamente no HTML.
* `innerHTML` atualiza o conteúdo da grade de projetos.

---

## 19. Tecnologias únicas

A função `obterTecnologiasUnicas(lista)` utiliza `reduce()`, `filter()`, `includes()` e spread para montar uma lista sem tecnologias repetidas.

```js
function obterTecnologiasUnicas(lista) {
    return lista.reduce(function (acumulado, projeto) {
        const novas = projeto.tecnologias.filter(function (tec) {
            return !acumulado.includes(tec);
        });
        return [...acumulado, ...novas];
    }, []);
}
```

**Explicação:**

* `reduce()` percorre todos os projetos.
* `filter()` seleciona as tecnologias que ainda não estão no acumulador.
* `includes()` verifica se uma tecnologia já existe.
* O operador spread `...` adiciona as novas tecnologias ao array.
* O resultado é uma lista de tecnologias únicas.

---

## 20. Criação dos botões de filtro

A função `montarFiltros()` cria os botões de tecnologia dinamicamente.

```js
function montarFiltros() {
    const container = document.querySelector("#filtros");
    const tecnologias = obterTecnologiasUnicas(projetos);

    let botoes = `<button class="filtro-btn" onclick="filtrar('todos', this)">Todos</button>`;

    for (let tec of tecnologias) {
        botoes += `<button class="filtro-btn" onclick="filtrar('${tec}', this)">${tec}</button>`;
    }

    container.innerHTML = botoes;
    marcarBotaoAtivo(container.querySelector("button"));
}
```

**Explicação:**

* O código localiza o elemento `#filtros`.
* Obtém as tecnologias únicas.
* Cria inicialmente o botão `Todos`.
* O `for...of` cria um botão para cada tecnologia encontrada.
* `innerHTML` coloca os botões na página.
* O primeiro botão é marcado como ativo.

---

## 21. Botão de filtro ativo

A função `marcarBotaoAtivo(botaoClicado)` altera diretamente os estilos dos botões.

```js
function marcarBotaoAtivo(botaoClicado) {
    const todosBotoes = document.querySelectorAll(".filtro-btn");

    for (let botao of todosBotoes) {
        botao.style.background = "#f4f8fc";
        botao.style.color = "#0f2a4a";
        botao.style.borderColor = "#dce6f0";
    }

    botaoClicado.style.background = "#2e8bff";
    botaoClicado.style.color = "#ffffff";
    botaoClicado.style.borderColor = "#2e8bff";
}
```

**Explicação:**

* `querySelectorAll()` seleciona todos os botões de filtro.
* O `for...of` redefine o estilo de todos os botões.
* O botão clicado recebe o estilo de botão ativo.

---

## 22. Filtragem dos projetos

A função `filtrar(tecnologia, botao)` mostra somente os projetos que possuem a tecnologia selecionada.

```js
function filtrar(tecnologia, botao) {
    marcarBotaoAtivo(botao);

    if (tecnologia === "todos") {
        renderizarProjetos(projetos);
    } else {
        const filtrados = projetos.filter(function (projeto) {
            return projeto.tecnologias.includes(tecnologia);
        });
        renderizarProjetos(filtrados);
    }
}
```

**Explicação:**

* Primeiro, o botão selecionado é marcado como ativo.
* Se a opção for `todos`, todos os projetos são exibidos.
* Caso contrário, `filter()` seleciona somente os projetos que possuem a tecnologia.
* `includes()` verifica se a tecnologia está presente no array de tecnologias do projeto.
* `renderizarProjetos()` atualiza a grade.

---

## 23. Ordenação dos projetos

A função `ordenarPorNome()` organiza os projetos alfabeticamente.

```js
function ordenarPorNome() {
    projetos.sort(function (a, b) {
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
    });
    renderizarProjetos(projetos);
}
```

**Explicação:**

* `sort()` reorganiza o array.
* A comparação é feita usando o atributo `nome`.
* `-1` coloca o primeiro projeto antes do segundo.
* `1` coloca o segundo antes do primeiro.
* `0` mantém a posição relativa.
* Depois da ordenação, `renderizarProjetos()` atualiza os cards.

---

## 24. Inicialização da página

No final do arquivo:

```js
montarFiltros();
renderizarProjetos(projetos);
```

**Explicação:**

* `montarFiltros()` cria os botões de tecnologia.
* `renderizarProjetos(projetos)` mostra todos os projetos inicialmente.
* Assim que `script-produtos.js` é carregado, a página já apresenta os filtros e os cards.

---

# Página de Login (`login.html`)

## 25. Estrutura HTML

```html
<header class="navbar">
    <div class="logo">
        <span class="logo-icon">M</span>
        <span class="logo-text">Mackenzie</span>
    </div>
</header>

<main class="container">
    <div class="login-card">
        <h1>ENTRAR NA CONTA</h1>

        <form class="login-form">
            <div class="form-group">
                <label for="email">E-MAIL</label>
                <input type="email" id="email" placeholder="seuemail@exemplo.com" required>
            </div>

            <div class="form-group">
                <label for="password">SENHA</label>
                <input type="password" id="password" placeholder="Digite sua senha" required>
            </div>

            <button type="submit" class="btn-submit">ENTRAR</button>
        </form>

        <div class="form-footer">
            <p>Ainda não possui uma conta? <a href="registrar.html">Cadastre-se</a>.</p>
        </div>
    </div>
</main>
```

**Explicação:**

* A página possui uma navbar simplificada com o logo.
* O formulário possui dois campos: e-mail e senha.
* `type="email"` faz o navegador reconhecer o campo como e-mail.
* `type="password"` oculta os caracteres digitados.
* `required` torna os campos obrigatórios.
* O botão `ENTRAR` envia o formulário.
* O link `Cadastre-se` direciona para `registrar.html`.

> **Observação:** no código atual não existe JavaScript ou backend responsável por autenticar o usuário. Portanto, o formulário de login possui a estrutura visual e a validação HTML dos campos, mas não realiza uma autenticação real.

---

# Página de Cadastro (`registrar.html`)

## 26. Estrutura HTML

O cadastro possui quatro campos:

```html
<div class="form-group">
    <label for="username">NOME DE USUÁRIO</label>
    <input type="text" id="username" placeholder="Digite seu nome completo" required>
</div>

<div class="form-group">
    <label for="email">E-MAIL</label>
    <input type="email" id="email" placeholder="seuemail@exemplo.com" required>
</div>

<div class="form-group">
    <label for="password">SENHA</label>
    <input type="password" id="password" placeholder="Digite sua senha" required>
</div>

<div class="form-group">
    <label for="confirm-password">CONFIRMAR SENHA</label>
    <input type="password" id="confirm-password" placeholder="Confirme sua senha" required>
</div>
```

**Explicação:**

* `username`: recebe o nome do usuário.
* `email`: recebe o e-mail.
* `password`: recebe a senha.
* `confirm-password`: recebe a confirmação da senha.
* `required`: torna todos os campos obrigatórios.
* O botão `CADASTRAR` envia o formulário.
* O link `Faça Login` direciona para `login.html`.

> **Observação:** no código atual não existe JavaScript ou backend responsável por salvar a conta ou verificar se as duas senhas são iguais. O cadastro possui a estrutura visual e a validação HTML dos campos, mas não realiza o cadastro em um banco de dados.

---

# CSS — `stylelogin.css` e `styleregistrar.css`

Os arquivos de estilo do Login e Cadastro possuem uma estrutura semelhante.

## 27. Configurações gerais

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body {
    background-color: #f8f9fa;
    color: #000000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
```

**Explicação:**

* Remove margens e espaçamentos padrão.
* `box-sizing: border-box` facilita o controle das dimensões dos elementos.
* Define uma fonte baseada nas fontes disponíveis no sistema.
* `body` utiliza Flexbox em coluna e ocupa pelo menos toda a altura da tela.

---

## 28. Barra superior e logo

A `.navbar` centraliza o logo e utiliza fundo azul escuro.

O `.logo-icon` cria um círculo com a letra `M`.

O `.logo-text` apresenta o nome "Mackenzie".

---

## 29. Centralização do formulário

```css
.container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
}
```

**Explicação:**

* `display: flex` ativa o Flexbox.
* `justify-content: center` centraliza horizontalmente.
* `align-items: center` centraliza verticalmente.
* `flex: 1` permite que o container ocupe o espaço disponível.

---

## 30. Cartão de Login e Cadastro

Os cartões possuem:

* largura de até 550px;
* fundo branco;
* espaçamento interno;
* borda;
* sombra;
* alinhamento centralizado.

No Login, a classe principal é `.login-card`.

No Cadastro, a classe principal é `.register-card`.

---

## 31. Campos e botão

Os grupos de formulário utilizam Flexbox em coluna:

```css
.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
```

Os campos possuem borda, espaçamento interno e fundo claro.

Quando o campo recebe foco:

```css
.form-group input:focus {
    border-color: #2e8bff;
    background-color: #ffffff;
}
```

A borda muda para azul para indicar qual campo está selecionado.

O botão `.btn-submit` possui efeito `hover`, alterando a cor de fundo quando o mouse passa sobre ele.

---

# `styleprodutos.css` — Estilos da página de projetos

## 32. Topo da página

`.produtos-topo` cria uma área azul escura para o título e a descrição.

## 33. Filtros

`.filtros` organiza os botões de tecnologia usando Flexbox e permite que eles quebrem linha quando necessário.

`.filtro-btn` cria os botões arredondados usados para selecionar uma tecnologia.

`.ordenar-btn` estiliza o botão responsável pela ordenação alfabética.

## 34. Grid de projetos

```css
.grid-produtos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
}
```

**Explicação:**

* `display: grid` cria uma grade.
* `auto-fit` permite adaptar a quantidade de colunas ao espaço disponível.
* `minmax(260px, 1fr)` define o tamanho mínimo e máximo das colunas.
* `gap` cria espaço entre os cards.

---

## 35. Card de projeto

Cada `.card-produto` possui:

* área para imagem;
* nome;
* descrição;
* tecnologias;
* link para visualizar o projeto.

Os cards são gerados automaticamente pelo `script-produtos.js`.

---

## 36. Responsividade

A página de projetos também possui uma regra para telas menores:

```css
@media (max-width: 768px) {
    .header-site .navegacao {
        display: none;
    }
}
```

Em telas de até 768px, o menu de navegação é ocultado.

---

# Conclusão

O projeto utiliza **HTML** para estruturar as páginas, **CSS** para estilização e responsividade e **JavaScript** para adicionar funcionalidades à interface.

As principais funcionalidades atualmente presentes são:

* navegação entre Home, Produtos, Login e Cadastro;
* apresentação do Projeto Extensionista;
* seção explicativa "Como Funciona";
* exemplo de projeto na Home;
* página de projetos da comunidade;
* criação dinâmica dos cards de projetos;
* conversão de dados JSON para objetos com `JSON.parse()`;
* geração dinâmica dos filtros por tecnologia;
* filtro de projetos por tecnologia;
* identificação de tecnologias únicas com `reduce()`, `filter()`, `includes()` e spread;
* ordenação dos projetos por nome com `sort()`;
* atualização dos cards através do DOM e `innerHTML`;
* responsividade para telas menores;
* transição de opacidade dos elementos marcados com `.fade-item`;
* formulários estruturados de Login e Cadastro com validação HTML básica.

Atualmente, Login e Cadastro ainda não possuem integração com banco de dados ou sistema de autenticação. Os links dos projetos também estão definidos como `#`, funcionando como elementos de demonstração da interface.
