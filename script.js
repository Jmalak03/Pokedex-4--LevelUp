const container = document.getElementById('listapokemon')

const url = "https://pokeapi.co/api/v2/pokemon/"


for (let i = 0; i < 6; i++) {
    let pokeid = Math.floor(Math.random()*650+1)
    fetch(url+pokeid).then((res)=>{
        if (res.ok) {
            res.json().then((response)=>{
                let img = response.sprites.other.dream_world.front_default
                let name = response.name
                let hp = response.stats[0].base_stat
                let attack = response.stats[1].base_stat
                let defense = response.stats[2].base_stat
                let speed = response.stats[5].base_stat
                let type = response.types[0].type.name
                let typesP = ""
                response.types.forEach(e => {
                    typesP += `<p>${e.type.name}</p>`
                });


                let card = `
                <div class="card ${type}" id="cardCon">
                    <p class="hp">
                        HP <span>${hp}</span>
                    </p>
                    <img id="pokeimg" src=${img} alt=${name}>
                    <h2 class="pokename">${name}</h2>
                    <div class="types">
                        ${typesP}
                    </div>
                    <div class="stats">
                        <div>
                            <h3>${attack}</h3>
                            <p>Ataque</p>
                        </div>
                        <div>
                            <h3>${defense}</h3>
                            <p>Defensa</p>
                        </div>
                        <div>
                            <h3>${speed}</h3>
                            <p>Velocidad</p>
                        </div>
                    </div>
                </div>`
                
                container.innerHTML += card
            })
        }
    })
}