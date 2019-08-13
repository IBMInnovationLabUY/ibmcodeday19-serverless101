/**
 * Print a Hello World message with/without your name
 * 
 * @param String Name
 * 
 * @returns {Object} Returns a Hello message
 */

function main(params) {
    if (params && params.name) {
        return { message: `Hello ${params.name}` }
    } else {
        return { message: 'Hello World' }
    }
}

exports.main = main
