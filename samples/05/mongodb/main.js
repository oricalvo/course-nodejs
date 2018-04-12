const {MongoClient} = require('mongodb');

main();

async function main() {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    const db = client.db("mydb");

    const contacts = db.collection("contacts");

    await contacts.insertMany([{name: "Gaila"}]);

    const docs = await contacts.find({name: "Gaila"}).toArray();
    for(const doc of docs) {
        console.log(doc);
    }

    client.close();
}

