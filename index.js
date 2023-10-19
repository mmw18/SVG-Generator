const inquirer = require('inquirer');
const colorName = require('color-name');
const {Triangle, Circle, Square} = require('./lib/shapes');


function main() {
    inquirer.createPromptModule([
    {
        type: 'input',
        message: 'Enter text for your Logo, up to 3 letters',
        name: 'logoText',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        message: 'Please enter your text-color preference, in keywords or hexadecimal number',
        name: 'textColor'
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
        name: 'shapeColor'
    },
])
.then ((answers) => {
    const {text, textColor, shape, shapeColor} = answers;
    // ensure all color input's are changed to hexidecimal
    const newShapeColor = convertColor(shapeColor);
    // Creating the completed shape instance, based on user's input
    const completedShape = baseShape(shape, newShapeColor);

    // Generate a SVG with user's input 
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${shape.render()}
          <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;

        // Write the SVG to a file names 'logo.svg'
        fs.writeFileSync('logo.svg', svg);
        console.log(chalk.green('Generated logo.svg'));
      });
}


/* Function to form the baseShape of the logo, using the user's input of
shape and shape's color */
function baseShape(shape, color) {
    switch (shape) {
        case 'circle':
            return new Circle(color);
        case 'triangle':
            return new Triangle(color);
        case 'square':
            return new Square(color);
        default: //code to be used if none of the prior cases have been defined
            throw new Error('Invalid shape choice');
    }
}

// Function to ensure user can input both keyword and hexidecinal values for color
function convertColor(input) {
    // If the user's input can be located w/ colorName (it's not hexidecimal), we use color-name to change 
    if (colorName[input]) {
      return `#${colorName[input].join('')}`;
    }
    return input; // Returning the input if it's already a hexadecimal
  }

  main();
