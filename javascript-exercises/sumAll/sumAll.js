const sumAll = function(a,b) {
    if (a < 0 || b < 0) return "ERROR"
    if (typeof a !== "number" || typeof b !== "number") return "ERROR"

    let min = (a > b) ? b : a
    let max = (a > b) ? a : b

    let res = 0;
    for (i = min; i <= max; i++)
        res += i;
    return res
}

module.exports = sumAll
