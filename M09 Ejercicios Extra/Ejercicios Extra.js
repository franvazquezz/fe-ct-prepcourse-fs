/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloPadre = [];
   var arregloHijo = [];
   for(var prop in objeto){
      arregloHijo.push(prop);
      arregloHijo.push(objeto[prop]);
      arregloPadre.push(arregloHijo);
      arregloHijo = []
   }
   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var array = string.split('')
   array.sort();
   var objeto = {}
   var contador = 1
   for (var i = 0; i < array.length; i++){
      if (array[i] === array[i+1]){
         contador += 1;
         objeto[array[i]] = contador
      } else if (contador == 1){
        objeto[array[i]] = contador
      } else {
          contador = 1
      }
   }
   return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arr = string.split('')
   var arrMay = []
   var arrMin = []
   for(var i = 0; i<arr.length;i++){
      if(arr[i] == arr[i].toUpperCase()){
         arrMay.push(arr[i]);
      } else {
         arrMin.push(arr[i]);
      }
   }
   var pri = arrMay.join('');
   var seg = arrMin.join('');
   return pri + seg;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arr = frase.split(' ');
   arrFrase = [];
   for(var i = 0; i<arr.length;i++){
      var arrI = arr[i].split('');
      var arrIR= arrI.reverse();
      var arrOK = arrIR.join('');
      arrFrase.push(arrOK);
   }
   return arrFrase.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numS = numero.toString()
   var arr = []
   arr = numS.split('')
   var arrRev = []
   arrRev = arr.reverse()
   var numeroRev = arrRev.join('')
   if (numS === numeroRev){
      return("Es capicua");
   } else {
      return("No es capicua");
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arr = []
   arr = string.split('')
   for(var i = 0; i<arr.length;i++){
      if (arr[i] === 'a' || arr[i] === 'b' || arr[i] === 'c'){
        delete(arr[i]);
      } continue;
   }
   return arr.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a, b) => {
      return a.length - b.length
    });
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arrInt = [];
   for(let i = 0; i<array1.length;i++){
      for(let j = 0; j<array2.length;j++){
         if(array1[i] === array2[j]){
         arrInt.push(array1[i]);
         } else {
            continue;
         }
      }
   }
   return arrInt;
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
