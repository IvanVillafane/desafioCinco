let data = [
    {
        Producto:"Leon del hack",
        Curso:"Oro ",
        Ventas:"525",
        Costos:"600"
    },
    {
        Producto:"Lobo",
        Curso:"plata ",
        Ventas:"337",
        Costos:"423"
    },
    {
        Producto:"Aprendiz del hack",
        Curso:"bronce ",
        Ventas:"129",
        Costos:"225"
    },
    {
        Producto:"Primeros pasos del hack",
        Curso:"cobre",
        Ventas:"99",
        Costos:"85"
    }
    
]

console.log(data.length) /*Este me va a decir cuantas son*/ 
console.log(data[2]) /*Posicion del 3 en este caso bronce*/

const resultado ={
    list:[],
    Lobo:{
        "ventas":337,
    },
};
let column ="Producto";
let agrupador = "Ventas";

for(let index in data){

const dato = data[index];

if(resultado.list.indexOf(dato[column] == -1)){ 
resultado.list.push(dato[column]);  /*Y WALA IMPRIME LOS 4 DATOS */ 
resultado[dato[column]] ={};
resultado[dato[column]][agrupador] = 0;
}
resultado[dato[column]][agrupador] += dato[agrupador]
} 

console.log(resultado)

/*VOY A CREAR UNA VARIABLE*/
let prueba =["Leon del hack",
"Lobo",
"Aprendiz del hack",
"Primeros pasos del hack"
]

console.log("resultado indexOf", prueba.indexOf("Lobo"))/*APARECE -1 XQ NO LO ENCUENTRA*/
