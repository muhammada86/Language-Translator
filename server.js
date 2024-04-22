const app = require("./index")
const port = process.env.PORT || 3000
const { translateToAllCountries } = require("./src")
const logger = require("./src/logger")

const server = app.listen(port, () => {
    logger.log(`server running on ${port}`)
    translateToAllCountries()
})

process.on("SIGTERM", shutDown)
process.on("SIGINT", shutDown)

function shutDown() {
    logger.log("Received kill signal, shutting down gracefully")
    server.close(() => {
        logger.log("Closed out remaining connections")
        process.exit(0)
    })

    setTimeout(() => {
        logger.error("Could not close connections in time, forcefully shutting down")
        process.exit(1)
    }, 10000)
    setTimeout(() => connections.forEach((curr) => curr.destroy()), 5000)
}
