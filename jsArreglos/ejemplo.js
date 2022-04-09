//arreglos



var arreglo1 = [12,15,48,87,100];

//console.log(arreglo1[4]); // 15



// metodo map();

var arreglo = [10,10,10,10,10];

var arregloCopia = arreglo.map(elemento => elemento - 1);

//console.log(arregloCopia); // 15



// foreach

const arregloAutos = ['chevrolet','mazda','toyota','lada'];

const arregloAnexo = arregloAutos.forEach(

(elemento,i) => {

//console.log(` la marca es : ${elemento} `);

});



// busqueda del primer elemento coincidente con find

var arreglo = [79,12,9,45,1,5,8];

var resultadoBusqueda = arreglo.find(volatil => volatil <= 10);

//console.log(resultadoBusqueda);



// busqueda de los elementos que cumplan con la condicion

var arreglo = [79,12,9,45,1,5,8];

var resultadoBusqueda = arreglo.filter(volatil => volatil <= 10);

//console.log(resultadoBusqueda);