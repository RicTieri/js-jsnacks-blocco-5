const cars= [
  {brand: 'mercedes',
  model: 'slk',
  fuel:'diesel'},
  {brand: 'fiat',
  model: 'panda 4x4',
  fuel:'petrol'},
  {brand: 'opel',
  model: 'corsa',
  fuel: 'gpl'},
  {brand: 'tesla',
  model: 'model x',
  fuel:'electricity'},
  {brand: 'peugeot',
  model: '208',
  fuel:'methane'},
  {brand: 'volkswagen',
  model:'touran' ,
  fuel:'petrol'},
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
  fuel:'petrol'},
]

const dieselCars = cars.filter((car)=> car.fuel == 'diesel');
const petrolCars = cars.filter((car)=> car.fuel == 'petrol');
const otherCars = cars.filter((car)=> car.fuel !== 'diesel' && car.fuel !== 'petrol');


console.log(dieselCars);
console.log(petrolCars);
console.log(otherCars);