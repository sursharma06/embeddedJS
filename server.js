let pokemon = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'grass',
    evolves_from: 'egg',
    image_url: 'http://www.pokestadium.com/sprites/xy/bulbasaur.gif',
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: 'grass',
    evolves_from: 'Bulbasaur',
    image_url: 'http://www.pokestadium.com/sprites/xy/ivysaur.gif',
  },
  {
    id: 3,
    name: 'Venusaur',
    type: 'grass',
    evolves_from: 'Ivysaur',
    image_url: 'http://www.pokestadium.com/sprites/xy/venusaur.gif',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'fire',
    evolves_from: 'egg',
    image_url: 'http://www.pokestadium.com/sprites/xy/charmander.gif',
  },
  {
    id: 5,
    name: 'Charmeleon',
    type: 'fire',
    evolves_from: 'Charmander',
    image_url: 'http://www.pokestadium.com/sprites/xy/charmeleon.gif',
  },
  {
    id: 6,
    name: 'Charizard',
    type: 'fire',
    evolves_from: 'Charmeleon',
    image_url: 'http://www.pokestadium.com/sprites/xy/charizard.gif',
  },
  {
    id: 7,
    name: 'Squirtle',
    type: 'water',
    evolves_from: 'egg',
    image_url: 'http://www.pokestadium.com/sprites/xy/squirtle.gif',
  },
  {
    id: 8,
    name: 'Wartortle',
    type: 'water',
    evolves_from: 'Squirtle',
    image_url: 'http://www.pokestadium.com/sprites/xy/wartortle.gif',
  },
  {
    id: 9,
    name: 'Blastoise',
    type: 'water',
    evolves_from: 'Wartortle',
    image_url: 'http://www.pokestadium.com/sprites/xy/blastoise.gif',
  },
];

var express = require('express');
var app = express();
// var fs = require('fs');

var ejs = require('ejs');
app.set('view engine', 'ejs'); //after installing ejs, have to set it and then call the render function

app.get('/pokemon', function (req, res) {
  res.render('index', { pokemon });

});

app.get('/pokemon/:id', function (req, res) {
  var pokemon_id = req.params.id;
  var myPokemon = pokemon[pokemon_id - 1];
  res.render('profile', { myPokemon });
});

app.listen(8000, function () {
  console.log('listening to port 8000...');
});
