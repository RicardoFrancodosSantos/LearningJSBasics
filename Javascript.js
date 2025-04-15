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

class SuperProduct extends Product {
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }
}

const tenis = new SuperProduct('Tenis vermelho', 59.90, '42')
console.log(tenis.name)
console.log(tenis.size)