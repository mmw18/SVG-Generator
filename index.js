/* Declaring variables are exported files and modules being used */
const fs = require('fs');
const inquirer = require('inquirer')
const { Triangle, Circle, Square } = require('./lib/shapes');

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


        const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${userChoice.render()}
        <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
      </svg>`;

        fs.writeFileSync(`./example/${shape}.svg`, svg);
        console.log('Generated logo.svg');
    });
}


// /* Function to form the baseShape of the logo, using the user's input of
// shape and shape's color */
// function baseShape(shape, color) {
//     switch (shape) {
//         case 'circle':
//             return new Circle(color);
//         case 'triangle':
//             return new Triangle(color);
//         case 'square':
//             return new Square(color);
//         default: //code to be used if none of the prior cases have been defined
//             throw new Error('Invalid shape choice');
//     }
// }

// Function to ensure user can input both keyword and hexidecinal values for color
function convertColor(input) {
    // If the user's input can be located w/ colorName (it's not hexidecimal), we use color-name to change 
    if (colorName[input]) {
        return `#${colorName[input].join('')}`;
    }
    return input; // Returning the input if it's already a hexadecimal
}

main();
