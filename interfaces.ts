interface Reportable {
	summary(): string
}

const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `${this.name} is ${this.year}`
	},
}

const drink = {
	color: 'brown',
	carbonized: true,
	summary(): string {
		return `${this.color} is ${this.carbonized}`
	},
}

const printVehicle = (vehicle: Reportable) => {
	console.log(`Name:${vehicle.summary()}`)
}

printVehicle(oldCivic)
printVehicle(drink)
