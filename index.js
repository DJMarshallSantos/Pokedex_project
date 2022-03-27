const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [
  {
    id: "1",
    numero: "613",
    nome: "Cubchoo",
    tipo: "Ice",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/613.png",
    descricao:
      "When this Pokémon is in good health, its snot becomes thicker and stickier. It will smear its snot on anyone it doesn’t like.",
    altura: "0.5 m",
    peso: "8.5 kg",
    categoria: "Chill",
    habilidade: "Snow Cloak, Slush Rush",
  },
  {
    id: "2",
    numero: "614",
    nome: "Beartic",
    tipo: "Ice",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/614.png",
    descricao:
      "It swims through frigid seas, searching for prey. From its frozen breath, it forms icy fangs that are harder than steel.",
    altura: "2.6 m",
    peso: "260.0 kg",
    categoria: "Freezing",
    habilidade: "Snow Cloak, Slush Rush",
  },
  {
    id: "3",
    numero: "024",
    nome: "Arbok",
    tipo: "Poison",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    descricao:
      "It swims through frigid seas, searching for prey. From its frozen breath, it forms icy fangs that are harder than steel.",
    altura: "3.5 m",
    peso: "65 kg",
    categoria: "Cobra",
    habilidade: "Shed Skin, Intimidate",
  },
];

let pokemon = undefined;
let message = "";

// Rotas
app.get("/home", (req, res) => {
  res.render("index", { pokedex, pokemon, message, });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro", { pokedex, pokemon });
});

app.get("/detalhes/:id", (req, res) => {
  const idPokemon = +req.params.id;
  pokemon = pokedex.find((pokemon) => pokemon.id == idPokemon);
  res.render("detalhes", { pokedex: pokedex, pokemon: pokemon });
});

app.get("/editar/:id", (req, res) => {
  const idPokemon = +req.params.id;
  pokemon = pokedex.find((pokemon) => pokemon.id == idPokemon);
  res.render("editar", { pokedex: pokedex, pokemon: pokemon });
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  const {nome} = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  message = `O Pokémon ${nome} foi cadastrado com sucesso!`;
  res.redirect("/home");
});

app.post("/editar/:id", (req, res) => {
  const index = +req.params.id - 1;
  const newPokemon = req.body;
  newPokemon.id = pokedex[index].id;
  pokedex[index] = newPokemon;
  pokemon = undefined;
  res.redirect("/home");
});

app.listen(port, () =>
  console.log(`O Servidor Pokedex está rodando na http://localhost:${port}/home/.`));
