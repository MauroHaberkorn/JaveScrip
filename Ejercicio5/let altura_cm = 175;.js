let altura_cm = 175;
let altura_m = 1.75;
let peso = 65.5;

//redondeo hacia arriba
let altura_cm_redondeo = Math.ceil(altura_m);
console.log(altura_cm_redondeo)

//redondeo hacia abajo
let peso_redondeo = Math.floor(peso);
console.log(peso_redondeo)

let valor_max = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(valor_max)