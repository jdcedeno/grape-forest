module.exports = (edgeList = Array) => {
    edgeList[0].length === 3
        ? console.log("isWeighted: ", true)
        : console.log("isWeighted: ", false);
    return edgeList[0].length === 3 ? true : false;
};
