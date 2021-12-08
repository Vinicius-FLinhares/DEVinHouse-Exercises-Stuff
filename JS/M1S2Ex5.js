var numero = prompt("digite um número de 0-10:");

if(numero<0){alert("fora do domínio")}
else if(numero>10){alert("fora do domímio")};


for(i=1;i<=numero;i++){
     let returnJson = data => data.json();
     let promessaGato = fetch("https://api.thecatapi.com/v1/images/search")
     .then(returnJson);
     let promessaDog = fetch("https://dog.ceo/api/breeds/image/random")
     .then(returnJson);  
     Promise.all([promessaDog,promessaGato]).then((values)=>{
          for(item of values){
               if(Object.prototype.toString.call(item) == '[object Object]') {
                    const resultado = item.message;
                    const section = "<div style=\"background-image:url('"+ resultado +"')\"></div>"
                    document.getElementById("div").insertAdjacentHTML("beforeend",section);
               }
               else{
                    const resultado = item[0].url;
                    const section = "<div style=\"background-image:url('"+ resultado +"')\"></div>"
                    document.getElementById("div").insertAdjacentHTML("beforeend",section);
               }
          }
     })}
