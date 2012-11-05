var express = require('express')
	app = express();

app.get('/', function(req, res){
	debugger;   // breakpoint
	res.send('Hello world');
});

app.listen(3000);
console.log('Listening on port 3000');