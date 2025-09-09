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





//                                                           No_7
//                                                           No_8
//                                                           No_9
//                                                           No_10
