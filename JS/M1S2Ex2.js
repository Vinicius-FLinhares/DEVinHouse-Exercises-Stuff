function participar(){
    var numSat = document.getElementsByTagName('input')[2].value;
    var idadeMed = document.getElementsByTagName("input")[1].value;
    var num = document.getElementsByTagName("input")[0].value;
   
    

    var num1 = parseFloat(num);
    var num2 = num1 + 1;
    document.getElementsByTagName('input')[0].value = ""+num2+"";
    
    function adicionamedia(){
    var idade1 = parseFloat(idade);
    var iddmed1 = parseFloat(idadeMed);
    var iddmed2 = ((iddmed1)*num1+idade1)/(num2);
    document.getElementsByTagName('input')[1].value = ""+iddmed2+"";
    }
    
    function adicionasat(){
        var numSat1 = parseFloat(numSat);
        var numSat2 = numSat1 + 1;
        document.getElementsByTagName('input')[2].value = ""+numSat2+"";
    }


    
    var nome = window.prompt("digite seu nome:");
    var satis = window.prompt("1-10 para satisfação:");
    var idade = window.prompt("sua idade:");
    adicionamedia();
    var inclu = window.confirm("podemos inclui-lo nos satisfeitos?");
    if (inclu==true){alert("salvo com sucesso");
    adicionasat();
}
    else {alert("okay :(");}
} 
     