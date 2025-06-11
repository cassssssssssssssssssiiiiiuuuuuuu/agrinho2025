// scripts.js

// Função para rolar suavemente para as seções ao clicar nos links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Rolar suavemente até a seção
        window.scrollTo({
            top: targetElement.offsetTop - 50,  // Ajusta o offset para o topo
            behavior: 'smooth'
        });
    });
});
