
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });

  // zoom IP address: "165.227.47.243"
  // local IP address: "10.0.2.15"
  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log(`Successfully connected to game server`)
  });

  conn.on("data", (data) => {
    console.log(`data: ${data}`)
  });

  conn.on("close", (data) => {
    console.log(`Server closed.`)
  });
  return conn;
};


module.exports = {
  net, 
  connect, 
};
