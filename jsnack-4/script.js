// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
const firstInput = ['a','b','d'];
const secondInput = [1,2,3];
const output = []; 

if (firstInput.length == secondInput.length){
  for (let i = 0; i < firstInput.length; i++) {
    output.push(firstInput[i]);
    output.push(secondInput[i]);
  }
}

console.log(output)