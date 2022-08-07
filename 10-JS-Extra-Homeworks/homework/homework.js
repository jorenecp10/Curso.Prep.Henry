// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  matriz=Object.entries(objeto)

  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  objeto = new Object()
  

  for (let index = 0; index < string.length; index++) {
    contador=0
    for (let  y= 0; y < string.length; y++) {
      if (string[index]===string[y]) {
        contador=contador+1
        
      }else{
        continue;
      }
      
      
    }
    objeto[string[index]]=contador
    
  }
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  vector=[]
  vector2=[]
  vectorunion=[]
  contador=0
  contador1=0
  for (let index = 0; index < s.length; index++) {

    if (s[index]===s[index].toUpperCase()) {
      vector[contador]=s[index]
      contador=contador+1
      
    }else{
      vector2[contador1]=s[index]
      contador1=contador1+1
      
    }

  }

  vectorunion=vector+vector2

  palabraNueva=vectorunion.split(",").join("")
  return palabraNueva

  


}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  vector=[]
  contadorPV=0
  cadena=""
  for (let index = 0; index < str.length; index++) {
    if (str[index]===" ") {
      contadorPV=contadorPV+1
      cadena=""
      
    }else{
      cadena=cadena+str[index]
      vector[contadorPV]=cadena
      
      

    }

    
  }
  
  for (let index = 0; index < vector.length; index++) {
    vector[index]=vector[index].split("").reverse().join("")
    
  }

  palabra = vector.join(" ")


  return palabra


} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  numero=numero.toString()
  vector=[]
  indicey=numero.length-1
  
  for (let index = 0; index < numero.length; index++) {
    vector[index]=numero[indicey]
    indicey=indicey-1
  }
  numero2=vector.join("")

  if (numero===numero2) {
    return "Es capicua"
    
  }else{
    return "No es capicua"
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadenaAux=""

  for (let index = 0; index < cadena.length; index++) {
    if (cadena[index]==="a"||cadena[index]==="b"||cadena[index]==="c") {
      continue
      
    }else{
      cadenaAux=cadenaAux+cadena[index]
    }
    
    
  }

  return cadenaAux
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

