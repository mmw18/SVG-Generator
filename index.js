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

main();














// /* Declaring variables for exported files and modules being used */
// const fs = require('fs');
// const inquirer = require('inquirer');
// const { Triangle, Circle, Square } = require('./lib/shapes');
// const colorName = require('color-name'); 

// // Function to ensure user can input both keyword and hexadecimal values for color
// function convertColor(input) {
//     // If the user's input can be found with colorName (it's not hexadecimal), we use color-name to convert it
//     if (colorName[input]) {
//         return `#${colorName[input].join('')}`;
//     }
//     return input; // Returning the input if it's already a hexadecimal
// }
// // Main function to get user input, adjust shape accordingly, and produce SVG file
// function main() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             message: 'Enter text for your Logo, up to 3 letters',
//             name: 'text',
//             validate: (input) => input.length <= 3,
//         },
//         {
//             type: 'input',
//             message: 'Please enter your text-color preference, in keywords or hexadecimal number',
//             name: 'textColor',
//             // Using the convertColor function to convert the input
//             filter: convertColor,
//         },
//         {
//             type: 'list',
//             message: 'Please choose a shape:',
//             choices: ['circle', 'triangle', 'square'],
//             name: 'shape',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your shape-color preference, in keywords or hexadecimal number',
//             name: 'shapeColor',
//             // Using the convertColor function to convert the input
//             filter: convertColor,
//         },
//         // Changing shape and shape color depending on user's input
//     ]).then(({ text, textColor, shape, shapeColor }) => {
//         let userChoice;
//         switch (shape) {
//             case 'circle':
//                 userChoice = new Circle(shapeColor);
//                 break;
//             case 'triangle':
//                 userChoice = new Triangle(shapeColor);
//                 break;
//             case 'square':
//                 userChoice = new Square(shapeColor);
//                 break;
//             default:
//                 throw new Error('Invalid shape choice');
//         }
//         // Declaring SVG file to be produced, containing placeholder variables
//         const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//         ${userChoice.render()}
//         <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
//       </svg>`;
//         // Function to create SVG file, and send success message to console
//         fs.writeFileSync(`./example/${shape}.svg`, svg);
//         console.log('Generated logo.svg');
//     });
// }
// // Calling main function
// main();

