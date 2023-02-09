fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c")
    .then(resultado => resultado.json())
    .then(data => {


        let body = document.getElementById("pagina")

        for (let i = 0; i < data.drinks.length; i++) {
            let bebida = data.drinks[i]
            
            body.innerHTML += `
            <div class="cajas">
            <img src="${bebida.strDrinkThumb}" width="300" height="300">
            <h1>${bebida.strDrink}</h1>
            </div>
            `
            
        }

        console.log(data)



    })

