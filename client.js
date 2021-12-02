const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log(`Successfully connected to game server`)
  });

  conn.on('connect', () => {
    conn.write("Name: ALO");
  });

  conn.on("data", (data) => {
    console.log(`data: ${data}`)
  });

  conn.on("close", (data) => {
    console.log(`Server closed.`)
  });

  // conn.on("error", (data) => {
  //   console.log(`Error`)
  // });

  return conn;
};


module.exports = {connect};
