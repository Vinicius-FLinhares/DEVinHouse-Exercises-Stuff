//author: Vincius;
// 20/11/2021

/*function addEventoGenerico(evento, elemento, func){
    elemento.addEventListener(evento, func);
}*/

const Je = {
    get : (tag) => {
        const elemento = document.querySelector(tag);
        if(elemento==null){
            throw new Error ('o seletor: ('+tag+ ') não é válido.')
        } 
        return elemento
    }
    ,
    modificaCSS : (seletor,func) => {
        elemento = Je.get(seletor);
   
       if(typeof func == 'function'){
        func(elemento.style);
       }else if(typeof func == 'string'){
   
           elemento.style.cssText = func;
       
       }else if(typeof func == 'object'){
          
           for(let atribute in func){
           elemento.style[atribute] = func[atribute];
          }
       }
       else{throw new Error('o objeto "callback" não é apropriado')};    
   }
   ,
    AddGenericAction : (seletor, evento, callback) =>
    Je.get(seletor).addEventListener(evento, callback)
    

}