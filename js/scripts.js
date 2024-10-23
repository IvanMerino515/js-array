
// - Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

  const array1 = array1 => {
  const  aleatory = Math.floor(Math.random()* array1.length)
    console.log (array1[aleatory]);
  
  }
  array1 ([1,2,3,4,5])
  array1 ([30,40,10,12])




// Crea una función que reciba un array con 3 números. La función deberá imprimir por consola. "La suma de todos los números es:[suma]"- "La media de todos los números es:[media]"- "El mayor es [mayor] y el menor es [menor]"

const array2 = (threeNumbers) => {
  const sume = threeNumbers[0] + threeNumbers[1] + threeNumbers[2];
  
  const average = sume / 3;

  const max = Math.max(threeNumbers[0], threeNumbers[1], threeNumbers[2]);
  const min = Math.min(threeNumbers[0], threeNumbers[1], threeNumbers[2]);

  console.log(`La suma de todos los números es: ${max}`);
  console.log(`La media de todos los números es: ${average}`);
  console.log(`El mayor es ${max} y el menor es ${min}`);
}

array2([25, 56, 234]);

// Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const exercise3 = array3 =>{

    const aleatory3 = Math.floor(Math.random() *11);

      if (array3.includes (aleatory3)){
        console.log (`El numero ${aleatory3} está en el array`);
      }
      else { 
       console.log(`${aleatory3} no está en el array`)
      }
     }
     exercise3([1,4,5,2,6])

// Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const exercise4 = array4 => {     


      const aleatory4 = Math.floor(Math.random()* 101);
      const aleatory5 = Math.floor(Math.random()*101);
      const aleatory6 = Math.floor(Math.random()*101)
        array4.unshift(aleatory4, aleatory5, aleatory6)
          console.log(array4);

}

exercise4([])

// Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.
          
          const array5 = dniNumber =>{
          const lettersDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

          const letterDni = lettersDni[dniNumber % 23];
            console.log (`El dni ${dniNumber} tiene la letra: ${letterDni}`)
          }
        
          const dniNoLetter = 11859890;
          array5(dniNoLetter);
          
// Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

const transformArray = (array) => {
  const upper = [
    array[0].charAt(0).toUpperCase() + array[0].charAt(array[0].length - 1).toUpperCase(),
    array[1].charAt(0).toUpperCase() + array[1].charAt(array[1].length - 1).toUpperCase(),
    array[2].charAt(0).toUpperCase() + array[2].charAt(array[2].length - 1).toUpperCase()
  ];

  console.log(upper);
}

transformArray(['nokia', 'leon','narciso']); 

// Crea una función que reciba un array con 3 números y te diga cuántos números pares tiene ese array.

              const array7 = threeNumbers =>{
                return `Este array tiene ${(threeNumbers[0] % 2 === 0 ? 1 : 0) +
                                          (threeNumbers[1] % 2 === 0 ? 1 : 0) +
                                         (threeNumbers[2] % 2 === 0 ? 1 : 0)} números pares`;
              }
              
              console.log(array7([1,1,4]))

 // Crea una función que reciba un array con 3 números y devuelva un nuevo array con los mismos números pero en orden inverso.

            const array8 = (threeNumbers) => {
              const arrayInvert = [threeNumbers[2], threeNumbers[1], threeNumbers[0]]; 
              console.log(arrayInvert);
            }
            
            array8([1, 2, 3]); 

 // Crea una función que reciba un array con 3 palabras y devuelva un nuevo array con las mismas palabras pero en mayúsculas.

            
            const array9 = (threeWords) => {
              const array = [threeWords[0].toUpperCase(), threeWords[1].toUpperCase(), threeWords[2].toUpperCase()];
                console.log(array);
            }
            
            array9(["hola", "mundo", "javascript"]);              
              

            

          

            
