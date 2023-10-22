const {Circle} = require('./shapes');

describe('Circle Object Test', ()=> {
    test('Will this new Circle be an object', ()=> {
        const circle = new Circle()
        expect(typeof circle).toBe('object')
    })

    test('Will this render the circle svg?', ()=> {
        const circle = new Circle('red')
        expect(circle.render()).toBe(`<circle cx="150" cy="100" r="80" fill="red" />`)
    })
    
})