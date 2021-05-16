const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const credentials = require('./credentials');
var bodyParser = require('body-parser');
const { stringify } = require('querystring');
const cors = require('cors');
const routes = require('./routes/index');
const injuryClaimsController = require('./injury-claims/injuryClaimsController');

const hostname = '127.0.0.1';
const port = 3000;

const dbUrl = 'mongodb+srv://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + '/' + credentials.database +
	'?retryWrites=true&w=majority';

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', routes);
app.use('/api/claims', injuryClaimsController);

app.listen(3000,function(){
  mongoose.connect(dbUrl, {useNewUrlParser: true,useUnifiedTopology: true});  
  console.log('app running on ' + port +'!');
});
