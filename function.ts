// type inference works with function too
const add = (a: number, b: number) => {
	return a + b
}

// not giving return statement, it will give void return
const substract = (a: number, b: number) => {
	a - b
}

//those annotation format are same for function statements or anonymous functions

function divide(a: number, b: number): number {
	return a / b
}

const multiply = function (a: number, b: number): number {
	return a * b
}

//use type :void if function doesnt return anything
// or use never if never return anything
const logger = (message: string): void => {
	console.log(message)
}

//but this is rare
const throwError = (message: string): never => {
	throw new Error(message)
}

//destructuring with anotation in typescript
const forecast = {
	date: new Date(),
	weather: 'sunny',
}

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
	console.log(date, weather)
}
