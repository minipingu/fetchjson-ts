//lesson 195
const profile = {
	name: 'John',
	age: 30,
	coords: { latitude: 0, longitude: 0 },
	setAge(age: number): void {
		this.age = age
	},
}

const { age, name }: { age: number; name: string } = profile

const {
	coords: { latitude, longitude },
}: { coords: { latitude: number; longitude: number } } = profile
