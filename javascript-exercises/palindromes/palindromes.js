const palindromes = function (s) {
    let res = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let a = res.substr(0, res.length / 2);
    let b

    if (res.length % 2 !== 0)
        b = res.substr((res.length / 2) + 1, res.length - 1)
    else
        b = res.substr((res.length / 2), res.length - 1)

    b = b.split('').reverse().join('');
    
    return (a === b);
}

palindromes('Animal loots foliated detail of stool lamina.')

module.exports = palindromes
