let sport = 'football';
let id = 'basket';

let arr = [1, 2, 3, 4, 5];

// Array tipados
let ids: number[] = [1, 3, 5, 7];
console.log(ids);

let nombres: string[] = ['Juan', 'Jon', 'John'];
let personas: object[] = [{ nombre: 'Juan', id: 1, edad: 15 }];
console.log(personas);

// Objetos
let pet: {
	name: string;
	location: string;
	isDog: boolean;
};
pet = {
	name: 'Pepita',
	location: 'Chile',
	isDog: true,
};

// Funciones
// '?' parametro es opcional, ese mismo parametro tiene un tipo de union
const add = (a: number, b: number, c?: number | string) => {
	console.log(c);
	return a + b;
};
console.log(add(4, 5, 'Podría poner un numero, string o nada acá!'));
