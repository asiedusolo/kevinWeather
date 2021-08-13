// temperature in kelvin
const kelvin = 0;
// temperature in celsius
const celsius = kelvin - 273;
// temperature in fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// rounding down temperature in fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
