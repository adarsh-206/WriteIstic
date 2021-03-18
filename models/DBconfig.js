const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Blog_DB:Ada2001r$h@writeistic.7v7bx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connection created.')
    }
    else {
        console.log('Connection failed: : ' + err)
    }
});

require('./blog.model');

mongoose.connect(process.env.MONGODB_URI || process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/Blog_DB', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connection created.')
    }
    else {
        console.log('Connection failed: : ' + err)
    }
});

require('./blog.model');
