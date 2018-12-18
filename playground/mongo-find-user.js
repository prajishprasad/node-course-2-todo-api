const {MongoClient, ObjectID} = require('mongodb');
const user = process.argv[2];
console.log(user);
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) =>{
    if(err){
        return console.log("Unable to connect to Mongo DB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');
    db.collection('Users').find({name:user}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos',err);
    });
    //client.close();
});