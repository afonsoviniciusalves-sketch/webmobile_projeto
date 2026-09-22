// Anima os elementos "fade-item" quando a página carrega
const itens = document.querySelectorAll(".fade-item");

for (let i = 0; i < itens.length; i++) {
    itens[i].style.opacity = "1";
}