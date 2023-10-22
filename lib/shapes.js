class Shape {
  constructor(color) {
    this.color = color || '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error('The render method must be implemented by subclasses.');
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}


class Circle extends Shape {
  render() {
    return `<circle cx="50" cy="50" r="40" fill="red" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="30" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };

  