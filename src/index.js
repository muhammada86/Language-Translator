/* eslint-disable no-restricted-syntax */
const axios = require("axios")
const fs = require("fs")
const EnglishJSON = require("./languages/english.json")
const countriesJSON = require("./data/countries.json")
const logger = require("./logger")

let currentIndex = 0
const baselanguage = "English"

const basePath = `${__dirname}/languages/`

async function translateNestedJson(json, targetLanguage) {
    const translatedJson = {}
    for (const key of Object.keys(json)) {
        const value = json[key]
        if (typeof value === "object") {
            // eslint-disable-next-line no-await-in-loop
            translatedJson[key] = await translateNestedJson(value, targetLanguage)
        } else {
            // eslint-disable-next-line no-await-in-loop
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(
                value
            )}`
            const response = await axios.get(url)
            // eslint-disable-next-line prefer-destructuring
            translatedJson[key] = response.data[0][0][0]
        }
    }
    return translatedJson
}

async function translateFile(toFile, targetLanguage) {
    logger.log(`Translating ${baselanguage} to ${toFile} ...`)
    try {
        const translatedJson = await translateNestedJson(EnglishJSON, targetLanguage)
        fs.writeFileSync(`${basePath}${toFile}.json`, JSON.stringify(translatedJson, null, 2))
        currentIndex += 1
        logger.log(`${countriesJSON.length - currentIndex - 1} pending translations.`)
        translateToAllCountries()
    } catch (error) {
        logger.error(error.message)
    }
}

function translateToAllCountries() {
    if (countriesJSON.length === 0) {
        logger.error(`Please provide at least one language to translate`)
        return
    }
    if (currentIndex === countriesJSON.length) {
        logger.log(`All languages has been translated successfully.`)
        return
    }
    const fileName = countriesJSON[currentIndex].name.replace(/\s/gi, "-").toLowerCase()
    const code = countriesJSON[currentIndex].code.toLowerCase()
    const existingFile = `${basePath}${fileName}.json`
    const location = `src/languages/${fileName}.json`
    if (!fs.existsSync(existingFile)) {
        translateFile(fileName, code)
    } else {
        logger.log(`${fileName} already exists on ${location}`)
        currentIndex += 1
        translateToAllCountries()
    }
}

module.exports = {
    translateToAllCountries
}
