	//TO DO Expres 
	



	//Set up a localhost
	//Create an instance of express
	var app = require('express')();

	var httpListeningTool = require('http').Server(app);
	app.get('/', function(request, response){
		response.send('<h1>Hello World</h1>')
	});

	httpListeningTool.listen(5000, function(){
		console.log('listening on *:5000')
	});
	
