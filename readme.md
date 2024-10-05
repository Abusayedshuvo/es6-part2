## ES6 part 2

```
const odd = [1, 3, 5, 7, 9];
const evenNumbers = odd.map((num) => num + 1);
console.log(evenNumbers);

```

```
const arra = [33, 50, 79, 78, 90, 101, 30];
const result = arra.filter((num) => num % 10 === 0);
const result2 = arra.find((num) => num % 10 === 0);
console.log(result, result2);

```

```
const result3 = instructor
  .filter((ser) => ser.position === "senior")
  .map((ser) => ser.name);
  console.log(result3);

```

```
const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Sutorita", age: 22 },
];

const result4 = people.reduce((p, c) => p + c.age, 0);
console.log(result4);

```
