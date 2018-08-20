console.log('-------------------------------------------------');
console.log('                06 - call and apply              ');
console.log('-------------------------------------------------');
console.log('');

let obj = {
	carId: 123,
	getId: function() {
		return this.carId;
	}
};

let newCar = { carId: 456 };

// By passing in newCar as the new context into the call function,
// the call function changes the `this` context for getId
console.log(obj.getId.call(newCar));

let obj2 = {
	carId: 123,
	getId: function(prefix) {
		return prefix + this.carId;
	}
};

let newCar2 = { carId: 456 };

console.log(obj2.getId.apply(newCar2, ['ID: ']));

console.log('');
