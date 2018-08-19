console.log('-------------------------------------------------');
console.log('                    03 - IIFE                    ');
console.log('-------------------------------------------------');
console.log('');

(function() {
	console.log('in function');
})();

let app = (function() {
	let carId = 123;
	console.log('in function');
	return { };
})();

console.log(app);

console.log('');
