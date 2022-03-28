const {
    Book
} = require('./models')

const query = {
    where: {
        author: 'Simon Sinek'
    }
}

Book.update({
        price: 180000,
        is_publish: 'true'
    }, query)
    .then(() => {
        console.log("Update Successfully!")
        process.exit()
    })
    .catch(err => {
        console.log("Update Failed:(")
    })