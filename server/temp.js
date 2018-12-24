const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        required:true,
        minlength:1,
        trim:true
    }
});

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim:true
    },
    completed: {
        type: Boolean,
        default:false
    },
    completedAt: {
        type: Number,
        default:null
    }
});

const user = new User({
    email: 'prajish.prasad@gmail.com'
});

user.save().then((doc) => {
    console.log(doc);
}, (err) => {
    console.log("error in adding user", err)
});

let todo = new Todo({
    text: 'Develop TEL'
});

todo.save().then((doc) => {
    console.log("Saved todo", doc);
}, (err) => {
    console.log("Unable to save todo");
});