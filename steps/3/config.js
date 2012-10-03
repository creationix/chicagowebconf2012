var root = __dirname + "/public";
var home = process.env.HOME;
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
  },
  {
    packagePath: "./plugins/tty.js",
    command: "/usr/local/bin/luvit",
    args: [],
    options: {
      name: "xterm-color",
      cols: 80, rows: 30,
      cwd: home,
      env: {
        HOME: home
      }
    }
  }
];