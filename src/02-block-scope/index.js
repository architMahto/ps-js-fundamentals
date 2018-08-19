console.log('-------------------------------------------------');
console.log('                02 - Block Scope                 ');
console.log('-------------------------------------------------');
console.log('');

if (5 === 5) {
	let message = 'Equal';
}

// message is only available inside of if statement
console.log(message);

if (5 === 5) {
	// var does not offer block scope
	var message = 'Equal';
}

// message is currently available because message is hoisted
console.log(message);

console.log('');
