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
