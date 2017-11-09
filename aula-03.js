var http = require('http');

var server = http.createServer(function(req, res){

	var cat = req.url;

	if ( cat == '/tecnologia' ) {
		res.end("<html><body>Notícias de Tecnologia</body></html>");

	} else if ( cat == '/moda' ) {
		res.end("<html><body>Notícias de Moda</body></html>");

	} else if ( cat == '/beleza' ) {
		res.end("<html><body>Notícias de Beleza</body></html>");

	} else {
		res.end("<html><body>Portal de Notícias</body></html>");	
	}	

}).listen(3000);