const { MongoClient } = require('mongodb')

// conection uri
//const uri = "mongodb://localhost:27017/aulamongodb"
const uri = "mongodb://127.0.0.1:27017/aulamongodb"

// create a new MongoClient
const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect()

        console.log("Conectando ao MongoDB!")
    } catch (err) {
        console.log(err)
    }
}

run()

module.exports = client