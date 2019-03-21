require("babel-runtime/regenerator");
require("babel-register");
require("webpack-hot-middleware/client?reload=true");
require("./app.js");
require("./main.css");
require("./index.html");

var sample = async function() {
	await console.log("kdhfhsdi");
}
debugger;
sample();
