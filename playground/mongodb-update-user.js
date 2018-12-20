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
   db.collection('Users').findOneAndUpdate({
    name: 'Prajish'}, {
    $set: {
        name:'Prajish Prasad'
    },
    }, {
        returnOriginal:false
    }
    ).then((result)=>{
        console.log(result);
    });

    //findOneAndUpdate
   db.collection('Users').findOneAndUpdate({
    name: 'Prajish Prasad'}, {
    $inc: {
        age:1
    },
    }, {
        returnOriginal:false
    }
    ).then((result)=>{
        console.log(result);
    })

    //client.close();
});