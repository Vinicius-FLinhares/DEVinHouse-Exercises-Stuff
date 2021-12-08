const $body = document.querySelector("body");
let index = 1;

function criabutton(textobotao, genericFunction){
    const $button = document.createElement("button");
    $button.textContent = textobotao;
    $button.setAttribute("id",index);
    index++;

    genericFunction($button);

    $body.appendChild($button);
}

criabutton("button 1",funcao);


