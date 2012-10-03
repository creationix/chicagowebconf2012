var root = __dirname + "/public";
module.exports = [
  {
    packagePath: "./plugins/http.js",
    port: process.env.PORT,
    host: process.env.IP
  },
  {
    packagePath: "./plugins/static.js",
    folders: [ {mount: "/", root: root } ]
  },
  {
    packagePath: "./plugins/smith.js",
    debug: process.env.DEBUG,
    url: "/smith"
  }
];