document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card-custom');

    function animarCartoes() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('card-animar');
            }, index * 500); // Delay de 500ms entre cada card

            setTimeout(() => {
                card.classList.remove('card-animar');
            }, (index * 500) + 2000); // Tempo para remover a classe (ajuste conforme necessário)
        });
    }

    setInterval(animarCartoes, cards.length * 500 + 2000); // Tempo total para o loop
    animarCartoes(); // Executar na primeira vez
});



document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.col-lg-10 .card');

    const observerOptions = {
        root: null, // Observa a entrada na viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% do card visível para ativar
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apenas ativa a animação se o card estiver na viewport
                const card = entry.target;
                card.classList.add('card-deslizar');
                observer.unobserve(card); // Para de observar depois que o card anima
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    cards.forEach((card, index) => {
        setTimeout(() => {
            observer.observe(card);
        }, index * 500); // Delay de 500ms entre cada card
    });
});