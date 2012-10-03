var architect = require('architect');
var configPath = __dirname + "/config.js";

var config = architect.loadConfig(configPath);
architect.createApp(config, function (err, app) {
    if (err) throw err;
    var address = app.services.http.address();
    console.log("App listening at", address);
});