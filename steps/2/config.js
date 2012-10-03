module.exports = [
  {
    packagePath: "./plugins/http.js",
    port: process.env.PORT || null,
    host: process.env.IP || null
  },
  {
    packagePath: "./plugins/static.js",
    folders: [ {mount: "/", root: __dirname + "/public" } ]
  },
  {
    packagePath: "./plugins/smith.js",
    debug: process.env.DEBUG,
    url: "/smith"
  }
];