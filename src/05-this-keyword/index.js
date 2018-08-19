console.log('-------------------------------------------------');
console.log('               05 - `this` keyword               ');
console.log('-------------------------------------------------');
console.log('');

let fn = function() {
	console.log(this === window);
};

fn();

let obj = {
	carId: 123,
	getId: function() {
		console.log('this:', this);
		// `this` refers to obj
		return this.carId;
	}
};

console.log(obj.getId());

console.log('');

