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