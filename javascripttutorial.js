let name = "santosh";

{
  let name = "abc";
  console.log("inside bracket " + name);
}

console.log("outside " + name);

const pi = 3.14;
//pi =6; error can't reassign const it is immutable
// console.log(pi)

// function declaration
function hellWorld() {
  //  console.log("Hello")
}

// Arrow function
helloWorldArr = () => {
  // console.log("Hello World")
};
helloWorldArr();

function square(number) {
  return number * number;
}

// console.log(square(5))

squareArr = (number) => number * number;

// console.log(squareArr(6))

//function expression
sum = function (x, y) {
  return x + y;
};

// console.log(sum(4,5))
//console.log(sum()) //NAN

// subtract = function(x,y){
//     return x-y
// }
multiply = (a, b) => a * b;
console.log(multiply(3, 4));

subtractArr = (x, y) => {
  return x - y;
};
//below kind of programming allow to reuse the code without breaking the code
function addition(x, y, z = 0) {
  return x + y + z;
}

// console.log("Addition with a default param"+addition(2,4))

function additionA(x = 0, y = 4, z = 2) {
  return x + y + z;
}

// console.log(additionA())

//Arrays
let array = [2, 3, 4, 6, 5, 7];
console.log(array);
// console.log("Length"+array.length)
// console.log(array[3])

//Objects
person = { id: 1, name: "SAN", age: 30, id: 2 };
console.log(person);
// console.log(person.name)
// console.log(person.age)
// console.log(person.id)

//Filter like where clause
nameArr = ["DIP", "ABNVH", "JFHRK", "UTOEHD", "AKSHADA"];
newArr = nameArr.filter((n) => n.length > 3);
newArrUpper = nameArr.map((n) => n.toUpperCase());
// console.log(nameArr)
// console.log(newArr)
//console.log(newArrUpper)
arrNum = [33, 42, 24, 44, 24];

minvalue1 = Math.min(87, 44, 33);
console.log("Min value ===" + minvalue1);

2; //map is used when we want to transform the element
numberArr = [2, 4, 5, 3, 8, 66, 55, 100];
//console.log(numberArr)
squareArr = numberArr.map((n) => n * n);
//console.log(squareArr)
minval = Math.min(2, 4, 6, 3, 7);
//console.log(minval)
minval = Math.min(squareArr);
//console.log(minval) //not able to upack the array.
minval = Math.min(...squareArr); //uppack using spread operator
//console.log(minval)

arr1 = [1, 2, 3, 4];
arr2 = [5, 6, 7, 8];
arr3 = [9, 10, 11, 12];
//copy arr1 to arr4
arr4 = [...arr1];
console.log("Array Copy " + arr4);
//if you use arr1 = arr4 it will give you the single copy of both the array and point to the same memory location.

obj1 = { id: 1, name: "SAN", age: 30 };
obj2 = { id: 2, name: "ABHI", age: 20 };
obj3 = { ...obj1, ...obj2 };

console.log("Object 1" + obj1);
console.log("Object 3" + obj3);

function sum(args) {
  if (Array.isArray(args)) {
    let result = 0;
    for (a of args) {
      result = result + a;
    }
    return result;
  }
}

res = sum([1, 2, 3]);
//console.log(res)

function add(...args) {
  result = 0;
  for (a of args) {
    result = result + a;
  }
  return result;
}

//console.log(add([1,2,3]))

//let firstName = "SANTOSH"
//let lastName = "SINGH"

//  console.log(`firstname =${firstName}\n last name=${lastName}`)

let emp = {
  firstName: "ABCD",
  lastName: "EFGH",
  age: 33,
};

//console.log(`emp name= ${emp.firstName + emp.lastName} ${emp.lastName}`)

let { firstName, lastName, age } = emp;
//console.log(`${firstName}+${lastName}`)
//deconstruction, destructuring
const foo = ["one", "two"];
const [red, yellow, blue, green] = foo;
//console.log(`${red+yellow+blue+green}`)

//swap using destructuting
let a = 3;
let b = 4;
//[a, b] = [b, a]

// console.log(a)
// console.log(b)

const arr = [1, 2, 3, 4];
//[arr[2],arr[1]] = [arr[1],arr[2]]
//console.log(arr)

//Reduce...
