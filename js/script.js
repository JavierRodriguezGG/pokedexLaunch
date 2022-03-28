const fetchPokemon = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  fetch(url)
    .then((res) => {
      if (res.status != 200) {
        pokeImage("/img/pokeball.png");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      let pokeImg = data.sprites.front_default;
      nombrePoke.innerHTML = data.name;
      especiePoke.innerHTML = data.types[0].type.name;
      // especiePoke.innerHTML = pokeTipo();
      //statsPoke.innerHTML = data.stat[0].base_stat;
      //stats
      //moves
      let movimiento = data.moves.map(move => move.move.name);
      pokemov(movimiento);
      statsPoke(data);
      console.log(data)
      pokeImage(pokeImg);
    });
};
fetchPokemon();

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};

const statsPoke = (data) => {
    const pokeHp = document.getElementById("hp");
    const pokeAtk = document.getElementById("atk");
    const pokeDef = document.getElementById("def");
    const pokeAtks = document.getElementById("atks");
    const pokeDefs = document.getElementById("defs");
    const pokeSpd = document.getElementById("spd")
    pokeHp.innerHTML = data.stats[0].base_stat;
    pokeAtk.innerHTML = data.stats[1].base_stat;
    pokeDef.innerHTML = data.stats[2].base_stat;
    pokeAtks.innerHTML = data.stats[3].base_stat;
    pokeDefs.innerHTML = data.stats[4].base_stat;
    pokeSpd.innerHTML = data.stats[5].base_stat;
}

const pokemov = (movi) =>{
  const move = document.getElementById("movi");
  move.innerHTML = ("Movimientos \n: " + movi);
}