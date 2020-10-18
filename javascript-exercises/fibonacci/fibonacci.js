const fibonacci = function(n) {
    if (n < 0) return `OOPS`;
    if (n == 0) return 0;
    let a = 0
    let b = 1
    let tmp 
    for (i = 1; i < n; i++) {
        tmp = b
        b = a + b
        a = tmp
    }
    return b;

}

console.log(fibonacci("2"))

module.exports = fibonacci
