const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
	res.send('Hello world...');
});

app.get('/users', (req, res)=>{
	res.status(200).send({
		message:"User endpoint....",
	})
});

app.listen(PORT, ()=>{
	console.log(`server is running on port--${PORT}`)
});