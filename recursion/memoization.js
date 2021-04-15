/**
 * Calculate Fibonacci Sequence recursively
 * @param {Number} n - Number to calculate fibonacci sequence on
 * @returns result of fibonacci sequence for 'n'
 */
const fibonacci = (n = Number) => {
    if (n === 0) return 1;
    if (n === 1) return 1;
    return fibonacci(n - 2) + fibonacci(n - 1);
};

/**
 * Calculate Fibonacci Sequence recursively using memoization
 * @param {Number} n - Number to calculate fibonacci sequence on
 * @returns result of fibonacci sequence for 'n'
 */
const fibMemo = (n = Number) => {
    let arr = [1, 1];
    if (n === 0) return arr[0];
    if (n === 1) return arr[1];
    let result = fibMemo(n - 2) + fibMemo(n - 1);
    arr.push(result);
    return result;
};

var fibonacciMemo = (function () {
    var memo = {};

    function f(n) {
        var value;

        if (n in memo) {
            value = memo[n];
        } else {
            if (n === 0 || n === 1) value = n;
            else value = f(n - 1) + f(n - 2);

            memo[n] = value;
        }
        console.log("memo: ", memo);
        return value;
    }

    return f;
})();

let result = fibonacciMemo(6);
console.log(result);
