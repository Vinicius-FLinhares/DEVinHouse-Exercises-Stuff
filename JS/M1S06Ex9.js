const circulo = document.querySelector("#circuloPrincipal");
const linha = document.querySelector("#pontos");
let dr = 1;
let t = 0;
let points = 0;
let valor = 10;
setInterval(()=>{
    const size = {largura : parseInt(getComputedStyle(circulo).width),
        altura : parseInt(getComputedStyle(circulo).height)};
    let largura = size.largura;
    let altura = size.altura;
    if(altura > dr || largura > dr){
    circulo.style.height = (altura-dr) + "px";
    circulo.style.width = (largura-dr) + "px";
    
}   else if (altura <= dr || largura <= dr){
    circulo.style.height = 0 + "px";
    circulo.style.width = 0 + "px";
}

    linha.innerText = points.toFixed(0);
    validaSePerdeu();
    timer();
},50);

circulo.addEventListener("click", e =>{
    const size = {largura : parseInt(getComputedStyle(circulo).width),
        altura : parseInt(getComputedStyle(circulo).height)};
    let largura = size.largura;
    let altura = size.altura;
    circulo.style.height = (altura + 35) + "px";
    circulo.style.width = (largura + 35) + "px";
    dr += 0.1;
    pontua();
})

function validaSePerdeu(){
    const size = {largura : parseInt(getComputedStyle(circulo).width),
        altura : parseInt(getComputedStyle(circulo).height)};
    if(size.altura <= 61.7 || size.altura >= 500 || size.largura <= 61.7){
    const reseta = confirm(t/20+" s , "+points.toFixed(0)+" pontos : "+" Tentar novamente?")
    if(reseta){circulo.style.height = 400 + "px";
               circulo.style.width = 400 + "px";
                dr = 1;
                t = 0;
            }
    }   
}
function timer(){
    const div = document.querySelector("#timer");
    div.innerHTML = "";
    div.innerHTML = (t/20).toFixed(0) + "s";
    t++
}
function pontua(){
    const linha = document.querySelector("#pontos");
    points += valor;
    valor *= 1.05;
    linha.innerText = points.toFixed(0);
}