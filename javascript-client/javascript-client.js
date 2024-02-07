// javascript-client.js; dependencies: readline-sync, btrconsole
const btrconsole = require('btrconsole')

const logViaTS = (value) => {

    /**
     * Log via timestamp
     * @returns {`{${time}}: ${value}`}
     */

    const time = new Date().toLocaleString()
    btrconsole.out(`{${time}}: ${value}`)

}

const logVer = (version, snapshot) => {

    /**
     * Make sure "version" is a valid version (current versions: 1.0)
     */

    const validVersions = 
    {
        '1.0':'1.0.0'
    }

    if (version === validVersions['1.0']) {
        btrconsole.out(
            "Version: 1.0\nSnapshot: 0w3a\nAuthor: npmcool\nRelease Date: 7th February 2024"
        )
    } else {
        throw new ReferenceError(`Could not identify ${version} as a valid version, please try again (look at the VERSIONS.md file for more info).`)
    }

}

const modulosNumber = (number, amount) => {

    if (typeof  number === Number && typeof amount === Number) {
        const result = number % amount
        return result
    } else {
        throw new TypeError(`${number} or ${amount} is not a number, please try again`)
    }

}

module.exports = {
    logViaTS,
    logVer,
    modulosNumber
}