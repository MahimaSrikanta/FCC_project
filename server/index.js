const express = require('express');
const path = require('path');
const app = express();

console.log(path.join(__dirname, '../public/'));
app.use(express.static( path.join(__dirname, '../public/')));

app.listen('3000', function() {
	console.log('Server listening on port 3000')
})