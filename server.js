var express = require('express');
var multer  = require('multer');
var fs  = require('fs');
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = './uploads';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({storage: storage}).array('files');

app.post('/upload', urlencodedParser, function (req, res, next) {

    console.log(req)
    res.send('welcome, ' + req)

    upload(req, res, function (err) {
        if (err) {
            console.log(err)
            return res.end("Something went wrong: ");
        }

        res.end("Upload completed.");

    });

})

app.listen(3002);
