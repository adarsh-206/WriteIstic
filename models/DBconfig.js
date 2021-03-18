const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://writeistic:Ada2001r$h@cluster0.7v7bx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/Blog_DB', { useNewUrlParser: true }, (err) => {
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
