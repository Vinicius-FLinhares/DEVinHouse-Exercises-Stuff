import {inputnome,inputfile,inputdescricao,inputcadastro,inputimagem,newName,newImg,newDescription} from "./moduloLib.js";

   /* const inputnome = document.querySelector(".Nome");
    const inputfile = document.querySelector(".file");
    const inputdescricao = document.querySelector(".descricao");
    const inputcadastro = document.querySelector(".cadastro");
    const inputimagem = document.querySelector(".imagem");
    const newName = document.createElement("div");
    const newImg = document.createElement("img");
    const newDescription = document.createElement("div");
    */

//let inputnome.value----> pq deixar isso e tirar os da função não funciona?



function adiciona(){
   let nome = inputnome.value;
let source = inputfile.value;
let descricao = inputdescricao.value;
    inputimagem.appendChild(newName);
    newName.innerText = nome;

    inputimagem.appendChild(newImg);

    newImg.setAttribute("src",source);
    newImg.setAttribute("alt","");

    inputimagem.appendChild(newDescription);
    newDescription.innerText = descricao; 


}

inputcadastro.addEventListener("click",adiciona);

