let findTheOldest = function(people) {
    let res = 0;
    let oldest = 0;
    people.forEach((person, index) => {
        if (getAge(person) > oldest) {
            oldest = getAge(person);
            res = index;
        }
    });
    return people[res]
}

function getAge(person) {
    let yod = new Date().getFullYear();
    (person.yearOfDeath === undefined) ? yod : yod = person.yearOfDeath;
    return yod - person.yearOfBirth
}

const test = [
    {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
    },
]

console.log(findTheOldest(test))

module.exports = findTheOldest
