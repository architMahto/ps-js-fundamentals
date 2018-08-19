console.log('-------------------------------------------------');
console.log('              01 - Function Scope                ');
console.log('-------------------------------------------------');
console.log('')

function startCar(carId) {
	let message = 'Starting...';
}

function startCar2(carId) {
	let message = 'Starting...';
	let startFn = function turnKey() {
		console.log(message);
	};

	startFn();
}

// startCar(123);
// console.log(message);

startCar2(123);

console.log('');
