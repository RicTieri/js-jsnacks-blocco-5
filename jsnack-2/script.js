const people = [
  {
    firstName: 'gino',
    lastName: 'de gino',
    age: '32'
  },
  {
    firstName: 'gino',
    lastName: 'de gino',
    age: '21'
  },
  {
    firstName: 'gino',
    lastName: 'de gino',
    age: '12'
  },
  {
    firstName: 'gino',
    lastName: 'de gino',
    age: '17'
  },
  {
    firstName: 'gino',
    lastName: 'de gino',
    age: '19'
  },
  {
    firstName: 'gino',
    lastName: 'de gino',
    age: '23'
  },
  {
    firstName: 'gino',
    lastName: 'de gino',
    age: '89'
  },
  {
    firstName: 'gino',
    lastName: 'de gino',
    age: '72'
  },
]

const patentabili = people.map((person) => {
  let fullName = person.firstName + ' ' + person.lastName;
  let license;
  if (person.age < 18){
    license = false;
  } else{
    license = true;
  }
  const check = {fullName: fullName, age: person.age, license: license};
  return check;
})

console.log(patentabili);