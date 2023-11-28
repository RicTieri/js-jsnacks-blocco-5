// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti


const volleySquad = [{nome:'Bologna', punti: 0, falli: 0,},{nome:'Cesena', punti:0, falli:0,},{nome:'Roma', punti:0, falli:0,},{nome:'Milano', punti:0, falli:0,},{nome:'Ortona', punti:0, falli:0,},{nome:'Canvas', punti:0, falli:0,}];

volleySquad.forEach((element)=>{
  element.punti = getRandom(90);
  element.falli = getRandom(25);
})

console.log(volleySquad);






function getRandom(max){ return Math.floor(Math.random()* max)};