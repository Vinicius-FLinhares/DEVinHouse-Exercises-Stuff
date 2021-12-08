const textos = ['animal','carro','humano','prédio','cadeira','objeto'];

const body = document.querySelector("body");
const article = document.querySelector("article");
body.onload = ordena;
//pq article.onload não funciona??
//window.addEventListener("DOMContentLoaded",ordena);

function ordena(){
    let textosAlfabeticamente = textos.sort();
    for(i=0;i<textosAlfabeticamente.length;i++){  
        body.innerText += textosAlfabeticamente[i] + " , ";
    }
}
