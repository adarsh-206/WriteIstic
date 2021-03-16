const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Blog = mongoose.model('blogModel');

router.get('/', (req, res) => {
    res.render("index", {
        viewTitle: "Insert Blog"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    var blog = new Blog();
    blog.full_name = req.body.full_name;
    blog.post_title = req.body.post_title;
    blog.post_tags = req.body.post_tags;
    blog.post_category = req.body.post_category;
    blog.blog_post = req.body.blog_post;
    blog.save((err, doc) => {
        if (!err)
            res.redirect('blog/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("index", {
                    viewTitle: "Create Blog",
                    blog: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Blog.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('blog/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("index", {
                    viewTitle: 'Update Blog',
                    blog: req.body
                });
            }
            else 
                console.log('Error during record edit : ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    Blog.find((err, docs) => {
        if (!err) {
            res.render("blog/list", {
                bloglist: docs
            });
        }
        else {
            console.log('Error in retrieving blog list :' + err);
        }
    });
});

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'full_name':
                body['full_nameError'] = err.errors[field].message;
                break;
            case 'post_title':
                body['post_titleError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("index", {
                viewTitle: "Update Blog",
                blog: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/blog/list');
        }
        else {
            console.log('Error in blog remove :' + err);
        }
    });
});

module.exports = router;