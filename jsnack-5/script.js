Creare un array di oggetti di squadre di volley.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Generare numeri random al posto delle nelle proprietà:
punti fatti e falli subiti


const volleySquad = [{nome:'Bologna', punti:, falli:,},{nome:'Cesena', punti:, falli:,},{nome:'Roma', punti:, falli:,},{nome:'Milano', punti:, falli:,},{nome:'Ortona', punti:, falli:,},{nome:'Canvas', punti:, falli:,}];

volleySquad.forEach((element)=>{
  element.punti = getRandom(90);
  element.falli = getRandom(25);
})

console.log(volleySquad);






function getRandom(max){ return Math.floor(Math.random()* max)};