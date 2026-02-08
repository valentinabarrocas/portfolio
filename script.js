// seleciona os links
const links = document.querySelectorAll('.project-link');

// cria o loop
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // impede a página de pular pro topo

        // id da imagem
        const projetoId = link.getAttribute('data-project');
        const fotoAlvo = document.getElementById(projetoId);

        // verifica link ativo
        const jaEstaAtivo = link.classList.contains('active');

        // remove - de todos os links e esconde todas as imagens
        links.forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.project-content').forEach(foto => {
            foto.style.display = 'none';
        });

        // abre a imagem se o link não tava ativo
        if (!jaEstaAtivo) {
            link.classList.add('active'); // css muda + para -
            fotoAlvo.style.display = 'block'; // foto aparece
        }
        // se já estava ativo, o código acima fecha
    });
});