/*
const cart = [
    {product: "Samsung S9", price: 500, qty: 2},
    {product: "Samsung S10", price: -600},
    {product: "Samsung S10", qty: -600},
    {price: 600, qty: 2},
]

- Throw error if cart isEmpty
- Throw error if price is negative value
- Throw error if price isEmpty
- Throw error if qty is negative
- Set default qty = 1 if qty isEmpty or undefined

*/

const checkout = require('./index')
describe('checkout', () => {
    it('should throw error if cart isEmpty', () => {
        const expectedValue = 'cart is not allowed to be empty'
        const cart = []

        expect(() => checkout(cart)).toThrow(expectedValue)
    })
    
    

    it('should throw error if price isEmpty', () => {
        const expectedValue = 'price is not allowed to be empty'
        const cart = [{product: "Samsung S10", qty: 6}]

        expect(() => checkout(cart)).toThrow(expectedValue)
    })

    it('should throw error if price is negative', () => {
        const expectedValue = 'price is not allowed to be negative'
        const cart = [{product: "Samsung S10", price: -600}]

        expect(() => checkout(cart)).toThrow(expectedValue)
    })


})


