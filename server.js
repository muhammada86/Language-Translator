const app = require("./index")
const port = process.env.PORT
const { translateToAllCountries } = require("./src")
const logger = require("./src/logger")

app.listen(port, () => {
    logger.log(`app listening at port ${port}`)
    translateToAllCountries()
})
