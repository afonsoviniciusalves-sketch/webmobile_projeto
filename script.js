// Faz os elementos "fade-item" aparecerem conforme a página é rolada
const itens = document.querySelectorAll(".fade-item");

function mostrarItens() {
    // limite = até onde a tela já chegou (topo da tela + altura da tela)
    const limite = window.scrollY + window.innerHeight - 50;

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].offsetTop < limite) {
            itens[i].style.opacity = "1";
        }
    }
}

// Evento: toda vez que o usuário rola a página
window.onscroll = mostrarItens;

// Roda uma vez ao carregar, para mostrar o que já está na tela
mostrarItens();
