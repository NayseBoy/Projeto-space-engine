
const botoes = document.querySelectorAll('.botao');

const personagems = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();

        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");

        personagemSelecionado.classList.remove("selecionado")

        personagems[indice].classList.add("selecionado")
    });
});

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    const videos = document.querySelectorAll("video");
    const firstVideo = videos[0];

    // Adicione um evento de clique à página para reproduzir o primeiro vídeo
    document.addEventListener("click", function playFirstVideo() {
        firstVideo.play();
        firstVideo.playbackRate = 1.5; // Define a taxa de reprodução para 1.5x
        // Remova o evento de clique após a primeira interação
        document.removeEventListener("click", playFirstVideo);
    });

    let videoAtual = firstVideo;

    buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            // Pause o vídeo atual
            videoAtual.pause();

            // Reproduza o vídeo correspondente ao botão clicado
            videos[index].play();
            videos[index].playbackRate = 1.5; // Define a taxa de reprodução para 1.5x

            // Atualize o vídeo atual para o vídeo clicado
            videoAtual = videos[index];
        });
    });
});

