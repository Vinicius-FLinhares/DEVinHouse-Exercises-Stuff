setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}

let myPromisse = new Promise((myResolve)=>{
        setTimeout(myResolve("I love You !!!"),3000);
});

myPromisse.then((result)=>{
        console.log(result);
})