module.exports = (n = Number, edgeList = [[]]) => {
    const isWeighted = require("./isWeighted")(edgeList);
    let adjList = Array(n);
    for (i = 0; i < adjList.length; i++) {
        adjList[i] = [];
    }
    if (isWeighted) {
        edgeList.forEach((edge) => {
            adjList[edge[0]].push([edge[1], edge[2]]);
        });
        return adjList;
    }
    if (!isWeighted) {
        edgeList.forEach((edge) => {
            adjList[edge[0]].push(edge[1]);
        });
        return adjList;
    }
};
