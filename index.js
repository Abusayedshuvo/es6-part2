const odd = [1, 3, 5, 7, 9];
const evenNumbers = odd.map((num) => num + 1);
// console.log(evenNumbers);

// task 2
const arra = [33, 50, 79, 78, 90, 101, 30];
const result = arra.filter((num) => num % 10 === 0);
const result2 = arra.find((num) => num % 10 === 0);
// console.log(result, result2);

// task 3
const instructor = [
  { name: "Nodi", age: 28, position: "senior" },
  { name: "Akhil", age: 26, position: "junior" },
  { name: "Sobuj", age: 30, position: "senior" },
];

const result3 = instructor
  .filter((ser) => ser.position === "senior")
  .map((ser) => ser.name);
// console.log(result3);

// Task 4
const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Sutorita", age: 22 },
];

const result4 = people.reduce((p, c) => p + c.age, 0);
console.log(result4);
