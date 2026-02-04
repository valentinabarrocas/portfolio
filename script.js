// seleciona os links
const links = document.querySelectorAll('.project-link');

// cria o loop
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede a página de pular pro topo

        // id da imagem
        const projetoId = link.getAttribute('data-project');
        const fotoAlvo = document.getElementById(projetoId);

        // verificação link ativo
        const jaEstaAtivo = link.classList.contains('active');

        // remove o - de todos os links e esconde todas as fotos
        links.forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.project-content').forEach(foto => {
            foto.style.display = 'none';
        });

        // abre a imagem se o link não tava ativo
        if (!jaEstaAtivo) {
            link.classList.add('active'); // O CSS muda o + para -
            fotoAlvo.style.display = 'block'; // A foto aparece
        }
        // se já estava ativo, o código acima já fechou tudo
    });
});