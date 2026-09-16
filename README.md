# SITE WEB - Projeto Extensionista

## Sobre o projeto

O projeto consiste no desenvolvimento de uma plataforma web que tem como objetivo conectar pessoas que precisam de um site a programadores capazes de desenvolver essa solução.

A plataforma busca facilitar o contato entre clientes e desenvolvedores, permitindo que o usuário encontre profissionais de acordo com critérios como preço e prazo de desenvolvimento.

Além disso, o cliente poderá apresentar referências visuais do site que deseja desenvolver, enviando imagens ou referências de outros sites.

![wireframe](./IMG_4902.jpeg)

## Equipe

* Vinicius Alves / RA: 10771489
* Pedro Jobe / RA: 10743750
* Diego Campos / RA: 10771507
* Nicolas Braga / RA: 10777202

## Estrutura de arquivos

O site é dividido em três páginas, cada uma com seu próprio CSS:

| Página | HTML | CSS |
|---|---|---|
| Home | `index.html` | `style.css` |
| Login | `login.html` | `stylelogin.css` |
| Cadastro | `registrar.html` | `styleregistrar.css` |

A home também usa `script.js`, responsável pela animação de entrada dos elementos ao rolar a página.

---

# Página Inicial (`index.html`)

## 1. Cabeçalho (`<header class="header-site">`)

Responsável por apresentar a identidade visual e a navegação principal do site.

```html
<header class="header-site">
    <a href="index.html">
        <span class="logo-icone">M</span>
        <span class="nome-logo">Mackenzie</span>
    </a>

    <nav class="navegacao">
        <ul>
            <li><a href="#produtos">Produtos</a></li>
        </ul>
    </nav>

    <div class="acoes-topo">
        <a href="login.html" class="btn-entrar">ENTRAR</a>
    </div>
</header>
```

**Explicação:**

* O logo inteiro (`<span class="logo-icone">` + `<span class="nome-logo">`) fica dentro de um único `<a href="index.html">`, para que clicar nele sempre recarregue a home e volte ao topo da página.
* `<nav class="navegacao">`: contém o menu de navegação. Hoje só resta o item "Produtos" — o item "Sobre" foi removido do menu porque a seção "Sobre" já fica logo abaixo do banner, visível na rolagem natural da página.
* `<div class="acoes-topo">`: os antigos dois botões separados ("CLIENTE" e "DEV") foram unificados em um único botão `.btn-entrar`, que leva à página de login compartilhada por ambos os perfis.
* A classe `navegacao` (sem o acento de "navegação") foi escolhida deliberadamente — evitar acentos em nomes de classes e IDs evita problemas de encoding em alguns ambientes e editores.

---

## 2. Seção Principal / Banner (`<section class="hero">`)

Apresenta a mensagem principal do projeto, um botão de chamada para ação e uma indicação de rolagem.

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

* `<h1>`: título principal da página, com destaque de tamanho e posição central.
* `<a class="fade-item">`: funciona como botão de chamada para ação, levando o visitante a entrar em contato.
* `<span class="descubra-mais">`: um indicativo visual (seta animada) sugerindo que existe mais conteúdo abaixo do banner.
* A classe `fade-item`, presente em vários elementos, é o gancho usado pelo CSS e pelo JavaScript para a animação de entrada — ver a seção sobre `script.js` mais abaixo.
* No CSS, o banner deixou de ser uma cor sólida e passou a ter uma imagem de fundo real (uma foto de código em tela desfocada, com um overlay escuro por cima para manter o texto legível), aplicada via pseudo-elementos `::before` (a imagem) e `::after` (o gradiente escuro), enquanto o conteúdo (`.hero-conteudo`) fica posicionado acima dos dois com `z-index`.

---

## 3. Seção "Como Funciona" (`<section class="sobre" id="sobre">`)

Explica, em passos numerados, o fluxo completo de uso da plataforma — da chegada do visitante até a visualização pública de um projeto.

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

* `<ol class="passos">`: uma lista ordenada, já que os 5 passos seguem uma sequência lógica de uso do site.
* Cada `<li class="passo">` representa uma etapa, numerada visualmente por `<span class="passo-numero">` (um círculo com o número, estilizado via CSS, não pela numeração automática da `<ol>`).
* `<h3>` e `<p>`: título curto e descrição de cada etapa.
* No CSS, cada `.passo` tem um `transition-delay` diferente (`nth-child(1)` a `nth-child(5)`), para que os 5 cards apareçam em sequência, um pouco depois do outro, em vez de todos ao mesmo tempo — reforçando visualmente a ideia de "passo a passo".

---

## 4. Seção "Exemplo de Projeto" (`<section class="projetos" id="produtos">`)

Mostra um exemplo de card de projeto publicado por um desenvolvedor.

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

* Diferente da primeira versão do site (que tinha 4 cards rasos, um "SITE 1" a "SITE 4"), a seção foi simplificada para exibir **um único exemplo**, mais completo e representativo do que os cards reais terão quando o hub de projetos existir.
* `<article class="card-projeto">`: representa o card do projeto, dividido em duas partes lado a lado — `.card-projeto-imagem` (reservada para uma imagem/thumbnail do projeto) e `.card-projeto-conteudo` (título, descrição, tecnologias usadas e botão).
* `<ul class="tecnologias">`: lista as tecnologias do projeto como pequenas etiquetas (tags), estilizadas em linha com `display: flex`.
* `<a class="link-projeto">`: botão que, futuramente, levará à página de visualização daquele projeto/desenvolvedor.
* No modo responsivo (telas até 768px), o card muda de `flex-direction: row` para `column`, empilhando a imagem sobre o conteúdo.

---

# `script.js` — Animação de entrada (scroll-reveal)

```js
document.addEventListener('DOMContentLoaded', () => {
    const itens = document.querySelectorAll('.fade-item');

    const observador = new IntersectionObserver((entradas, observer) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                observer.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.15
    });

    itens.forEach(item => observador.observe(item));
});
```

**Explicação:**

* `document.addEventListener('DOMContentLoaded', ...)`: garante que o script só rode depois que o HTML estiver totalmente carregado.
* `document.querySelectorAll('.fade-item')`: seleciona todos os elementos marcados com a classe `fade-item` — título do banner, botão, seta, títulos das seções, cada passo do "Como Funciona" e o card de projeto.
* `IntersectionObserver`: é uma API do navegador que "observa" elementos e avisa quando eles entram na área visível da tela (viewport), sem precisar ficar checando a posição de rolagem manualmente a cada scroll (o que seria mais custoso para o desempenho).
* `threshold: 0.15`: o elemento é considerado "visível" quando pelo menos 15% dele aparece na tela.
* Quando um `.fade-item` entra na tela, o script adiciona a classe `visivel` a ele (é essa classe que o CSS usa para animar a opacidade e a posição) e chama `observer.unobserve(entrada.target)`, parando de observar aquele elemento — a animação acontece apenas uma vez, na primeira vez que o item aparece.

---

# `style.css` — Destaques de estilo da Home

## 5. Reset e tipografia

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

* O reset remove margens e espaçamentos padrão do navegador.
* `scroll-behavior: smooth` faz os links internos (como `href="#produtos"`) rolarem suavemente até a seção, em vez de "pular" direto.
* A fonte usa uma pilha de fontes do sistema (system font stack) — mais "natural" e legível do que a fonte padrão do navegador, sem precisar carregar uma fonte externa.

## 6. Sistema de fade-in (scroll-reveal)

```css
.fade-item {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-item.visivel {
    opacity: 1;
    transform: translateY(0);
}
```

**Explicação:**

* Por padrão, todo `.fade-item` começa invisível (`opacity: 0`) e levemente deslocado para baixo (`translateY(16px)`).
* Quando o `script.js` adiciona a classe `visivel` (ao detectar que o elemento entrou na tela), o CSS anima a opacidade para 1 e a posição de volta ao lugar original, em 0.6s.
* Os `transition-delay` diferentes em elementos do hero e nos `.passo` (vistos nas seções acima) escalonam essa animação entre vários elementos, criando o efeito de entrada "em cascata".

## 7. Banner (Hero)

```css
.hero {
    position: relative;
    overflow: hidden;
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
}

.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("imagem-fundo.jpg");
    background-size: cover;
    background-position: center;
    z-index: 0;
}

.hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(15, 42, 74, 0.55),
        rgba(15, 42, 74, 0.65)
    );
    z-index: 1;
}

.hero-conteudo {
    position: relative;
    z-index: 2;
}
```

**Explicação:**

* O banner é montado em três camadas, todas empilhadas dentro do mesmo `.hero` com `position: relative`:
  1. `.hero::before` — a imagem de fundo (uma foto de código em tela desfocada), cobrindo toda a área com `background-size: cover`.
  2. `.hero::after` — um gradiente escuro por cima da imagem, garantindo contraste suficiente para o texto branco ficar legível.
  3. `.hero-conteudo` — o texto e o botão, com `z-index: 2` para ficar por cima das duas camadas anteriores.
* `overflow: hidden` evita que a imagem de fundo "vaze" para fora dos limites da seção.

## 8. Responsivo (mobile)

```css
@media (max-width: 768px) {
    .navegacao {
        display: none;
    }

    .hero {
        min-height: 70vh;
    }

    .card-projeto {
        flex-direction: column;
    }
}
```

**Explicação:**

* Em telas de até 768px de largura, o menu de navegação é ocultado (`display: none`) — um comportamento comum em sites simples sem um menu "hambúrguer" implementado ainda.
* O banner reduz sua altura mínima, já que em telas pequenas 85vh ocuparia espaço demais.
* O card de projeto empilha a imagem sobre o conteúdo, em vez de ficarem lado a lado.

---

# Página de Login (`login.html`)

## 9. Estrutura HTML (Login)

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

* `<header class="navbar">`: cabeçalho simplificado, contendo apenas o logotipo — diferente do header da home, aqui não há navegação nem botões de acesso, já que o usuário já está no fluxo de autenticação.
* `<main class="container">`: envolve o conteúdo principal e é responsável por centralizar o cartão de login na tela, tanto na horizontal quanto na vertical.
* `<form class="login-form">`: organiza os campos de entrada.
* `<label for="...">` + `<input id="...">`: cada rótulo está associado ao seu campo pelo par `for`/`id`, o que também permite clicar no texto do rótulo para focar o campo.
* `type="email"` e `type="password"`: tipos de input nativos do HTML, que já trazem validação básica do navegador (formato de e-mail, ocultação de caracteres na senha).
* `required`: torna os dois campos obrigatórios antes do envio do formulário.
* `<button type="submit">`: envia o formulário.
* O link "Cadastre-se" no rodapé agora aponta para `registrar.html` (antes era um link vazio `#`), conectando de fato as duas páginas.

---

# Página de Cadastro (`registrar.html`)

## 10. Estrutura HTML (Cadastro)

```html
<header class="navbar">
    <div class="logo">
        <span class="logo-icon">M</span>
        <span class="logo-text">Mackenzie</span>
    </div>
</header>

<main class="container">
    <div class="register-card">
        <h1>CRIE SUA CONTA</h1>

        <form class="register-form">
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

            <button type="submit" class="btn-submit">CADASTRAR</button>
        </form>

        <div class="form-footer">
            <p>Já possui uma conta? <a href="login.html">Faça Login</a>.</p>
        </div>
    </div>
</main>
```

**Explicação:**

* A estrutura é praticamente a mesma do login (`navbar` + `container` + card + form + footer), reaproveitando o mesmo padrão visual para manter consistência entre as páginas.
* A diferença está nos campos: o cadastro adiciona `username` (nome de usuário) e `confirm-password` (confirmação de senha), além de `email` e `password`.
* Note que `registrar.html` e `login.html` reutilizam os mesmos `id`s (`email`, `password`) — isso não é um problema, pois cada um vive em um documento HTML diferente (páginas separadas), então não há conflito de IDs duplicados na mesma página.
* O link do rodapé ("Faça Login") aponta de volta para `login.html`, fechando o ciclo entre as duas páginas.
* Assim como no login, o botão principal muda de rótulo (`CADASTRAR`) para refletir a ação da página, mas mantém a mesma classe `.btn-submit` — ou seja, o mesmo estilo visual.

---

# CSS — `stylelogin.css` e `styleregistrar.css`

Os dois arquivos são quase idênticos, com pequenas diferenças de nome de classe (`.login-card`/`.login-form` de um lado, `.register-card`/`.register-form` do outro) e de `gap` entre os campos do formulário. Por isso os trechos abaixo valem para os dois, salvo indicação contrária.

## 11. Configurações gerais

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
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

* O reset remove espaçamentos padrão e aplica `box-sizing: border-box`, para que padding e borda sejam contados dentro da largura/altura definidas de cada elemento (evitando que o elemento "estoure" do tamanho esperado).
* A fonte usada aqui é `'Times New Roman'` — diferente da fonte do sistema usada na home (`style.css`), o que é uma escolha estética independente para as páginas de autenticação.
* `body` usa `display: flex; flex-direction: column; min-height: 100vh`, garantindo que o `main.container` ocupe todo o espaço vertical disponível mesmo em telas grandes, empurrando o rodapé (se houver) para baixo.

## 12. Barra superior (`navbar`) e logo

```css
.navbar {
    background-color: #0d233a;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    background-color: #2b7fff;
    color: #ffffff;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
}

.logo-text {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.5px;
}
```

**Explicação:**

* `.navbar`: fundo azul escuro (`#0d233a`), com o conteúdo centralizado — diferente do header da home, que usa `justify-content: space-between` para distribuir logo, menu e botão nas extremidades.
* `.logo-icon`: um círculo (`border-radius: 50%`) com a letra "M", centralizado tanto na horizontal quanto na vertical via Flexbox — o mesmo princípio visual do `.logo-icone` da home, mas com nome de classe e cor levemente diferentes.

## 13. Centralização do formulário

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

* Usa **Flexbox** para centralizar o cartão de login/cadastro horizontal e verticalmente dentro do espaço disponível.
* `flex: 1` faz esse container crescer para preencher o espaço restante da tela (já que `body` é `flex-direction: column`), o que é o que garante a centralização vertical mesmo em telas de alturas diferentes.

## 14. O cartão (`.login-card` / `.register-card`)

```css
.login-card,
.register-card {
    width: 100%;
    max-width: 550px;
    background-color: #ffffff;
    padding: 45px 40px;
    border: 1px solid #0d233a;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}
```

**Explicação:**

* Define o tamanho máximo (550px), fundo branco, espaçamento interno, borda fina e uma sombra suave — dando ao formulário a aparência de um "cartão" flutuando sobre o fundo cinza claro da página.
* `width: 100%` com `max-width: 550px` garante que o cartão encolha em telas pequenas, mas nunca ultrapasse 550px em telas grandes.

## 15. Campos e botão

```css
.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group input {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #000000;
    font-size: 15px;
    outline: none;
    background-color: #fcfcfc;
}

.form-group input:focus {
    border-color: #2b7fff;
    background-color: #ffffff;
}

.btn-submit {
    background-color: #0d233a;
    color: #ffffff;
    border: none;
    padding: 15px;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.2s;
}

.btn-submit:hover {
    background-color: #1e3a5f;
}
```

**Explicação:**

* `.form-group`: organiza o rótulo e o campo verticalmente, com um pequeno espaçamento entre eles.
* `.form-group input:focus`: ao clicar em um campo, a borda muda para azul (`#2b7fff`) e o fundo fica branco puro — um retorno visual claro de qual campo está ativo.
* `.btn-submit`: fundo azul escuro combinando com a navbar, texto branco em caixa alta e `cursor: pointer`, indicando que é clicável.
* `.btn-submit:hover`: escurece levemente o fundo do botão ao passar o mouse, com uma transição suave de 0.2s.

## 16. Rodapé do formulário

```css
.form-footer {
    margin-top: 25px;
    font-size: 15px;
    text-align: center;
}

.form-footer a {
    color: #0000ff;
    text-decoration: underline;
}

.form-footer a:hover {
    color: #0d233a;
}
```

**Explicação:**

* Centraliza o texto de rodapé (ex: "Ainda não possui uma conta?") e estiliza o link como um link tradicional — azul e sublinhado — mudando de cor ao passar o mouse.
* É esse link que conecta as duas páginas entre si: de `login.html` para `registrar.html` e vice-versa.

---

## Conclusão

O projeto utiliza **HTML semântico** para estruturar header, banner, seções explicativas, exemplo de projeto e os formulários de login/cadastro; **CSS** com Flexbox, pseudo-elementos e media queries para o layout, o banner em camadas, os cartões de formulário e a responsividade; e um pequeno trecho de **JavaScript** com `IntersectionObserver` para a animação de entrada dos elementos na home conforme a página é rolada.

As páginas de Login e Cadastro reaproveitam a mesma arquitetura visual entre si (navbar simples, container centralizado, cartão de formulário), o que reforça a identidade do projeto e reduz a quantidade de CSS realmente novo entre uma página e outra.
