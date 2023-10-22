class Shape {
  // Constructor for Shape class that takes an optional color parameter
  constructor(color) {
    // Initializes the color property witht the provided color
    //    or gives an emplty spring if color is not provided
    this.color = color || '';
  }
// Setting color for the shape
  setColor(color) {
    this.color = color;
  }
}
// Rendering Triangle
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}
// Rendering Circle
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="40" fill="${this.color}" />`;
  }
}
// Rendering Square
class Square extends Shape {
  render() {
    return `<rect x="50" y="45" width="200" height="200" fill="${this.color}" />`;
  }
}
// Exporting each shape to be used in index.js & other files
module.exports = { Triangle, Circle, Square };

  