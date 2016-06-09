const http = require('http'),
      express = require('express'),
      app = express(),
      port = (process.env.PORT || 3000);

app.all("*", function(req, res, next) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get('/', function(req, res){
    var ip = req.headers['x-forwarded-for'] || request.connection.remoteAddress,
        lang =  req.acceptsLanguages(),
        oppSys = req.headers['user-agent'].match(/\(([^)]+)\)/)[0].slice(1,-1);
        console.log(ip);
    res.end(JSON.stringify({"ipaddress": ip, "language": lang, 'OS': oppSys }));
});

app.get("*", function(req, res) {
  res.end("404!");
});

app.listen(port, function(){
    console.log("Server is listening on port *:3000");
});