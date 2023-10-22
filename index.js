// Declaring variables for exported files and modules being used
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Main function: Getting user input, switching color and shape accordingly, creating svg & logo.svg file
function main() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter text for your Logo, up to 3 letters',
            name: 'text',
            validate: (input) => input.length <= 3,
        },
        {
            type: 'input',
            message: 'Please enter your text-color preference, in keywords or hexadecimal number',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Please choose a shape:',
            choices: ['circle', 'triangle', 'square'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Please enter your shape-color preference, in keywords or hexadecimal number',
            name: 'shapeColor',
        },
        // Changing shape and color based on user input
    ]).then(({ text, textColor, shape, shapeColor }) => {
        let userChoice;
        switch (shape) {
            case 'circle':
                userChoice = new Circle(shapeColor);
                break;
            case 'triangle':
                userChoice = new Triangle(shapeColor);
                break;
            case 'square':
                userChoice = new Square(shapeColor);
                break;
            default:
                throw new Error('Invalid shape choice');
        }
        // Declaring const that will be our created SVG
        const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${userChoice.render()}
        <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
      </svg>`;
        // Writing created svg to svg file
        fs.writeFileSync(`./example/${shape}.svg`, svg);
        console.log('Generated logo.svg');
    });
}
// Running main function
main();
