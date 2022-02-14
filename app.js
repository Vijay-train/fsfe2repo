const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
	res.send('Hello world! from node');
});

app.listen(port,() => console.log('code space changes 2 example app listneing on port {port}!'));
