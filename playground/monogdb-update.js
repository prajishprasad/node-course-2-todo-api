const {MongoClient, ObjectID} = require('mongodb');
const user = process.argv[2];
console.log(user);
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) =>{
    if(err){
        return console.log("Unable to connect to Mongo DB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');
   
   //findOneAndUpdate
   db.collection('Todos').findOneAndUpdate({
    _id: '5c18ce6ed3a7cc084a463799'}, {
    $set: {
        completed:true
    }
    }, {
        returnOriginal:false
    }
    ).then((result)=>{
        console.log(result);
    })

    //client.close();
});