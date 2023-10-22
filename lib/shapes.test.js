// Declaring vaiables for the shapes within shapes we will be running tests for (all)
const {Circle, Triangle, Square} = require('./shapes');
// Circle test: type of and expected render
describe('Circle Object Test', ()=> {
    test('Will this new Circle be an object', ()=> {
        const circle = new Circle()
        expect(typeof circle).toBe('object')
    })

    test('Will this render the circle svg?', ()=> {
        const circle = new Circle('red')
        expect(circle.render()).toBe(`<circle cx="150" cy="100" r="85" fill="red" />`)
    })
    
});
// Triangle test: type of and expected render
describe('Triangle Object Test', ()=> {
    test('Will this new Triangle be an object', ()=> {
        const triangle = new Triangle()
        expect(typeof triangle).toBe('object')
    })

    test('Will this render the triangle svg?', ()=> {
        const triangle = new Triangle('blue')
        expect(triangle.render()).toBe(`<polygon points="150, 4 244, 182 56, 182" fill="blue" />`);
    })
    
});
// Square test: type of and expected render
describe('Square Object Test', ()=> {
    test('Will this new Square be an object', ()=> {
        const square = new Square()
        expect(typeof square).toBe('object')
    })

    test('Will this render the square svg?', ()=> {
        const square = new Square('purple')
        expect(square.render()).toBe(`<rect x="50" y="15" width="200" height="200" fill="purple" />`);
    })
    
});