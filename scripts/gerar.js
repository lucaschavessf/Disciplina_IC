document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const resultado = document.getElementById('resultado');
    const esconderBotao = document.getElementById('esconder-imagem');
    const imagemGerada = document.getElementById('imagem-gerada');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Gera um número aleatório para evitar cache da imagem
        const randomNum = Math.floor(Math.random() * 1000);
        imagemGerada.src = `https://picsum.photos/400/200?random=${randomNum}`;
        resultado.classList.remove('esconder');
    });

    esconderBotao.addEventListener('click', function() {
        resultado.classList.add('esconder');
    });
}); 