fetch("https://kitsu.io/api/edge/anime")
.then(response => response.json())
.then(datos => {
    console.log(datos)

    let pagina = document.getElementById("pagina")

    for (let i = 0; i < datos.data.length; i++) {
        let anime = datos.data[i];

        pagina.innerHTML += `
        <div class="cajas">
        <img src="${anime.attributes.posterImage.original}">
        <p>${anime.attributes.canonicalTitle}</p>
        </div>
        `
        
    }
})