const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String        
    },
    password: {
        type: String
    }
});

mongoose.model('User', userSchema);
