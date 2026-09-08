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

---

# Estrutura Principal do Site

## 1. Cabeçalho (`<header>`)

Responsável por apresentar a identidade visual e a navegação principal do site.

```html
<header>
    <figure>
        <span>M</span>
        <figcaption>Mackenzie</figcaption>
    </figure>

    <nav>
        <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
    </nav>

    <div>
        <a href="#cliente">CLIENTE</a>
        <a href="#dev">DEV</a>
    </div>
</header>
```

**Explicação:**

* `<figure>`: Agrupa o logotipo e o nome da marca.
* `<nav>`: Contém o menu de navegação.
* `<a>`: Cria os links para outras partes do site.
* `<div>`: Agrupa os botões de acesso para cliente e desenvolvedor.

---

## 2. Seção Principal (`Hero Section`)

Apresenta a mensagem principal do projeto e uma chamada para ação.

```html
<section>
    <h1>FAÇA PARTE DO PROJETO EXTENSIONISTA</h1>
    <p>EX...</p>
    <a href="#fale-conosco">FALE COM UM PROGRAMADOR</a>
</section>
```

**Explicação:**

* `<h1>`: Define o título principal.
* `<p>`: Apresenta uma breve descrição.
* `<a>`: Funciona como botão para entrar em contato com um programador.

---

## 3. Portfólio de Projetos

Apresenta exemplos de sites desenvolvidos.

```html
<section>
    <header>
        <h2>EXEMPLOS DE PROJETOS</h2>
    </header>

    <div>
        <article>
            <h3>SITE 1</h3>
            <div>
                <p>Linhas de texto</p>
                <p>Linhas de texto</p>
            </div>
        </article>
    </div>
</section>
```

**Explicação:**

* `<h2>`: Define o título da seção.
* `<article>`: Representa cada projeto individual.
* `<h3>`: Define o nome do projeto.
* `<p>`: Apresenta informações sobre o projeto.

---

# Página de Login

A página `login-user.html` permite que usuários cadastrados entrem em suas contas. A aparência da página é definida pelo arquivo `style-login-user.css`.

## 4. Estrutura HTML

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
                <input type="email" id="email" 
                       placeholder="seuemail@exemplo.com" required>
            </div>

            <div class="form-group">
                <label for="password">SENHA</label>
                <input type="password" id="password" 
                       placeholder="Digite sua senha" required>
            </div>

            <button type="submit" class="btn-submit">
                ENTRAR
            </button>
        </form>

        <div class="form-footer">
            <p>Ainda não possui uma conta? <a href="#">Cadastre-se</a>.</p>
        </div>
    </div>
</main>
```

**Explicação:**

* `<header>`: Contém o logotipo da página.
* `<main>`: Contém o conteúdo principal do login.
* `<form>`: Organiza os campos de entrada.
* `<label>`: Identifica cada campo.
* `<input>`: Permite inserir e-mail e senha.
* `required`: Torna o preenchimento obrigatório.
* `<button>`: Envia o formulário.
* `<a>`: Representa o link para cadastro.

---

# CSS da Página de Login

O arquivo `style-login-user.css` é responsável pela aparência e organização dos elementos.

## 5. Configurações Gerais

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
}
```

**Explicação:**

Remove espaçamentos padrão, define o modelo de caixa e estabelece a fonte utilizada na página.

---

## 6. Organização da Página

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

Utiliza **Flexbox** para centralizar o cartão de login horizontal e verticalmente.

---

## 7. Cartão de Login

```css
.login-card {
    width: 100%;
    max-width: 550px;
    background-color: #ffffff;
    padding: 45px 40px;
    border: 1px solid #0d233a;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}
```

**Explicação:**

Define o tamanho, fundo, espaçamento, borda e sombra do cartão onde o formulário está localizado.

---

## 8. Campos e Botão

```css
.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.btn-submit {
    background-color: #0d233a;
    color: #ffffff;
    padding: 15px;
    cursor: pointer;
}
```

**Explicação:**

* `.form-group`: Organiza os textos e campos verticalmente.
* `.btn-submit`: Define a aparência do botão e altera o cursor para indicar que ele pode ser clicado.

Além disso, os seletores `:focus` e `:hover` são utilizados para criar efeitos visuais quando o usuário seleciona um campo ou passa o mouse sobre o botão.

---

## Conclusão

O projeto utiliza **HTML** para estruturar as páginas e **CSS** para definir sua aparência. A página de login utiliza formulários, campos de entrada e Flexbox para criar uma interface simples e organizada.
