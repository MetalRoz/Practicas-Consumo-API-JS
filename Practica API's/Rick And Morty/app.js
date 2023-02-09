fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    crearTodo(data)

  })
  .catch(error =>{
    console.log(error, "errorzaso")
    let data = JSON.parse(localStorage.getItem("datos"))
    console.log(data)
    crearTodo(data)
  })

  function crearTodo(data){
    localStorage.setItem("datos", JSON.stringify(data))
    console.log(data)

    let div = document.getElementById("pagina")

    for (let i = 0; i < data.results.length; i++) {
        let personaje = data.results[i]
        
        div.innerHTML += `
            <div class="cajas">
            <img src="${personaje.image}">
            <h1>${personaje.name}</h1>
            <h4>${personaje.location.name}</h4>
            <p>${personaje.status}</p>
            </div>
            `
    }
  }