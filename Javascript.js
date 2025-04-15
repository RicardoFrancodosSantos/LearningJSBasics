class Product {
    constructor(name,price) {
        this.name=name
        this.price=price
    }

    productDetails() {
        return `O nome do produto é ${this.name} e o preço é ${this.price}`
    }
}

const socks = new Product ('Meia branca', 10.99)
const shirt = new Product ('Camisa preta', 22.99)

console.log(socks.name)
console.log(socks.price)
console.log(shirt.name)

console.log(shirt.productDetails)