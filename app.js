const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index', {data: ""})
})

app.post('/', (req, res) => {
	console.log(req.body)
	let API = "https://mars-photos.herokuapp.com/api/v1/rovers/" + req.body.rover +"/photos?sol=" + req.body.sol +"&camera=" + req.body.camera;
	console.log(API);

	axios.get(API)
  .then(function (response) {
    res.render('index', {
		data: response.data.photos })
	})
  .catch(function (error) {
    console.log("error");
  })
})

app.listen(3000, console.log('Server Strted at http://localhost:3000'))
