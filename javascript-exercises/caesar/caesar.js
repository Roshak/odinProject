const caesar = function (s, n) {
    return s
        .split('')
        .map(c => shiftChar(c, n))
        .join('');
}

function isChar(c) {
    return (c >= 65 && c <= 90) || (c >= 97 && c <= 122)
}

function shiftChar(c, n) {
    const code = c.charCodeAt(0);
    if (isChar(code)) {
        if (isChar(code + n)) {
            return String.fromCharCode(code + n);
        } else {
            return String.fromCharCode(code - 90 + 65 - 1 + n);
        }
    }
    return c;
}

console.log(caesar('z', 1));
console.log(String.fromCharCode(90))
console.log(10)

module.exports = caesar
