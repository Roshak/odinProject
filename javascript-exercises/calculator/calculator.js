function add (a, b) {
	return a + b;	
}

function subtract (a,b) {
	return a - b;
}

function sum (a) {
	let res = 0;
	a.map(c => res += c);
	return res;
}

function multiply (a) {
	let res = 0;
	a.map(c => (res === 0) ? res = c : res *= c);
	return res;
}

function power(b, e) {
	return Math.pow(b, e);	
}

function factorial(a) {
	let res = 1
	for (i = 1; i<= a; i++) {
		res *= i;
	}
	return res;
}
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}