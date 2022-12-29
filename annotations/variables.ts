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
