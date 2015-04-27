
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/tktech',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://withfpp:tktech@ds045679.mongolab.com:45679/tktech',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}