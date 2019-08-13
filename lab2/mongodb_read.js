/**
 * Fetch documents from MongoDB
 * 
 * @returns {Object} Returns the object
 */
const MongoClient = require('mongodb').MongoClient

async function main(params) {
    const client = await MongoClient.connect('', { useNewUrlParser: true })
        .catch(err => console.error(err))

    if (!client) {
        return 'Error'
    }

    try {
        const db = client.db('')
        const collection = db.collection('')
        collection.findOne(params, (err, doc) => {
            if (err) {
                return err
            } else {
                return doc
            }
        })
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}

exports.main = main
