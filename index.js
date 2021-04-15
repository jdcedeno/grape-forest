const { unDirUnW, unDirWei } = require("./examples");
const makeGraph = require("./create-G");

console.log("unDirUnW: ", unDirUnW);
console.log("unDirWei: ", unDirWei);

let adjList = makeGraph(unDirUnW);
console.log(adjList);
