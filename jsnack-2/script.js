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
  person.fullName = person.firstName + ' ' + person.lastName;
  if (person.age < 18){
    person.license = false;
  } else{
    person.license = true;
  }
  return person;
})

console.log(patentabili);