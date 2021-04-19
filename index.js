const Graph = require("./data-structures/Graph");
const log = console.log;

let graph = new Graph();

log(graph.G);

graph.createFromEdgeList(4, true, [
    [0, 1],
    [0, 3],
    [1, 3],
    [2, 1],
    [2, 3],
]);

log(graph.G);

graph.addNodes([[1, 2, 3]]);

log(graph.G);

graph.addNodes([[3, 4]]);

log(graph.G);
