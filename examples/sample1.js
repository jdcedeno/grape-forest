/**
 * export edgeList:Number[][length = 2] of a Graph with n: 5 nodes, [0-4]
 * and 4 edges. This is an undirected, unweighted, acyclic Graph
 *                          0
 *                       /     \
 *                      /       \
 *                     1         2
 *                   /   \
 *                  3     4
 */
module.exports = {
    n: 5,
    isDirected: false,
    edgeList: [
        [0, 1],
        [0, 2],
        [1, 3],
        [1, 4],
    ],
};
