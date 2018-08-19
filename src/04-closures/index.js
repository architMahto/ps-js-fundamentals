console.log('-------------------------------------------------');
console.log('                  04 - Closures                  ');
console.log('-------------------------------------------------');
console.log('');

let app = (function() {
	let cardId = 123;

	let getId = function() {
		return cardId;
	};

	return { getId };
})();

// app is set to the return value of the IIFE
// The IIFE includes a reference to function `getId`
// As long as the reference to the function is held onto the IIFE will persist
console.log(app.getId());

console.log('');
