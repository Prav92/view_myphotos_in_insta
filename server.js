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
access_token: '',
});


// START THE SERVER
// ==================================================

app.listen(8080);

console.log('server has stared!');

