const enviar = document.querySelector("#enviar");
const reverse = document.querySelector("#reverse");
const color = document.querySelector("#color");
const main = document.querySelector("main");
const select = document.querySelector("select");
let i = 1;

enviar.addEventListener("click",addItem);
reverse.addEventListener("click",trocaWrap);
color.addEventListener("change",trocaCor);
select.addEventListener("change",mudaJustify);

function mudaJustify(){
    const justifyEscolhido = select.value;
    const style = main.style;
    style.justifyContent = justifyEscolhido; 
}

function addItem(){
    const  cor = color.value;
    const newItem = document.createElement("div");
    newItem.setAttribute("id",i);
    newItem.setAttribute("class","item");
    newItem.style.background = cor;
    newItem.innerText = i;
    main.appendChild(newItem);
    i++;
}
function trocaWrap(){
    //pq não consigo chamar o stile da main com ela na head??
    //por que aqui n posso colocar wrap ali em baixo tambem
    const wrap = main.style.flexWrap;
    if(wrap === "wrap"){
        main.style.flexWrap = "wrap-reverse";
    }
    else if(wrap === "wrap-reverse"){
        main.style.flexWrap = "wrap";
    }
}
function trocaCor(){
    const  cor = color.value;
    const divs = document.getElementsByClassName("item");
    for(iten of divs){
    iten.style.background = cor;
}
}

enviar.style.cursor = "pointer";
reverse.style.cursor = "pointer";;
color.style.cursor = "pointer";;
select.style.cursor = "pointer";;