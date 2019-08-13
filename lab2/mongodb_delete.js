/**
 * Delete a document on MongoDB
 * 
 * @param String id
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
        collection.findOneAndDelete({ _id: params._id }, (err, res) => {
            if (err) {
                return err
            } else {
                return res
            }
        })
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}

exports.main = main
