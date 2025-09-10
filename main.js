'use strict'
//                                                           No_1

// class Triangle {
//   #leftSide;
//   #rightSide;
//   #width;

//   constructor(a, b, c) {
//     this.#leftSide = a;
//     this.#rightSide = b;
//     this.#width = c;
//   }

//   getLeftSide() {
//     return this.#leftSide;
//   }

//   getRightSide() {
//     return this.#rightSide;
//   }

//   getWidth() {
//     return this.#width;
//   }

//   setSides(a, b, c) {
//     if (a > 0 && b > 0 && c > 0) {
//       this.#leftSide = a;
//       this.#rightSide = b;
//       this.#width = c;
//     } else {
//       console.log("Tomonlar musbat bo‘lishi kerak!");
//     }
//   }
// }

// const triangle = new Triangle(3, 4, 5);

// console.log(triangle.getLeftSide());
// console.log(triangle.getRightSide());
// console.log(triangle.getWidth());

// triangle.setSides(6, 8, 10);

// console.log(triangle.getWidth());


//                                                           No_2


// class Employee {
//   #id;
//   #firstName;
//   #lastName;
//   #salary;

//   constructor(id, firstName, lastName, salary) {
//     this.#id = id;
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#salary = salary;
//   }

//   getId() {
//     return this.#id;
//   }

//   getFirstName() {
//     return this.#firstName;
//   }

//   getLastName() {
//     return this.#lastName;
//   }

//   getSalary() {
//     return this.#salary;
//   }

//   setId(id) {
//     this.#id = id;
//   }

//   setFirstName(fName) {
//     this.#firstName = fName;
//   }

//   setLastName(lName) {
//     this.#lastName = lName;
//   }

//   setSalary(s) {
//     this.#salary = s;
//   }

//   getFullName() {
//     return `${this.#firstName} ${this.#lastName}`;
//   }

//   getAnnualSalary() {
//     return this.#salary * 12;
//   }

//   raiseSalary(percent) {
//     this.#salary += (this.#salary * percent) / 100;
//     return this.#salary;
//   }
// }

// const emp = new Employee(1, "Ali", "Karimov", 500);

// console.log(emp.getId());
// console.log(emp.getFullName());
// console.log(emp.getAnnualSalary());

// emp.raiseSalary(10);
// console.log(emp.getSalary());


//                    Darsda ishlandi                        No_3
//                    Darsda ishlandi                        No_4

//                                                           No_5


// class Shape {
//   #color;
//   #filled;

//   constructor(color = "red", filled = true) {
//     this.#color = color;
//     this.#filled = filled;
//   }

//   getColor() {
//     return this.#color;
//   }

//   setColor(color) {
//     this.#color = color;
//   }

//   isFilled() {
//     return this.#filled;
//   }

//   setFilled(filled) {
//     this.#filled = filled;
//   }
// }

// class Circle extends Shape {
//   #radius;

//   constructor(radius = 1.0, color = "red", filled = true) {
//     super(color, filled);
//     this.#radius = radius;
//   }

//   getRadius() {
//     return this.#radius;
//   }

//   setRadius(radius) {
//     this.#radius = radius;
//   }

//   getArea() {
//     return Math.PI * this.#radius * this.#radius;
//   }

//   getPerimeter() {
//     return 2 * Math.PI * this.#radius;
//   }
// }

// class Rectangle extends Shape {
//   #width;
//   #height;

//   constructor(width = 1.0, height = 1.0, color = "red", filled = true) {
//     super(color, filled);
//     this.#width = width;
//     this.#height = height;
//   }

//   getWidth() {
//     return this.#width;
//   }

//   setWidth(width) {
//     this.#width = width;
//   }

//   getHeight() {
//     return this.#height;
//   }

//   setHeight(height) {
//     this.#height = height;
//   }

//   getArea() {
//     return this.#width * this.#height;
//   }

//   getPerimeter() {
//     return 2 * (this.#width + this.#height);
//   }
// }

// const shape = new Shape("red", false);
// console.log("Shape color:", shape.getColor());
// // console.log("Shape filled:", shape.isFilled());

// const circle = new Circle(8, "yellow", true);
// console.log("\nCircle color:", circle.getColor());
// // console.log("Circle filled:", circle.isFilled());
// // console.log("Circle area:", circle.getArea().toFixed(3)); 
// // console.log("Circle perimeter:", circle.getPerimeter().toFixed(3));

// const rect = new Rectangle(5, 10, "green", true);
// console.log("\nRectangle color:", rect.getColor());
// // console.log("Rectangle area:", rect.getArea());
// // console.log("Rectangle perimeter:", rect.getPerimeter());



//                                                           No_6


// class Person {
//   #name;
//   #address;

//   constructor(name, address) {
//     this.#name = name;
//     this.#address = address;
//   }

//   getName() {
//     return this.#name;
//   }

//   setName(name) {
//     this.#name = name;
//   }

//   getAddress() {
//     return this.#address;
//   }

//   setAddress(address) {
//     this.#address = address;
//   }
// }

// class Student extends Person {
//   #faculty;
//   #year;
//   #university;

//   constructor(name, address, faculty, year, university) {
//     super(name, address);
//     this.#faculty = faculty;
//     this.#year = year;
//     this.#university = university;
//   }

//   getFaculty() {
//     return this.#faculty;
//   }

//   setFaculty(faculty) {
//     this.#faculty = faculty;
//   }

//   getYear() {
//     return this.#year;
//   }

//   setYear(year) {
//     this.#year = year;
//   }

//   getUniversity() {
//     return this.#university;
//   }

//   setUniversity(university) {
//     this.#university = university;
//   }
// }

// class Employee extends Person {
//   #salary;
//   #work;

//   constructor(name, address, salary, work) {
//     super(name, address);
//     this.#salary = salary;
//     this.#work = work;
//   }

//   getSalary() {
//     return this.#salary;
//   }

//   setSalary(salary) {
//     if (salary > 0) {
//       this.#salary = salary;
//     } else {
//       console.log("Ish haqi 0 dan katta bo'lishi kerak");
//     }
//   }

//   getWork() {
//     return this.#work;
//   }

//   setWork(work) {
//     this.#work = work;
//   }
// }

// const student = new Student("Eshmat", "Tashkent", "AI", 3, "TATU");
// console.log("Student:");
// console.log(student.getName());
// console.log(student.getAddress());
// console.log(student.getFaculty());
// console.log(student.getYear());
// console.log(student.getUniversity());

// student.setYear(4);
// console.log("Yangi yil:", student.getYear());

// const employee = new Employee("Toshmat", "Samarkand", 500, "Developer");
// console.log("\nEmployee:");
// console.log(employee.getName());
// console.log(employee.getAddress());
// console.log(employee.getSalary());
// console.log(employee.getWork());

// employee.setSalary(700);
// console.log("Yangi oylik:", employee.getSalary());


//                                                           No_7


// class Animal {
//   constructor(name, speed, weight) {
//     this.name = name;
//     this.speed = speed;
//     this.weight = weight;
//   }
// }

// class Mammal extends Animal {
//   #legs;

//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight);
//     this.#legs = legs;
//   }

//   getLegs() {
//     return this.#legs;
//   }

//   setLegs(legs) {
//     if (legs >= 0) {
//       this.#legs = legs;
//     } else {
//       console.log("( legs ) lar soni musbat bo'lishi kerak!");
//     }
//   }
// }
// class Cat extends Mammal {
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight, legs);
//   }

//   getSound() {
//     return "Meow";
//   }
// }
// class Dog extends Mammal {
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight, legs);
//   }

//   getSound() {
//     return "Woof";
//   }
// }
// class Fish extends Animal {
//   #size;

//   constructor(name, speed, weight, size) {
//     super(name, speed, weight);
//     this.#size = size;
//   }

//   getSize() {
//     return this.#size;
//   }

//   setSize(size) {
//     if (size > 0) {
//       this.#size = size;
//     } else {
//       console.log(" ( size ) musbat bo'lishi kerak!");
//     }
//   }
// }
// class Whale extends Fish {
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight, size);
//   }

//   getSound() {
//     return "Poof";
//   }
// }
// class Shark extends Fish {
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight, size);
//   }

//   getSound() {
//     return "Sheef";
//   }
// }

// const cat = new Cat("Kitty", 20, 5, 4);
// console.log("Cat:");
// console.log(cat.name);
// console.log(cat.getLegs());
// console.log(cat.getSound());

// const dog = new Dog("Rex", 30, 10, 4);
// console.log("\nDog:");
// console.log(dog.name);
// console.log(dog.getLegs());
// console.log(dog.getSound());

// const whale = new Whale("Blue Whale", 15, 30000, 25);
// console.log("\nWhale:");
// console.log(whale.name);
// console.log(whale.getSize());
// console.log(whale.getSound());

// const shark = new Shark("Great White", 40, 2000, 12);
// console.log("\nShark:");
// console.log(shark.name);
// console.log(shark.getSize());
// console.log(shark.getSound());


//                                                           No_8


// class CustomObject {
//   static customKeys(obj) {
//     return Object.keys(obj);
//   }

//   static customValues(obj) {
//     return Object.values(obj);
//   }

//   static customEntries(obj) {
//     return Object.entries(obj);
//   }
// }

// class CustomNumber {
//   static customIsInteger(num) {
//     return Number.isInteger(num);
//   }
// }

// class CustomArray {
//   static customIsArray(arr) {
//     return Array.isArray(arr);
//   }
// }

// const person = { name: "Ali", age: 20 };

// console.log(CustomObject.customKeys(person));
// console.log(CustomObject.customValues(person));
// console.log(CustomObject.customEntries(person));

// console.log(CustomNumber.customIsInteger(10));
// console.log(CustomNumber.customIsInteger(10.5));

// console.log(CustomArray.customIsArray([1, 2, 3]));
// console.log(CustomArray.customIsArray(12345));


//                Pass                                       No_9

//                    10 ni yarmi ChatGPT                    No_10

class Person {
  constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
    this.housePrice = housePrice;
    this.housesNumber = housesNumber;
    this.carPrice = carPrice;
    this.carsNumber = carsNumber;
    this.bankAccount = bankAccount;
  }

  getWealth() {
    return (this.housePrice * this.housesNumber) +
      (this.carPrice * this.carsNumber) +
      this.bankAccount;
  }
}

class RichPerson extends Person {
  constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount,
    companyPrice, companiesNumber, investigation) {
    super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
    this.companyPrice = companyPrice;
    this.companiesNumber = companiesNumber;
    this.investigation = investigation;
  }

  getWealth() {
    const inheritedWealth = super.getWealth();
    return inheritedWealth +
      (this.companyPrice * this.companiesNumber) +
      this.investigation;
  }
}

const ali = new Person(50000, 2, 20000, 1, 10000);
console.log("Ali boyligi:", ali.getWealth());

const vali = new RichPerson(100000, 3, 30000, 2, 50000, 200000, 2, 1000000);
console.log("Vali boyligi:", vali.getWealth());
