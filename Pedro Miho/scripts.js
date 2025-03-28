function mostrarBeneficio() {
    alert("A educação é a chave para melhorar a qualidade de vida, proporcionando acesso a mais oportunidades e um futuro mais promissor.");
}

// Animar as seções quando a página for carregada
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200); // Atrasar cada animação em 200ms
    });
});
