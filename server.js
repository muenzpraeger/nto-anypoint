let express = require('express');
let app = express();

const port = process.env.PORT || 5001;
const https_port = process.env.HTTPS_PORT || parseInt(port) + 1;

app.get('/', function(req, res) {
  const inventory = {
    in: 11,
    odered: 35
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(inventory));
});

app.listen(port, function() {
  console.log('Example listening on ' + port);
});
