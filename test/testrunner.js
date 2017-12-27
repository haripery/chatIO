var runner = require("../node_modules/qunit");
runner.run({
    code : "../app/app.js",
    tests : "test.js"
});