// lesson 210
class Vehicle {
	constructor(public name: string) {}

	protected drive(): void {
		console.log('driving vehicle')
	}
	honk(): void {
		console.log('Honk')
	}
}

class Car extends Vehicle {
	constructor(public color: string, name: string) {
		super(name)
	}
	//override drive method
	protected drive(): void {
		console.log('Driving')
	}
	startDriving = () => {
		this.drive()
	}
}
const car = new Car('test', 'red')
console.log(car.name, car.color)
car.startDriving()
