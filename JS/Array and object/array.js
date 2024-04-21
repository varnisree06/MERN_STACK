/** NoN Primitive Datatype in JS
 * 1> Array
 * 2> Object
 * **/

/**
 * Identifiers
 *  - Set of Rules to Keep Naming
 *
 * Vaild Identifier
 *  - firstname ✅
 *  - $firstname ✅
 *  - _firstname ✅
 *  - Firstname ✅
 *  - firstname15 ✅
 *
 * Invaild Identifier
 *  - 15firstname ❌
 *  - firstname 15 ❌
 *
 *  Bulit in Method
 * - typeof() - type
 * - parseInt() - String Into Int
 * - Math.random()
 *
 *
 * What is Array ??
 *  - Sequence of Items [ number , String , ... ]
 *
 * 1. How Create an Array - []
 *                   1 , 2 , 3 , 4,5
 *  - let myArray = [1,2,3,true,"Car"]
 *                   0 ,1,2,3 ,4      -> index Starting from Zero
 * 2. How to Access an Element in Array
 *  - by index : console.log(myArray[2])
 *
 * 3. How to Modify an Element in an Array
 *  - by index : myArray[2] = 4
 *
 * 4. How to Find Length
 *  - console.log(myArray.length)
 *
 * 5. How to Add a New ELement in a Array [ Array Method : push]
 *  - console.log(myArray.push(5)) // Alway Element will be Added at Last
 *
 * 6. How to Delete a Element in an Array [ Array Method : pop]
 *  - console.log(myArray.pop())  // Alway Element will be Removed at Last
 *
 * 7. What all Value can i Have in Array
 *  - int , float
 *  - string
 *  - Bool
 *  - Null
 *  - undef
 *
 *  - Array
 *  - object
 * 
 * Object
 *  - IS A COLLECTION OF PROPERTIES
 *
 * 1. How to Create a Object
 *  - {} --> {key : value} pair
 *
 * 2. Asscessing the Elements in Object
 *   - Dot Notation : console.log(person.names, person.age)
 *   - Bracket Notation : console.log(person["names"])
 *
 * 3. what will happen when we try Asscessing non exiting Elements in Object
 *   - undefined
 *
 * 4. Object Destructing on Fly
 *  - let { names, lastname, age } = person;
 *
 * 5. How to Add Propertry in Object
 *  - Dot Notation : person.age = 3;
 *  - Bracket Notation : person["names"] = "cat"
 *
 * 6. What all Value can i Have in Propertry
 *  - int , float
 *  - string
 *  - Bool
 *  - Null
 *  - undef
 *
 *  - Array
 *  - object
 *  - function 
 */

let myArray = [1, 2, 3, true, "Car"];
console.log(myArray);

console.log(myArray[2]);

myArray[2] = 4;

console.log(myArray.length);

console.log(myArray.push(5));
console.log(myArray.pop());
console.log(myArray);

console.log("-------object-------");

let person = {
  names: "Venkat",
  lastname: "g",
  age: "2",
  number: null,
};

/**
 * let names = "Venkat"
 * let lastname = "g"
 * let age = "1"
 */

console.log(Math.random()); // 0 to 1
console.log(Math.ceil(0.8));

let { names, lastname, age } = person;

console.log(typeof names, lastname, parseInt(age));

console.log(person);

// Dot Notation
console.log(typeof person.names, person.age);

// Bracket Notation
console.log(person["names"]);

console.log(person.gender);

console.log(typeof person.names);

// Dot Notation
person.age = 3;
console.log(person.age);

// Bracket Notation
person["names"] = "cat";
console.log(person);

let person2 = {
  name: "Venkat",
  age: 1,
  num: 1.465465,
  gym: null,
  habits: ["chess", "Coding"],
  car: {
    name: "Audi",
    model: "A6",
  },
  run: function () {
    console.log("Hello From Function")
  }
};

// Dot
console.log(
  "name:" + person2.name,
  "age:" + person2.age,
  "num:" + person2.num,
  "habits:" + person2.habits[0],
  "car Object:" + person2.car.name
);

console.log(person2.run())