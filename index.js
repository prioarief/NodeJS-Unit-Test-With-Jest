const checkout = (items) => {
    if(items.length === 0) throw new Error('cart is not allowed to be empty')
    items.map(item => {
        if(!item.price) throw new Error('price is not allowed to be empty')
        if(item.price <= 0) throw new Error('price is not allowed to be negative')
    })
}

module.exports = checkout