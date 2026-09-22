// ===== DADOS (Aula 06: JSON.parse convertendo texto em objetos) =====
const projetosJSON = `[
    { "nome": "Loja Virtual", "descricao": "E-commerce simples com carrinho de compras.", "tecnologias": ["HTML", "CSS", "JavaScript"], "link": "#" },
    { "nome": "Dashboard de Vendas", "descricao": "Painel visual para acompanhar métricas de vendas.", "tecnologias": ["JavaScript", "React"], "link": "#" },
    { "nome": "App de Tarefas", "descricao": "Lista de tarefas com marcação de concluído.", "tecnologias": ["HTML", "CSS", "JavaScript"], "link": "#" },
    { "nome": "Blog Pessoal", "descricao": "Site de blog com posts e comentários.", "tecnologias": ["HTML", "CSS"], "link": "#" },
    { "nome": "API de Clima", "descricao": "Consumo de dados climáticos em tempo real.", "tecnologias": ["JavaScript", "Node.js"], "link": "#" }
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

// ===== INICIALIZAÇÃO =====
montarFiltros();
renderizarProjetos(projetos);
