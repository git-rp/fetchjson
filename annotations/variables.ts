let apple: number = 5;
let speed: string = 'Fast';
let hasname: boolean = true;
let nullvalue: null = null;
let demo = 'test';

// Build in object
let now: Date = new Date();
let now1 = new Date();
//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 1, 2];

//Classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const logNumber1 = (i: number) => {
  console.log(i);
};

// for all above we dont have to specify the annotations type . It is taken care by type inference

// When to use annotations
//1> Fuction that returns the any type
const json = '{"x":10,"y":20}';
const cor: { x: number; y: number } = JSON.parse(json);
console.log(cor);

// 2 whene we declare a variable one line and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let index = 0; index < words.length; index++) {
  if (words[index] === 'green') {
    foundWord = true;
  }
}

//3 variable whose type can not be intefferd
let numbers = [10, 2, 2];
let numbersAboveZero: boolean | number = false;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 0) {
    numbersAboveZero = numbers[index];
  }
}

// Function
