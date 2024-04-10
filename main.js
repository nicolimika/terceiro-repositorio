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


const contadores[0].textContent = calculaTempo(tempoObjetivo1) ;

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