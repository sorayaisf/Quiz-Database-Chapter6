const {
    Book
} = require('./models')

Book.destroy({
        where: {
            name: 'Novel Bulan'
        }
    }).then(() => {
        console.log("Berhasil dihapus")
        process.exit()
    })
    .catch(err => {
        console.log("Gagal dihapus")
    })