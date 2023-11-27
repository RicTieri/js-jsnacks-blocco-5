const cars= [
  {brand: 'mercedes',
  model: 'slk',
  fuel:'diesel'},
  {brand: 'fiat',
  model: 'panda 4x4',
  fuel:'gasoline'},
  {brand: 'opel',
  model: 'corsa',
  fuel: 'gpl'},
  {brand: 'tesla',
  model: 'model x',
  fuel:'electricity'},
  {brand: 'peugeot',
  model: '208',
  fuel:'metan'},
  {brand: 'volkswagen',
  model:'touran' ,
  fuel:'gasoline'},
  {brand: 'audi',
  model: 'a3',
  fuel:'diesel'},
  {brand: 'dacia',
  model: 'kamiq',
  fuel:'gpl'},
  {brand: 'seat',
  model: 'ibiza',
  fuel:'diesel'},
  {brand: 'skoda',
  model: 'fabia',
  fuel:'gasoline'},
]

const dieselCars = cars.filter((car)=> car.fuel == 'diesel');
const gasolineCars = cars.filter((car)=> car.fuel == 'gasoline');
const otherCars = cars.filter((car)=> car.fuel !== 'diesel' && car.fuel !== 'gasoline');


console.log(dieselCars);
console.log(gasolineCars);
console.log(otherCars);