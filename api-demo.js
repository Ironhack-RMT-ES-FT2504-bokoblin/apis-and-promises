console.log("probando")

const btn = document.querySelector("#btn")
const div = document.querySelector("#data-dump")

btn.addEventListener("click", () => {
  console.log("clickando")

  // https://rickandmortyapi.com/api/character

  fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    console.log(response)
    return response.json() // convierte la data recibida en formato json
  })
  .then((data) => {
    console.log(data)

    data.results.forEach((eachResult) => {

      const cardDiv = document.createElement("div")
      cardDiv.innerHTML += `
        <h3>${eachResult.name}</h3>
        <img src="${eachResult.image}" width="200px"/>
        <p>Especie: ${eachResult.species}</p>
        <p>Status: ${eachResult.status}</p>
      `
      div.append(cardDiv)

    })


  })
  .catch((error) => {
    console.log(error)
  })

})
