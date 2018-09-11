console.log('-------------------------------------------------');
console.log('                     07 - bind                   ');
console.log('-------------------------------------------------');
console.log('');

let obj = {
	carId: 123,
	getId: function() {
		return this.carId;
	}
};

let newCar = { carId: 456 };
let newFn = obj.getId.bind(newCar);

console.log(newFn());

console.log('');
