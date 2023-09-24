/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayDeArrays = [];

   for (var key in objeto) {
      arrayDeArrays.push([key, objeto[key]])
   }

   return arrayDeArrays;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var apariciones = {};
   var listaDeCaracteres = string.split('');

   listaDeCaracteres.forEach( elemento => 
      {
         if(apariciones.hasOwnProperty(elemento)) {
            apariciones[elemento] += 1;
         }

         else {
            apariciones[elemento] = 1;
         }
      }
   )

   return apariciones;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayDeMayusculas = [];
   var arrayDeMinusculas = [];
   var listaDeCaracteres = string.split('');

   listaDeCaracteres.forEach( elemento => 
      {
         if(elemento === elemento.toUpperCase()) {
            arrayDeMayusculas.push(elemento);
         }

         else {
            arrayDeMinusculas.push(elemento);
         }
      }
   )

   return arrayDeMayusculas.join('') + arrayDeMinusculas.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayDePalabras = frase.split(' ');
   var arrayDePalabrasInvertidas = [];

   arrayDePalabras.forEach( elemento => 
      {
         listaDeCaracteres = elemento.split('');
         listaDeCaracteresInvertidos = [];

         listaDeCaracteres.forEach( elemento => {
            listaDeCaracteresInvertidos.unshift(elemento);
         });
         arrayDePalabrasInvertidas.push(listaDeCaracteresInvertidos.join(''));
      })

   return arrayDePalabrasInvertidas.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var listaDeDigitos = numero.toString().split('');
   var listaDeDigitosInvertidos = [];

   listaDeDigitos.forEach( elemento => 
      {
         listaDeDigitosInvertidos.unshift(elemento);     
      }
   );

   for(var i = 0; i < listaDeDigitos.length; i++){
      if(listaDeDigitos[i] !== listaDeDigitosInvertidos[i]){
         return 'No es capicua'
      }
   }

   return 'Es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var listaDeCaracteres = string.split('');
   var listaDeCaracteresFiltrados = [];

   listaDeCaracteres.forEach( elemento => 
      {
         if(elemento.toUpperCase() !== 'A' && elemento.toUpperCase() !== 'B' && elemento.toUpperCase() !== 'C'){
            listaDeCaracteresFiltrados.push(elemento);
         }
      }
   )

   return listaDeCaracteresFiltrados.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   var copiaDelArray = arrayOfStrings.slice();

   copiaDelArray.sort( function(a, b) {
      return a.length - b.length;
   });

   return copiaDelArray;
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] ∩ [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion = []

   for(var i = 0; i < array1.length; i++){
      for(var j = 0; j < array2.length; j++){
         if(array1[i] === array2[j]){
            interseccion.push(array1[i]);
         }
      }
   }

   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
