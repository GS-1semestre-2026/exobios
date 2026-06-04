import perguntas from "./perguntas.js";

const conteudoQuiz = document.getElementById("conteudo-quiz");

const numero = document.querySelector(".numero");
const pergunta = document.querySelector(".pergunta");
const respostas = document.querySelector(".respostas");


const conteudoResultado = document.getElementById("resultado-quiz");
const resultadoTitulo = document.querySelector(".resultado-titulo");
const resultadoSubtitulo = document.querySelector(".resultado-subtitulo");
const btnReiniciar = document.getElementById("btn-reiniciar-quiz");

let i = 0;
let acertos = 0;


function proximaPergunta(res) {
    if (res.target.getAttribute("data-correta") === "true") {
        acertos++;
    }

    if (i < perguntas.length - 1) {
        i++;
        carregarPergunta();
    }else{
        fim();
    }
}

function carregarPergunta() {
    numero.innerHTML = `${i + 1} de ${perguntas.length}`; //mostra em qual pergunta estamos
    const item = perguntas[i]; //cria um item com a pergunta atual
    pergunta.innerHTML = item.pergunta;
    respostas.innerHTML = ""; //garantir que esteja vazio

    item.respostas.forEach((resposta) => {
        const div = document.createElement("div"); //cria uma div para cada resposta

        div.innerHTML = `<button class="alternativa" data-correta="${resposta.correta}">${resposta.opcao}</button>`

        respostas.appendChild(div); //adiciona a div com a alternativa na div de respostas
    })


    document.querySelectorAll(".alternativa").forEach((item) => {
        item.addEventListener("click", proximaPergunta);
    })
}

function fim() {

    if (acertos === perguntas.length) {
        resultadoTitulo.innerHTML = `Parabéns! Você acertou todas as perguntas!`;
        resultadoSubtitulo.innerHTML = `Você realmente é especialista em agricultura espacial!`;

    }else if (acertos >= perguntas.length / 2) {
        resultadoTitulo.innerHTML = `Parabéns! Você acertou ${acertos} de ${perguntas.length} perguntas!`;
        resultadoSubtitulo.innerHTML = `Mais um pouquinho e você será um especialista!`;

    }else {
        resultadoTitulo.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
        resultadoSubtitulo.innerHTML = `Não desanime, o importante é aprender e se divertir!`;
    }
    
    conteudoQuiz.style.display = "none";
    conteudoResultado.style.display = "flex";
}

btnReiniciar.addEventListener("click", () => {
    conteudoResultado.style.display = "none";
    conteudoQuiz.style.display = "flex";
    i = 0;
    acertos = 0;
    carregarPergunta();
});

carregarPergunta();