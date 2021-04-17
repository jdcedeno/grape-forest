const { unDirUnW, unDirWei, dirUnw, dirWei } = require("./examples");
const makeGraph = require("./graphs");

let adjList1 = makeGraph(unDirUnW);
console.log(adjList1);

let adjList2 = makeGraph(unDirWei);
console.log(adjList2);

let adjList3 = makeGraph(dirUnw);
console.log(adjList3);

let adjList4 = makeGraph(dirWei);
console.log(adjList4);
