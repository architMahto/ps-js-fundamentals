console.log('-------------------------------------------------');
console.log('             08 - constructor function            ');
console.log('-------------------------------------------------');
console.log('');

function Car(id) {
	this.carId = id;
	this.start = function () {
		console.log('start: ' + this.carId);
	};
}

let vehicle = new Car(123);
vehicle.start();

console.log();
