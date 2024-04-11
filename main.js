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
const tempoObjetivo1 = new Date("2024-04-30T23:59:59");
const tempoObjetivo2 = new Date("2024-05-10T23:59:59");
const tempoObjetivo3 = new Date("2024-06-15T23:59:59");
const tempoObjetivo4 = new Date("2024-12-12T23:59:59");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo1){
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo1 - tempoAtual;

    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Match.floor (segundos/60);
    let horas = Match.floor (minutos/60);
    let dias = Match.floor (horas/24);

    segundos %=60;
    minutos %=60;
    horas %=24;

    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}