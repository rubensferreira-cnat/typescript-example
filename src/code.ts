// let animal = "horse";

// switch (animal) {
//   case "cow":
//     animal = "dairy cow";
//     break;
//   case "horse":
//     animal = "race horse";
//     break;
//   default:
//     animal = "not detected";
// }

// console.log(`${animal}
//      selected`);

// console.log(animal + "\n" + "     selected");




/**
 * No JavaScript e TypeScript existem diferentes maneiras de 
 * declarar uma função.
 * 
 * Função Tradicional, função anônima e função arrow
 */

//Função tradicional
function multiplicar (n1:number, n2:number) : number{
  return n1*n2;
}
//console.log("Função Tradicional: " + multiplicar(2,1))


//Função anônima 
let multiplicar2 =  function(n1:number, n2:number) : number{
  return n1 * n2;
}
//console.log("Função anônima: " + multiplicar2(2,1))


// Função arrow 
let multiplicar3 = (n1:number, n2:number) => n1 * n2;
//console.log("Função Arrow: " + multiplicar3(2,1))


// Exemplo de Arrow Function
let materiais = ["Hidrogenio", "helio", "litio", "berilio"];
//materiais.forEach(material => console.log("Elemento: " + material))

function map(f: (x:number) => number, a: number[]){
  let results = [];
  let i;
  for (i = 0; i != a.length; i++){
    results [i] = f(a[i]);
  }
  return results;
}

let funcao = function (x: number) {return x*x*x}
let array = [0,1,2,5,10]
let resultado = map(funcao, array);
console.log(resultado)


