require(['architect'], function (architect) {
  architect.resolveConfig([
    {
      packagePath: "plugins/smith.js",
      debug: (/debug/).test(window.location.search),
      url: "/smith"
    },
    "plugins/tty.js",
    "plugins/gui.js"
  ], function (err, config) {
    if (err) throw err;
    window.app = architect.createApp(config);
  });
});