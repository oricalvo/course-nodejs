const path = require("path");

require("./lib");

delete require.cache[path.resolve(__dirname, "./lib.js")];

require("./lib");
