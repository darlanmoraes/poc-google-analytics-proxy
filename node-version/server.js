var express    = require('express'),
    bodyParser = require('body-parser'),
    query      = require('querystring'),
    request    = require('request'),
    app        = express();

/* We need this to receive form data */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Pipe request from node application to Google Analytics
 */
app.post('/*', function(req, res){
  var body = req.body;
  var url = "http://www.google-analytics.com" + req.path;
  request.post({ url: url, body: query.stringify(body) })
    .on('response', function(response) {
      response.pipe(res);
    });
});

/* Start application on port 8000 */
app.listen(8000, function () {
  console.log('Node based app listening on port 8000!');
});
