var lista = [];

function adiciona(){
    var inputTexto = document.getElementById("NovoItem");
    var valorEntradaTexto = inputTexto.value;

    if(valorEntradaTexto == ""){alert("digite uma tarefa.")}
    else{

    var item = new Object();
    item.nome = valorEntradaTexto;
    item.status = "não feito";
    item.prioridade = "normal";
    
    lista.push(item);
    
    inputTexto.value = "";
    
    PegaLista_AttStorage_Limpa();
    imprime();
}
}

function imprime(){
    var JsonListaStorage = localStorage.getItem("item");
    var ListaStorage = JSON.parse(JsonListaStorage);
    
    for(i=0; i<ListaStorage.length; i++){
        var novaTarefa = document.createElement("li");
        var divTextoTarefa = document.createElement("div");
        var textinho = document.createTextNode(ListaStorage[i].nome);
        var ButtonExclui = document.createElement("button");
        var ButtonEdita = document.createElement("button");
        var ButtonPinta = document.createElement("button");
        var IconEdita = document.createElement("span");
        var IconExclui = document.createElement("span");
        
        ButtonExclui.setAttribute("id",i);
        ButtonExclui.addEventListener("click",excluiItem);
        IconExclui.setAttribute("class","fa fa-trash");
        IconExclui.setAttribute("id",i);
        
        ButtonEdita.setAttribute("id",i);
        ButtonEdita.addEventListener("click",editaItem);
        IconEdita.setAttribute("class","fa fa-edit");
        IconEdita.setAttribute("id",i);

        ButtonPinta.addEventListener("click",mudaPrioridade);
        ButtonPinta.setAttribute("id",i);
        
        novaTarefa.setAttribute("class","tarefa"+i);
        divTextoTarefa.setAttribute("class","tarefa"+i);

        novaTarefa.appendChild(ButtonPinta);
        novaTarefa.appendChild(divTextoTarefa);
        divTextoTarefa.appendChild(textinho);
        novaTarefa.appendChild(ButtonEdita);
        ButtonEdita.appendChild(IconEdita); 
        novaTarefa.appendChild(ButtonExclui); 
        ButtonExclui.appendChild(IconExclui); 
        
        document.getElementById("lista").appendChild(novaTarefa);
        
        if(ListaStorage[i].status == "feito"){
            var divEmQuestao = document.getElementsByClassName("tarefa"+i)[0];
            divEmQuestao.style.textDecoration = "line-through";
        }
        if(ListaStorage[i].prioridade == "postergavel"){
            var divEmQuestao2 = document.getElementsByClassName("tarefa"+i)[0];
            divEmQuestao2.style.background = "grey";
        }
    }
}

function carregando(){
    var ListaStorage = localStorage.getItem("item");
    var JsonListaStorage = JSON.parse(ListaStorage);
    for(i=0; i<JsonListaStorage.length; i++){
        lista[i] = JsonListaStorage[i];
    }
    imprime();
}
function excluiItem(){
    var confirmacao = window.confirm("Quer mesmo excluir esta tarefa?");
    if(confirmacao){
        var indice_id = event.srcElement.id;
    
        lista.splice(indice_id,1);

        PegaLista_AttStorage_Limpa();
        imprime();
    }
}
/*function ItemFeito(){
    var indice_id = event.srcElement.id;
    var estado = lista[indice_id].status;

    if(estado == "não feito"){
        lista[indice_id].status = "feito";
    }
    else{  
        lista[indice_id].status = "não feito";
    }
    PegaLista_AttStorage_Limpa();
    imprime(); 
}*/

function mudaPrioridade(){
    var indice_id = event.srcElement.id;
    var priority = lista[indice_id].prioridade;

    if(priority == "normal"){
        lista[indice_id].prioridade = "postergavel";
    }
    else{  
        lista[indice_id].prioridade = "normal";
    }
    PegaLista_AttStorage_Limpa();
    imprime(); 
}
function editaItem(){
    var indice_id = event.srcElement.id;
    var oldTexto = lista[indice_id].nome;
    var newTexto = window.prompt("",oldTexto);
    if(newTexto === null){ lista[indice_id].nome = oldTexto;}
    else{ lista[indice_id].nome = newTexto;}
   

    PegaLista_AttStorage_Limpa();
    imprime();
}

function PegaLista_AttStorage_Limpa(){
    var listaJson = JSON.stringify(lista);
    localStorage.setItem("item",listaJson);
    document.getElementById("lista").innerHTML = "";
}

document.getElementById("NovoItem")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("salvar").click();
    }
});

