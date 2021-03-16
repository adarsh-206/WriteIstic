const mongoose = require('mongoose');
// blogSchema
var blogSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: 'Please enter full name.'
    },
    post_title: {
        type: String
    },
    post_tags: {
        type: String
    },
    post_category: {
        type: String
    },
    blog_post: {
        type: String
    }
});

// // email validation
// blogSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Please enter valid e-mail addtess.');

mongoose.model('blogModel', blogSchema);