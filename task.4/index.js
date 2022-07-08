class Car {
	constructor(engine, seats, doors, engineVolume, year) {
		this.engine = engine
		this.seats = seats
		this.doors = doors
		this.engineVolume = engineVolume
		this.year = year
	}
}

class Mercedes extends Car {
	constructor(engine, seats, doors, engineVolume, year) {
		super(engine, seats, doors, engineVolume, year)
	}
	getAllInfoCar() {
		console.log(mercedes)
	}
	signal() {
		console.log('signal')
	}
	stop() {
		console.log('stop')
	}
}
const mercedes = new Mercedes('fsad', 4, 4, 423, 2002)
mercedes.getAllInfoCar()

class Bmw extends Car {
	constructor(engine, seats, doors, engineVolume, year) {
		super(engine, seats, doors, engineVolume, year)
	}
	getAllInfoCar() {
		console.log(bmw)
	}
	signal() {
		console.log('bmwsignal')
	}
	stop() {
		console.log('stop')
	}
}

const bmw = new Bmw('bmw', 4, 4, 423, 2002)
bmw.getAllInfoCar()
bmw.signal()
bmw.stop()

class Audi extends Car {
	constructor(engine, seats, doors, engineVolume, year, start) {
		super(engine, seats, doors, engineVolume, year)
		this.#start = start
	}
	#start
	getStart() {
		return this.#start
	}
	getAllInfoCar() {
		console.log(audi)
	}
	signal() {
		console.log('audisignal')
	}
	stop() {
		console.log('stop')
	}
}

const audi = new Audi('audi', 4, 4, 423, 2002, 'start')
audi.getAllInfoCar()
audi.signal()
audi.stop()
console.log(audi.getStart())
