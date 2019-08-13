/**
 * Save all params object into a MongoDB
 * 
 * @param {Object} JSON object
 *
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
