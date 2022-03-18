const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
	res.send('Hello world! from node');
});

app.get('/demo',(req,res) => {
	res.set('X-full-stack','for life');
	res.status(418);
	res.send('demo path');
	
});

app.listen(port,() => console.log('code space changes 2 example app listneing on port {port}!'));
