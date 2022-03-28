const express = require("express");
const app = express();

app.use(express.json());

const {
    Book,
    sequelize
} = require("./models");


// Create Data
app.post('/books', async (req, res) => {
    const {
        name,
        author,
        price,
        is_publish
    } = req.body

    try {
        const user = await Book.create({
            name,
            author,
            price,
            is_publish
        })

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

app.get("/books", async (_, res) => {
    const data = await Book.findAll();
    res.json(data);
});


app.get('/books/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    try {
        const users = await Book.findOne({
            where: {
                uuid
            },
        })
        return res.json(users)
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: 'Something went wrong!'
        })
    }
})


app.listen({
    port: 8080
}, async () => {
    console.log('Server up on http://localhost:8080')
    await sequelize.authenticate()
    console.log('Database Connected')
})