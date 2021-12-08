const relogio = document.querySelector(".relogio");
const quinzeseg = document.querySelector(".quinzeseg");
const trintaseg = document.querySelector(".trintaseg");
const onemin = document.querySelector(".onemin");
const newtimeoptions = document.querySelector(".newtimeoptions");
const go = document.querySelector(".go");
const para = document.querySelector(".para");
const audio = new Audio('../img/beep.wav');


let intervalo;

let duracao = 15;

function setaTempoPraQuinzeSeg(){
    paraTimer();
    relogio.textContent = "00:15";
    duracao = 15;
}
function setaTempoPraTrintaSeg(){
    paraTimer();
    relogio.textContent = "00:30";
    duracao = 30;
}
function setaTempoPraOneMin(){
    paraTimer();
    relogio.textContent = "01:00";
    duracao = 60;
}
function novaOpcaoDuracao(){
    paraTimer();
    let novaduracao = prompt("novo tempor em segundos","15");
    if(novaduracao == null){novaduracao = 15;}
    duracao = parseInt(novaduracao);
    let minutos = parseInt(duracao/60,10);
    let segundos = parseInt(duracao % 60,10);
    minutos = minutos < 10 ? '0'+ minutos : minutos;
    segundos = segundos < 10 ? '0'+ segundos : segundos;
    relogio.textContent = minutos + ":" + segundos;
}

const iniciaTimer = ()=>{
    let timer = duracao;
    let minutos = 0;
    let segundos = 0;
    paraTimer();
    intervalo = setInterval(()=>{
        minutos = parseInt(timer/60,10);
        segundos = parseInt(timer % 60,10);
        
        minutos = minutos < 10 ? '0'+ minutos : minutos;
        segundos = segundos < 10 ? '0'+ segundos : segundos;
        
        relogio.textContent = minutos + ":" + segundos;
        
        if(--timer < 0){
            audio.play();
            timer = duracao;
        }
        
    },1000);
}
function paraTimer(){
    clearInterval(intervalo)
}


go.addEventListener("click",iniciaTimer);
para.addEventListener("click",paraTimer);

trintaseg.addEventListener("click",setaTempoPraTrintaSeg);
quinzeseg.addEventListener("click",setaTempoPraQuinzeSeg);
onemin.addEventListener("click",setaTempoPraOneMin);
newtimeoptions.addEventListener("click",novaOpcaoDuracao);