//http://localhost:1234/ejersicios/typescript/index.html

let muted: boolean = false

let number: number = 23

function add(a:number, b:number): number
{
  return a + b;
}

const sum = add(23,3)
console.log('hola hdtpmd')
console.log(add(34,4))
console.log(sum)

// funcion que recibe una funcion
function createAdder(a: number): (b: number) => number {
  return function(b): number {
    return a + b
  }
}
const addCuatro = createAdder(4)
const suma = addCuatro(6)

console.log(suma)

// interfaces
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde'
}
interface Rectangulo {
  ancho : number;
  alto : number;
  color ?: Color
}

let rect: Rectangulo = {
  ancho: 4,
  alto : 6,
  color : Color.Rojo
}

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(`este es el area de un rectangulo ${areaRect}`)

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo';
}
console.log(rect.toString())