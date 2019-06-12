const mongoose = require('mongoose');

const User = mongoose.model('User')

module.exports.register = (req,res,next) => {
    console.log("inside register func");

    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if(!err){
            res.send(doc)
        }
        else {
            
        }
    })
}

module.exports.retriew = (req,res,next) => {
    User.find({email: req.query.email}, (err,doc) => {
        if(!err && doc.length>0){
            res.send(doc);
        } else {
            res.send([{"error" : "86"}]);
        }
    })
}