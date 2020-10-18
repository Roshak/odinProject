const snakeCase = function(s) {
    return s.toLowerCase()
    .replace(/[^0-9a-z]/gi, '')
    .split('')
    .map(x => (x === ' ' ) ? '_' : x)
    .join('') ;

}
//TODOOOOOO
module.exports = snakeCase
