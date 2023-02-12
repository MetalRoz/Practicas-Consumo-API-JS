fetch("https://kitsu.io/api/edge/anime")
.then(response => response.json())
.then(datos => {
    console.log(datos)

    let pagina = document.getElementById("pagina")

    for (let i = 0; i < datos.data.length; i++) {
        let anime = datos.data[i];

        pagina.innerHTML += `
        <div class="cajas" id"caja">
        <img src="${anime.attributes.posterImage.original}">
        <p>${anime.attributes.canonicalTitle}</p>
        </div>
        `
        
    }
})

let header = document.getElementById("headermodos")
let body = document.getElementById("bodymodos")
let aside = document.getElementById("aside")
let buscar = document.getElementById("search-anime")
let logonoche = document.getElementById("logonoche")
let logodia = document.getElementById("logodia")
let nav = document.getElementById("nav")
let parrafo = document.getElementById("pagina")
let titulo = document.getElementById("titulo")

function modoDia(){
 
    header.classList.add("headerdia")

    nav.classList.add("navdia")
 
    buscar.classList.add("form-control2")
    
    body.classList.add("bodydia")

    aside.classList.add("asidedia")

    parrafo.classList.add("cajasdia")

    titulo.classList.add ("titulodia")

    logonoche.style = `
    display: none;
    `
    logodia.style = `
    display: block;
    `


}

function modoNoche(){

    header.classList.remove("headerdia")
  
    nav.classList.remove("navdia")

    buscar.classList.remove("form-control2")

    body.classList.remove("bodydia")

    aside.classList.remove("asidedia")

    parrafo.classList.remove("cajasdia")

    titulo.classList.remove("titulodia")

    logodia.style = `
    display: none;
    `
    logonoche.style = `
    display: block;
    `
}

let checkbox = document.getElementById("checkbox");
  
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      // Ejecuta esta función cuando el checkbox está activado
      modoDia()
      console.log("Checkbox activado");
    } else {
      // Ejecuta esta función cuando el checkbox está desactivado
      modoNoche()
      console.log("Checkbox desactivado");
    }
  });