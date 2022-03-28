const {
    Book
} = require('./models')

Book.create({
    name: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    price: 175500,
    is_publish: true

}).then(res => console.log(res))

Book.create({
    name: 'Segala Galanya Amyar',
    author: 'Mark Manson',
    price: 111000,
    is_publish: false

}).then(res => console.log(res))

Book.create({
    name: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    price: 54400,
    is_publish: false

}).then(res => console.log(res))

Book.create({
    name: 'Novel Bulan',
    author: 'Tere Liye',
    price: 76000,
    is_publish: true

}).then(res => console.log(res))

Book.create({
    name: 'You Do you',
    author: 'Fellexandro Ruby',
    price: 102400,
    is_publish: true

}).then(res => console.log(res))

Book.create({
    name: 'Start with Why',
    author: 'Simon Sinek',
    price: 80000,
    is_publish: false

}).then(res => console.log(res))