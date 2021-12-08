var corDeFundo = ["#000000","#1A1A1A","#1A3D4C"];
var corDosElementosSobrepostos= ["#E6E6E6","#CCCCCC","#0D2526"];
var corDoTexto = ["white","black"];

function randomColor(array){
    var index = array.length*Math.random();
    index = Math.floor(index);
    var cor = array[index];
    return cor;
}

function MudaCor(array,tag,indice,estilo){
    var cor = randomColor(array) ;
    document.getElementsByTagName(tag)[indice]["style"][estilo] = cor;    
}


function Muda(){
    MudaCor(corDeFundo,"body",0,"background");
    MudaCor(corDosElementosSobrepostos,"article",0,"background");
    MudaCor(corDoTexto,"p",0,"color");
}
