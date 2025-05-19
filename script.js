// Simular una API. function que me da data de forma asincrona (con promesas)
function pedirUnLibro(idLibro) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const libros = [
        {
          id: 1,
          title: "La Comunidad del Anillo",
          description: "..."
        },
        {
          id: 2,
          title: "Las Dos Torres",
          description: "..."
        },
        {
          id: 3,
          title: "El Retorno del Rey",
          description: "..."
        }
      ]
    
      let libroEncontrado = libros.find((cadaLibro) => {
        return cadaLibro.id === idLibro
      })
  
      if (!libroEncontrado) {
        reject("Hubo un error: no existe un libro con ese id")
      } else {
        resolve(libroEncontrado) 
      }
  
    }, Math.floor(Math.random() * 3000) + 1000) // 1 y 4 seg

  })

}

// const libroRecibido = pedirUnLibro(8)
// console.log(libroRecibido)

// como puedo ejecutar algo cuando ya recibi la data
// como puedo ejecutar algo si la llamada falló


// 4 formas diferentes de resolver promesas.

//* THEN/CATCH

//! ESTO NUNCA LO DEBERIAMOS HACER
// pedirUnLibro(1)
// .then((response) => {
//   console.log(response)

//   pedirUnLibro(2)
//   .then((response) => {
//     console.log(response)

//     pedirUnLibro(3)
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((error) => {
//       console.log(error)
//     })

//   })
//   .catch((error) => {
//     console.log(error)
//   })

// })
// .catch((error) => {
//   console.log(error)
// })

//* Encadenamiento de promesas
// pedirUnLibro(1)
// .then((response) => {
//   console.log(response)
//   return pedirUnLibro(2) // espero a recibir el primero antes de pedir el segundo
// })
// .then((response) => {
//   console.log(response)
//   return pedirUnLibro(3)
// })
// .then((response) => {
//   console.log(response)
// })
// .catch((error) => {
//   // si cualquiera de las promesas encadenadas falla, la llamada entra aqui
//   console.log(error)
// })

//* Promise.all() y Promise.allSettled()
// si el orden de las promesas no importa.

//* Promise.all() => falla todo si al menos una promesa falla
// recibe un array de multiples promesas
// Promise.all( [
//   pedirUnLibro(8),
//   pedirUnLibro(2),
//   pedirUnLibro(3),
// ] )
// .then((response) => {
//   console.log(response)
// })
// .catch((error) => {
//   console.log(error)
// })

Promise.allSettled( [
  pedirUnLibro(8),
  pedirUnLibro(2),
  pedirUnLibro(3),
] )
.then((response) => {
  console.log(response)
})