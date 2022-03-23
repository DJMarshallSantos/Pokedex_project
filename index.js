const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [{
    id:'1',
    numero: "613",
    nome: "Cubchoo",
    tipo: "Ice",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/613.png",
    descricao: "When this Pokémon is in good health, its snot becomes thicker and stickier. It will smear its snot on anyone it doesn’t like.",
    altura: "0.5 m",
    peso: "8.5 kg",
    categoria: "Chill",
    habilidade: "Snow Cloak, Slush Rush"
}, {
    id:'2',
    numero: "614",
    nome: "Beartic",
    tipo: "Ice",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/614.png",
    descricao: "It swims through frigid seas, searching for prey. From its frozen breath, it forms icy fangs that are harder than steel.",
    altura: "2.6 m",
    peso: "260.0 kg",
    categoria: "Freezing",
    habilidade: "Snow Cloak, Slush Rush"
}, {
    id:'3',
    numero: "024",
    nome: "Arbok",
    tipo: "Poison",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    descricao: "It swims through frigid seas, searching for prey. From its frozen breath, it forms icy fangs that are harder than steel.",
    altura: "3.5 m",
    peso: "65 kg",
    categoria: "Cobra",
    habilidade: "Shed Skin, Intimidate"
}];

let pokemon = undefined;
// Rotas
app.get("/home", (req, res) => {
  res.render("index", { pokedex, pokemon });
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro", { pokedex, pokemon });
  });

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/home");
  res.redirect("/#cards");
});

app.get("/detalhes/:id", (req, res) => {
  const id = Number(req.params.id);
  pokemon = pokedex.find((pokemon) => pokemon.id === id);
  res.redirect("/home");
  res.redirect("/cadastro");
});

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  const newPokemon = req.body;
  newPokemon.id = id + 1
  newPokemon.id = id + 1;
  pokedex[id] = newPokemon;
  pokemon = undefined;
  res.redirect("/home");
  res.redirect("/#cards");

});

app.get("/delete/:id", (req, res) => {
  const id = +req.params.id - 1;
  delete pokedex[id]

  res.redirect("/#cards");
});

app.listen(port, () => console.log(`O Servidor Pokedex está rodando na http://localhost:${port}.`));