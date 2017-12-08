const axios = require("axios");

let characters = [];

const getChars = (req, res, next) => {
  if (characters.length === 0) {
    axios.get("https://swapi.co/api/people").then(response => {
      characters = response.data.results;
      res.json(characters);
    });
  } else {
    res.json(characters);
  }
};

const addChar = (req, res, next) => {
  characters.push(req.body);
  res.json(characters);
};

const updateChar = (req, res, next) => {
  // const id = req.params.id
  const { id } = req.params;
  characters[id] = Object.assign({}, characters[id], { name: req.body.name });
  res.json(characters);
};

const destroyChar = (req, res, next) => {
  const { id } = req.params;
  characters.splice(id, 1);
  res.json(characters);
};

module.exports = {
  getChars,
  addChar,
  updateChar,
  destroyChar
};
