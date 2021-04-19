const Graph = function () {
    this.G = {};
    this.head = 0;
    this.tail = 0;
};

Graph.prototype.addNodes = function (nodeList = [[]]) {
    for (i = 0; i < nodeList.length; i++) {
        this.G[this.tail++] = nodeList[i];
    }
};

Graph.prototype.editNode = function (fromNode, toNodes = []) {
    this.G[fromNode] = toNodes;
    return this.G;
};

Graph.prototype.createFromEdgeList = function (
    n = (Number = 0),
    isDirected = (Boolean = false),
    edgeList = [[Array]]
) {
    // reset Graph
    this.G = {};
    this.head = 0;
    this.tail = 0;
    const isWeighted = edgeList[0].length === 3 ? true : false;

    for (i = 0; i < n; i++) {
        this.G[i] = [];
    }

    for (i = 0; i < edgeList.length; i++) {
        let edge = edgeList[i];
        if (isDirected && isWeighted) {
            this.G[edge[0]].push([edge[1], edge[2]]);
        }
        if (isDirected && !isWeighted) {
            this.G[edge[0]].push(edge[1]);
        }
        if (!isDirected && isWeighted) {
            this.G[edge[0]].push([edge[1], edge[2]]);
            this.G[edge[1]].push([edge[0], edge[2]]);
        }
        if (!isDirected && !isWeighted) {
            this.G[edge[0]].push(edge[1]);
            this.G[edge[1]].push(edge[0]);
        }
    }

    this.tail = n;
};

module.exports = Graph;
