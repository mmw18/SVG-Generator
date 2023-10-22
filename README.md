# SVG-Generator, using Node.js

## Desription

This application's purpose is to produce an SVG file based on a user's input. The generator allows for a circle, triangle, or square to be created, and the user can choose text (up to 3 characters), shape color, and text color. This is a command line application using Node.js, and all questions will be prompted and answered within the terminal. 

Before working through this project, I was unaware of what an SVG file was. Being met with many obstacles in ensuring files were created correctly caused me to become much more familar with their properties. I noticed this project to have also helped in my understanding of file organization, OOP, exporting/requiring, installing with node, and prompts/answers.

## Installation

Follow the steps below to run the SVG Generator on your local machine:

1. Clone this repository to your computer

2. Install the needed dependencies using npm: 
```
npm install inquirer@8.2.4
```

```
npm install jest
```

3. Open your new package.json to remove the upper carot (if one is present) just before the version # for Inquirer, and add the script to use Jest for testing. Your package.json should match the following: 
```
{
  "dependencies": {
    "inquirer": "8.2.4",
    "jest": "^29.7.0"
  },
  "scripts": {
    "test": "jest"
  }
}
```

## Usage

As a user of this application, I am looking to make a very simple svg logo. I have made sure to install the required dependencies, and have just ran the program in my terminal. I am asked what 3 characters I would like to be included in the middle of my svg shape. After I enter this I am asked what color I want my shape to be, and I am able to select from either a triangle, circle, or square for that color to be applied. Lastly, I am asked what color I want the logo characters to be rendered as and once I answer this, I can go to the examples folder to see my new svg. Each time I make an SVG, the file will replace the shape-labeled svg file that is coresponding. If I have just created a circle, I would see this in the circle.svg example. 

## Tests

Ensuring you have followed full installation instructions, including Jest, you can enter the following command in the integrated terminal to run the shapes.test.js file:
```
npm test
```

With this test, it is being ensured that the each shape created matches the type and properties of the user's selected shape. 


## Working Application Run-Through

[See it in use](https://drive.google.com/file/d/1Lt7kj4n7kG36_iVXlrb2QV7Dooj6z6sg/view)