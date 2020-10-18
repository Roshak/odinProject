const removeFromArray = function(...args) {
    const a = args[0]
    let res = []

    a.forEach((item) => {
        if (!args.includes(item)) {
            res.push(item)
        }
    });
    return res
}

module.exports = removeFromArray
