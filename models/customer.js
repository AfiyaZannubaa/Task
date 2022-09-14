const mongoose = require('mongoose')

const {Schema,model} = mongoose

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
   
    password: {
        type: String,
        required: true
    }
});

// Now we created a schema.
// Using this schema we will create a model 

const User = model("User", customerSchema);

module.exports = User;