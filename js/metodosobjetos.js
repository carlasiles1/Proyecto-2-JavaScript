/* .keys() */
let persona = { nombre: "Juan", edad: 25 };
// console.log(Object.keys(persona)); ["nombre", "edad"]

/* .values() */
let persona2 = { nombre: "Juan", edad: 25 };
//console.log(Object.values(persona2));  ["Juan", 25]

/* .entries() */
let persona3 = { nombre: "Juan", edad: 25 };
//console.log(Object.entries(persona3));
// [["nombre", "Juan"], ["edad", 25]]

/* .assign() */
let destino = {};
let origen = { a: 1 };
Object.assign(destino, origen);
//console.log(destino);  { a: 1 }

/* .freeze() */
const persona4 = {
  nombre: "Ana",
  contactos: {
    telefono: "1234567890",
    email: "ana@example.com",
  },
};

Object.freeze(persona4);

persona4.contactos.email = "ana@newmail.com";
//console.log(persona4.contactos.email);

persona = { nombre: "Ana" }; 
Object.freeze(persona);



Object.isFrozen(persona)
//true


persona.nombre = "Juana";
// Nos da error en "strict mode"

console.log(persona.nombre);
// "Ana"

/* .hasOwnProperty(key) */
let persona5 = { nombre: "Juan" };
//console.log(persona5.hasOwnProperty("nombre"));  true

/* for...in */
let persona6 = {
  nombre: "Juan",
  edad: 25,
};
for (let clave in persona6) {
  console.log(`${clave}: ${persona6[clave]}`);
}
// nombre: Juan // edad: 25

let objeto = {
  clave: "valor",
  clave: valor,
  clave: { clave: valor },
  metodo: function () {
    //codigo
  },
};

const proto = { 
  greet: function() { 
    return "Hello"; 
  } 
};

const obj = Object.create(proto);
//console.log(obj.greet()); 
// "Hello"

const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);



Object.seal(persona);
delete persona.nombre; // No surte efecto
console.log(persona.nombre); // "Juan"



Object.isSealed(persona);
// true


let num = new Number(42);
console.log(num.valueOf()); // 42


persona.hasOwnProperty("nombre");
//true


persona.nombre.valueOf()
//"Juan"





