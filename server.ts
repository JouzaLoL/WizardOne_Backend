import * as express from "express";
import * as bodyParser from "body-parser";

var app = express();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/mydb");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function () {
    console.log('! WizardOne Backend listening on port 3000')
});