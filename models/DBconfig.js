const mongoose = require('mongoose');
/* Map Global promises */
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Blog_DB', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connection created.')
    }
    else {
        console.log('Connection failed: : ' + err)
    }
});

require('./blog.model');
