// 1 -  pega todos os links dentro da lista
const links = document.querySelectorAll('.list a');

// 2 - "para cada" link que você encontrou...
links.forEach((cadaLink) => {

    // 3 -  adicione o ouvinte de clique em cada um deles individualmente
    cadaLink.addEventListener('click', (evento) => {
        evento.preventDefault();
        
        // pega o texto do link que foi clicado para testar
        const nomeDoProjeto = cadaLink.textContent;
        alert('Você clicou no projeto: ' + nomeDoProjeto);
    });

});