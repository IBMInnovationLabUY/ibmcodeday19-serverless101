/**
 * Save all Watson Assistant returned object to a MongoDB instance
 * for future analysis.
 *
 * @param {Object} input The text message to send to Watson
 * @param {Object} output The return message from Watson
 * @param {Object} intents The recognized intent based on user's knowledge base
 * @param {Object} entities The list of recognized entities based on user's knowledge base
 * @param {Object} context The context managed by Watson
 * @returns {Object} Returns the object
 */
const MongoClient = require('mongodb').MongoClient

async function main(params) {
    const client = await MongoClient.connect('', { useNewUrlParser: true })
        .catch(err => console.error(err))

    if (!client) {
        return "Error"
    }

    try {
        const db = client.db('')
        const collection = db.collection('')
        collection.insertOne(params, (err, _) => {
            if (err) {
                return err
            } else {
                return params
            }
        })
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}


exports.main = main
