
// - Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.


const array1 = [1,2,3,4,5];
  const  aleatory = Math.floor(Math.random()* array1.length)
    console.log (array1[aleatory]);



// Crea una función que reciba un array con 3 números. La función deberá imprimir por consola. "La suma de todos los números es:[suma]"- "La media de todos los números es:[media]"- "El mayor es [mayor] y el menor es [menor]"


// Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.


  const array3 = [1,4,5,2,6];

    const aleatory3 = Math.floor(Math.random() *11);

      if (array3.includes (aleatory3)){
        console.log (`El numero ${aleatory3} está en el array`);
      }
      else { 
       console.log(`${aleatory3} no está en el array`)
      }

      
// Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

      const array4 = [];

      const aleatory4 = Math.floor(Math.random()* 101);
      const aleatory5 = Math.floor(Math.random()*101);
      const aleatory6 = Math.floor(Math.random()*101)
        array4.unshift(aleatory4, aleatory5, aleatory6)
          console.log(array4);

// Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

      function array5(dniNumber){
          const lettersDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

          const letterDni = lettersDni[dniNumber % 23];
            console.log (`El dni ${dniNumber} tiene la letra: ${letterDni}`)
    

          }

          const dniNoLetter = 47079168;
          array5(dniNoLetter);
          
// Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

            const array6 = ['cepillo', 'capuyo', 'pato'];

            const upper = [
              array6[0].charAt(0).toUpperCase() + array6[0].charAt(array6[0].length - 1).toUpperCase(),
              array6[1].charAt(0).toUpperCase() + array6[1].charAt(array6[1].length - 1).toUpperCase(),
              array6[2].charAt(0).toUpperCase() + array6[2].charAt(array6[2].length - 1).toUpperCase()
            ]

            

            console.log(upper)

            // Crea una función que reciba un array con 3 números y te diga cuántos números pares tiene ese array.






            // Crea una función que reciba un array con 3 números y devuelva un nuevo array con los mismos números pero en orden inverso.





            // Crea una función que reciba un array con 3 palabras y devuelva un nuevo array con las mismas palabras pero en mayúsculas.

            


          

            
