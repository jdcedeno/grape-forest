module.exports = (
    input = {
        n: (Number = 0),
        isDirected: (Boolean = false),
        edgeList: [[Array]],
    }
) => {
    let { n, isDirected, edgeList } = input;
    let isWeighted = require("./isWeighted")(edgeList);
    if (!isDirected && !isWeighted) {
        let adjList = new Array(n);
        adjList.fill([]);
        edgeList.forEach((edge) => {
            adjList[edge[0]].push(edge[1]);
            adjList[edge[1]].push(edge[0]);
        });
        return adjList;
    }
};
