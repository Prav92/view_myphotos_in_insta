var express = require('express');

var app = express();
var ig = require('instagram-node').instagram();


// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources

app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
		res.render('pages/index', { grams: medias });
	});
});


ig.use({
// get access token here: http://instagram.pixelunion.net/
access_token: '2004616988.1677ed0.7563c64c4c6b4b398041a6c4741dd303',
});


// START THE SERVER
// ==================================================

app.listen(8080);

console.log('server has stared!');

