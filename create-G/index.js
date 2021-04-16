const createDirected = require("./createDirected");
const createUndirected = require("./createUndirected");

module.exports = (
    input = {
        n: (Number = 0),
        isDirected: (Boolean = false),
        edgeList: [[Array]],
    }
) => {
    let { n, isDirected, edgeList } = input;
    return isDirected
        ? createDirected(n, edgeList)
        : createUndirected(n, edgeList);
};
