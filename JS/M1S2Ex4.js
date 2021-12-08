function CriaLista(){
var lista = [];
for (i=0;i<=1000;i++){
    lista[i]=Math.round(1000*Math.random());
}
return lista;
}

function SomaNoIntervalo(a,b,lista){
    var sum = 0;
    for(i=a;i<=b;i++){
        sum += lista[i]
    }
    return sum;
}
function MudaDocument(lista){
if(SomaNoIntervalo(501,1000,lista)>SomaNoIntervalo(0,500,lista)){
    var img = "<img src=\"https:\/\/picsum.photos/200/300 \" alt=\"\" >"
    document.getElementsByTagName("article")[0].innerHTML = img
}
else if(Contagem(lista,100)==1){document.getElementsByTagName("article")[0].style.background="orange"}
else if(Contagem(lista,100)>1){document.getElementsByTagName("article")[0].style.background= "black"}
else{  var img2 = "<img src=\"https://via.placeholder.com/500 \" alt=\"\">"
document.getElementsByTagName("article")[0].innerHTML = img2
}
}

function reset(){
    var lista = CriaLista();
    MudaDocument(lista);
}

function Contagem(array,item){
    var counting = 0;
    for(i=0;i<=array.length;i++){  
        if(array[i]==item){counting++}
    }
    return counting;
}