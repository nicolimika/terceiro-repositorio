const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-conteudo");

for (let i=0; i < botoes.length; i++){
    botoes[i].onclick = function() {

        for (let j=0; j <botoes.length; j++){
            botoes[j].classList.remove("ativo");
            texto[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        botoes[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-05-10T23:59:59");
let tempoAtual = new Date ();

const contadores[0].textContent = tempoObjetivo1 - tempoAtual;
