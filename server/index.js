const app = require('./server')
// const config = require("./config/config")

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is connected on ${PORT}`)
})