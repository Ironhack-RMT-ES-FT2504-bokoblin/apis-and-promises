console.log("probando")

// Simular una API. function que me da data de forma asincrona
function pedirUnLibro(idLibro, callback, errorCallback) {
  // callback = recibirData // ref 1234

  // let libroEncontrado

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
  
    libroEncontrado = libros.find((cadaLibro) => {
      return cadaLibro.id === idLibro
    })
    console.log("ya tengo el libro")

    if (!libroEncontrado) {
      errorCallback("Hubo un error: no existe un libro con ese id")
    } else {
      callback(libroEncontrado) // esta es la funcion que entrega el libro solo cuando esté disponible // ref 1234
    }

  }, Math.floor(Math.random() * 3000) + 1000) // 1 y 4 seg

  // return libroEncontrado

}

// aqui actuamos como cliente
// const libroSolicitado = pedirUnLibro(1)
// console.log(libroSolicitado)

// function recibirData(data) {
//   console.log("desde cliente", data)
// } // ref 1234

// pedirUnLibro( 1, recibirData )

pedirUnLibro( 6, (data) => {
  console.log("desde cliente", data)
}, (error) => {
  console.log(error)
})


pedirUnLibro( 1, (data) => {
  console.log("desde cliente", data)

  pedirUnLibro( 2, (data) => {
    console.log("desde cliente", data)

    pedirUnLibro( 3, (data) => {
      console.log("desde cliente", data)
    }, (error) => {
      console.log(error)
    } )

  }, (error) => {
    console.log(error)
  } )

}, (error) => {
  console.log(error)
} )



