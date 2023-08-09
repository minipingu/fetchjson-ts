//primitive type

let apples = 5 // THIS IS TYPE INFERENCE, you dont need tell the type
let speed: string = 'fast'
let hasName: boolean = false
let nothingMuch: null = null
let nothing: undefined = undefined

//built in objects
let now: Date = new Date()

//Array
let colors: string[] = ['red', 'green', 'blue', 'yellow']
let numbers: number[] = [1, 2, 3, 4]
let booleans: boolean[] = [true, false, true, false, false, false]

class Car {}

let car: Car = new Car()

// Object literal

let point: { x: number; y: number } = {
	x: 10,
	y: 20,
}

//function -> (i: number) => void <- descripton of function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i)
}

// when to use annotations
// 1) Function that return 'any' type
const json = '{"x":10, "y":20}'
// this json parse is return :any, we give anotate as same as content -> : { x: number; y: number }
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates) // {x:10, y:20}
coordinates.x //so if method or properties not exist it will error

//2) when we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let word of words) {
	if (word === 'green') foundWord = true
}

// 3) Variable whose type cannot be inferred correctly
let numberArr = [-10, -1, 12]
let numberAboveZero: boolean | number = false // the type can be boolean or number
for (let number of numberArr) {
	if (number > 0) {
		numberAboveZero = number // we fix this reassignment with or annotations, see above
	}
}
