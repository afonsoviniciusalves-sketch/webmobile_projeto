// ===== DADOS (Aula 06: JSON.parse convertendo texto em objetos) =====
const projetosJSON = `[
    {
        "id": 1,
        "nome": "Loja Virtual",
        "descricao": "E-commerce simples com carrinho de compras.",
        "detalhes": "Loja online com vitrine de produtos, página de detalhes e carrinho de compras. Ideal para pequenos negócios que querem começar a vender pela internet.",
        "autor": "Desenvolvedor myIT",
        "prazo": "30 dias",
        "preco": "R$ 1.800",
        "tecnologias": ["HTML", "CSS", "JavaScript"]
    },
    {
        "id": 2,
        "nome": "Dashboard de Vendas",
        "descricao": "Painel visual para acompanhar métricas de vendas.",
        "detalhes": "Painel com gráficos e indicadores de vendas por período, produto e região. Ajuda a equipe comercial a tomar decisões com base em dados.",
        "autor": "Desenvolvedor myIT",
        "prazo": "45 dias",
        "preco": "R$ 2.500",
        "tecnologias": ["JavaScript", "React"]
    },
    {
        "id": 3,
        "nome": "App de Tarefas",
        "descricao": "Lista de tarefas com marcação de concluído.",
        "detalhes": "Aplicativo para organizar tarefas do dia a dia, com marcação de concluído e filtro por status. Simples de usar, pensado para estudantes.",
        "autor": "Desenvolvedor myIT",
        "prazo": "15 dias",
        "preco": "R$ 900",
        "tecnologias": ["HTML", "CSS", "JavaScript"]
    },
    {
        "id": 4,
        "nome": "Blog Pessoal",
        "descricao": "Site de blog com posts e comentários.",
        "detalhes": "Blog com página inicial, lista de publicações e área de comentários. Layout limpo, com foco na leitura e boa aparência no celular.",
        "autor": "Desenvolvedor myIT",
        "prazo": "20 dias",
        "preco": "R$ 1.100",
        "tecnologias": ["HTML", "CSS"]
    },
    {
        "id": 5,
        "nome": "API de Clima",
        "descricao": "Consumo de dados climáticos em tempo real.",
        "detalhes": "Serviço que busca a previsão do tempo de uma cidade e entrega os dados prontos para serem exibidos em qualquer site ou aplicativo.",
        "autor": "Desenvolvedor myIT",
        "prazo": "25 dias",
        "preco": "R$ 1.500",
        "tecnologias": ["JavaScript", "Node.js"]
    }
]`;

const projetos = JSON.parse(projetosJSON);

// ===== RENDERIZAÇÃO (Aula 05: map + DOM) =====
function renderizarProjetos(lista) {
    const grid = document.querySelector("#gridProdutos");

    grid.innerHTML = lista.map(function (projeto) {
        const tags = projeto.tecnologias.map(function (tec) {
            return "<li>" + tec + "</li>";
        }).join("");

        return `
            <article class="card-produto">
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
                <ul class="tecnologias">${tags}</ul>
                <button class="link-projeto" onclick="abrirProjeto(${projeto.id})">VER PROJETO</button>
            </article>
        `;
    }).join("");
}

// ===== TECNOLOGIAS ÚNICAS (Aula 05: reduce + spread) =====
function obterTecnologiasUnicas(lista) {
    return lista.reduce(function (acumulado, projeto) {
        const novas = projeto.tecnologias.filter(function (tec) {
            return !acumulado.includes(tec);
        });
        return [...acumulado, ...novas];
    }, []);
}

// ===== BOTÕES DE FILTRO (DOM: querySelector, innerHTML, style, onclick) =====
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

// ===== FILTRAR (Aula 05: filter) =====
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

// ===== ORDENAR (Aula 05: sort) =====
function ordenarPorNome() {
    projetos.sort(function (a, b) {
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
    });
    renderizarProjetos(projetos);
}

// ===== VER PROJETO (Aula 05: filter + DOM: innerHTML e style) =====
function abrirProjeto(id) {
    // filter devolve um array; o projeto escolhido é o primeiro (posição 0)
    const escolhido = projetos.filter(function (projeto) {
        return projeto.id === id;
    })[0];

    const tags = escolhido.tecnologias.map(function (tec) {
        return "<li>" + tec + "</li>";
    }).join("");

    const card = document.querySelector("#detalheCard");

    card.innerHTML = `
        <h2>${escolhido.nome}</h2>
        <p class="detalhe-autor">Desenvolvido por ${escolhido.autor}</p>
        <p>${escolhido.detalhes}</p>

        <div class="detalhe-info">
            <div>
                <span>PRAZO</span>
                <strong>${escolhido.prazo}</strong>
            </div>
            <div>
                <span>VALOR</span>
                <strong>${escolhido.preco}</strong>
            </div>
        </div>

        <ul class="tecnologias">${tags}</ul>
        <button class="link-projeto" onclick="fecharProjeto()">VOLTAR AOS PROJETOS</button>
    `;

    // esconde a lista e mostra o "post" do projeto
    document.querySelector("#listaProjetos").style.display = "none";
    document.querySelector("#detalheProjeto").style.display = "block";

    // estado inicial do zoom (pequeno e transparente)
    card.style.transform = "scale(0.9)";
    card.style.opacity = "0";

    card.offsetWidth; // força o navegador a "perceber" o estado inicial antes de animar

    // estado final do zoom — a transition do CSS anima essa mudança
    card.style.transform = "scale(1)";
    card.style.opacity = "1";
}

function fecharProjeto() {
    document.querySelector("#detalheProjeto").style.display = "none";
    document.querySelector("#listaProjetos").style.display = "block";
}

// ===== INICIALIZAÇÃO =====
montarFiltros();
renderizarProjetos(projetos);
