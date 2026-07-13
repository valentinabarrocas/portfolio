// seleciona todos os links de categoria (pesquisa, interface, motion...)
const links = document.querySelectorAll('.project-link');

// container central onde os projetos aparecem no desktop
const viewer = document.getElementById('project-viewer');

// cacheia todos os project-content uma única vez
const todosConteudos = document.querySelectorAll('.project-content');

// breakpoint precisa bater com o @media (max-width: 1024px) do CSS
function isMobile() {
    return window.innerWidth <= 1024;
}

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // impede a página de pular pro topo

        const categoria = link.getAttribute('data-category');
        const jaEstaAtivo = link.classList.contains('active');

        // remove o estado "active" de todos os links (reseta o + / − de todos)
        links.forEach(l => l.classList.remove('active'));

        if (isMobile()) {
            // ===== mobile: acordeão =====

            todosConteudos.forEach(c => c.classList.remove('is-open'));

            if (!jaEstaAtivo) {
                link.classList.add('active');

                const projetosDaCategoria = document.querySelectorAll(
                    `.project-content[data-category="${categoria}"]`
                );

                projetosDaCategoria.forEach(projeto => {
                    projeto.classList.add('is-open');
                });
            }

        } else {
            // ===== desktop: move pro viewer central =====

            todosConteudos.forEach(conteudo => {
                const linkOriginal = document.querySelector(
                    `.project-link[data-category="${conteudo.dataset.category}"]`
                );

                if (!linkOriginal) return;

                const itemOriginal = linkOriginal.closest('.project-item');

                if (conteudo.parentElement !== itemOriginal) {
                    itemOriginal.appendChild(conteudo);
                }
            });

            if (!jaEstaAtivo) {
                link.classList.add('active');

                const projetosDaCategoria = document.querySelectorAll(
                    `.project-content[data-category="${categoria}"]`
                );

                projetosDaCategoria.forEach(projeto => {
                    viewer.appendChild(projeto);
                });
            }
        }
    });
});