
const person1 ={id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
const person2 ={id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
const person3 = person1;
console.log(`person1 = person2 is ${person1 == person2}`);
console.log(`"123" == 123 is ${"123" == 123}`);
console.log(`"123" === 123 is ${"123" === 123}`);
console.log(`person1 = person3 is ${person1 == person3}`);
console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${
   JSON.stringify(person1) === JSON.stringify(person2) }`);
console.log(JSON.stringify(person1));
console.log(person1.toString());
console.log(`name of person1 is ${person1.name}`);
console.log(`person1 lives in city ${person1.address.city}`);
Object.keys(person1).forEach(k => console.log(k));//array of the object keys
Object.values(person1).forEach(v => console.log(v));//array of the object values
Object.entries(person1).forEach(e => console.log(e));//array of arrays - [key, value];
console.log(Object.entries(person1));

function createAddress(city, street){
   //{city: city, street: street}  <=>  {city, street}
   return {city: city, street: street};
}
function createPerson(id, name, address){
   return {id, name, address};
}
const persons = [
   createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
   createPerson(124, "Olya", createAddress("Rehovot", "Pr. Plaut")),
   createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
]



