const http = require('http'),
      express = require('express'),
      app = express();

app.get('*', (req, res) => {
    var ip = req.ip,
        lang =  req.acceptsLanguages(),
        oppSys = req.headers['user-agent'].match(/\(([^)]+)\)/)[0].slice(1,-1);
    res.end(JSON.stringify({"ipaddress": ip, "language": lang, 'OS': oppSys }));
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port " + listener.address().port);
});