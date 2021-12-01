const {net, connect} = require("./client.js");

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) { 
    process.stdout.write('.');
    if (key === '\u0003') {
      process.exit();
    }
  }

