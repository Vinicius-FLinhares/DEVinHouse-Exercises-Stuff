const $button = document.getElementById("gerador");

$button.addEventListener("click",geraMeme);

function geraMeme(){
    const txtSup = document.getElementById("superior").value;
    const txtInf = document.getElementById("inferior").value;
    const meme = document.querySelector("input[name='qualmeme']:checked").value;

    const urlMeme = `http://apimeme.com/meme?meme=${meme}&top=${txtSup}&bottom=${txtInf}`;
    const $footer = document.querySelector("footer");
    
    const imagem = document.createElement("img");
    imagem.src = urlMeme;

    $footer.innerHTML = "";
    $footer.appendChild(imagem);
}

const $superior = document.getElementById("superior");
const $inferior = document.getElementById("inferior");
const multiOpcoes =  document.querySelectorAll("input[name='qualmeme']")

for(let opcao of multiOpcoes){
    opcao.addEventListener("change", geraMeme);
}

$superior.addEventListener("change",geraMeme);
$inferior.addEventListener("change",geraMeme);
$inferior.addEventListener("Keyup",geraMeme);