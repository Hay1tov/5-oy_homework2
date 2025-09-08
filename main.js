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


class Employee {
  #id;
  #firstName;
  #lastName;
  #salary;

  constructor(id, firstName, lastName, salary) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#salary = salary;
  }

  getId() {
    return this.#id;
  }

  getFirstName() {
    return this.#firstName;
  }

  getLastName() {
    return this.#lastName;
  }

  getSalary() {
    return this.#salary;
  }

  setId(id) {
    this.#id = id;
  }

  setFirstName(fName) {
    this.#firstName = fName;
  }

  setLastName(lName) {
    this.#lastName = lName;
  }

  setSalary(s) {
    this.#salary = s;
  }

  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  getAnnualSalary() {
    return this.#salary * 12;
  }

  raiseSalary(percent) {
    this.#salary += (this.#salary * percent) / 100;
    return this.#salary;
  }
}

const emp = new Employee(1, "Ali", "Karimov", 500);

console.log(emp.getId());
console.log(emp.getFullName());
console.log(emp.getAnnualSalary());

emp.raiseSalary(10);
console.log(emp.getSalary());



//                                                           No_3
//                                                           No_4
//                                                           No_5
//                                                           No_6
//                                                           No_7
//                                                           No_8
//                                                           No_9
//                                                           No_10
