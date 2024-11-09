// const city = {
//   name: 'Madrid',
//   address: {
//     street: 'Paseo de la Chopera',
//     number: '123',
//     postalCode: '28506',
//     metadata: {
//       id: 2000
//     }
//   }
// }
const city2 = {
  name: 'Barcelona',
  address: {
    street: 'Paseo de Gracias',
    number: '13',
    postalCode: '28504',
    metadata: {
      id: 200
    }
  }
}

// const street = city.address.street
// const number = city.address.number
// const postalCode = city.address.postalCode
// const name = city.name

// Destructuring de objetos 

// const { address, name, country = 'Spain' } = city

// console.log(address, name, country)

const { address: addressBcn, name: nameBcn } = city2

console.log(addressBcn, nameBcn)

const city3 = {
  name: 'Bilbao',
  address: {
    street: 'Paseo de San Mamés',
    number: '123',
    postalCode: '28501',
    metadata: {
      id: 100
    }
  }
}

const { address: { street, number, postalCode, metadata: { id }  } } = city3

// const { street, number, postalCode } = bilbAddress

console.log(street, number, postalCode, id)

const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino',
  },
  isStudent: true,
  isTeacher: false,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina',
  },
};

// first, lastName, footballclub, city, country

// ... spread operator

const { name: { firstName, lastName }, favoriteFootballTeam, hometown: { city, country }, ...patata } = data

console.log(`${firstName} ${lastName} favorite's club is ${favoriteFootballTeam}, also, he is from ${city}, ${country}`)

// Arrays

const animals = ['Dog', 'Cat', 'Fish']

// const [dog, cat, fish, cow] = animals
// console.log(dog, cat, fish, cow)

// const [, ,fish] = animals
// console.log(fish)

const [dog, ...rest] = animals

console.log(dog, rest)
console.log(patata)

const arr1 = [1, 2, 3]
const arr3 = [3, 4, 5]

const arr2 = [...arr1, ...arr3]

const obj = { test: 'test' }

const obj1 = {...obj, isStudent: false}





// Time to practice

// const arr = [1]; 
// const [a,b ] = arr

// const [a, b] = [1];

let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d);

const europeanCampuses = [
  ['madrid', 'es'],
  ['barcelona', 'es'],
  ['berlin', 'de'],
  ['paris', 'fr'],
  ['amsterdam', 'nl'],
  ['lisbon', 'pt'],
];

const [
  madrid,
  bcn,
  ...otherCampuses
] = europeanCampuses

console.log(madrid) // ['madrid', 'es']
console.log(bcn)
console.log(otherCampuses)

function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function getFullName3(user) {
  const { firstName, lastName } = user
  return `${firstName} ${lastName}`;
}

function getFullName2({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}