require('./models/DBconfig');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const hbs = require('hbs');

const blogController = require('./controllers/blogController');
const partials_path = path.join(__dirname, "/views/blog");

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

// file static path
app.use('/static', express.static(path.join(__dirname, 'assets/')));

app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
//app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/templates/' }));
app.set('view engine', 'hbs');
hbs.registerPartials(partials_path);

app.listen(3000, () => {
    console.log('SERVER is listening on PORT 3000');
});

app.get("/", (req, res) => {
    res.render("index");
});

app.use('/blog', blogController);