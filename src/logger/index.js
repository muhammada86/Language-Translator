//logger.js
require("colors")
var _ = require("lodash")

var consoleLog = console.log.bind(console)

var logger = {
    log: function () {
        var tag = "[INFO]".cyan
        // arguments is an array like object with all the passed
        // in arguments to this function
        var args = _.toArray(arguments).map(function (arg) {
            if (typeof arg === "object") {
                // turn the object to a string so we
                // can log all the properties and color it
                var string = JSON.stringify(arg, null, 2)
                return tag + "  " + string.green
            } else {
                return tag + "  " + arg.green
            }
        })

        // call either console.log or noop here
        // with the console object as the context
        // and the new colored args :)
        consoleLog.apply(console, args)
    },

    error: function () {
        var args = _.toArray(arguments).map(function (arg) {
            arg = arg.stack || arg
            var name = arg.name || "[ ❌ ERROR ❌ ]"
            var log = name.yellow + "  " + arg.red
            return log
        })

        consoleLog.apply(console, args)
    }
}

module.exports = logger
