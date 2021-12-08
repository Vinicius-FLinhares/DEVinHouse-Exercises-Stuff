
var a = window.prompt("um dia da semana","segunda");
var b =window.prompt("um nome ai","joeslei");
var c = window.prompt("um esporte","bulica");

var msg = "Hoje, " +a + ", o atleta " + b + ", conseguiu bater o record na modalidade de " + c; 
window.alert(msg);





var div = document.getElementsByTagName("body")[0];
div.innerHTML =  msg;

