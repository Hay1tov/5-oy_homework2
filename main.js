class Triangle {
  // Private properties
  #leftSide;
  #rightSide;
  #width;

  constructor(a, b, c) {
    this.#leftSide = a;
    this.#rightSide = b;
    this.#width = c;
  }

  getLeftSide() {
    return this.#leftSide;
  }

  getRightSide() {
    return this.#rightSide;
  }

  getWidth() {
    return this.#width;
  }

  setSides(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
      this.#leftSide = a;
      this.#rightSide = b;
      this.#width = c;
    } else {
      console.log("Tomonlar musbat bo‘lishi kerak!");
    }
  }
}

const triangle = new Triangle(3, 4, 5);

console.log(triangle.getLeftSide());
console.log(triangle.getRightSide());
console.log(triangle.getWidth());

triangle.setSides(6, 8, 10);

console.log(triangle.getWidth());

