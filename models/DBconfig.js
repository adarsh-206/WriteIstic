const mongoose = require('mongoose');
const uri = "mongodb+srv://writeistic:<password>@cluster0.7v7bx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connection created.')
    }
    else {
        console.log('Connection failed: : ' + err)
    }
});

require('./blog.model');
