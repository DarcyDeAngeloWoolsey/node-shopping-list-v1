
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {Recipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to Recipes
// so there's some data to look at
Recipes.create('chocolate milk', ['cocoa', 'milk', 'sugar']);
Recipes.create('chocolate cookies', ['cocoa', 'milk', 'flour']);
Recipes.create('tofu', ['beans', 'toes', 'fu']);

// when the root of this router is called with GET, return
// all current Recipes items
app.get('/recipes', (req, res) => {
  res.json(Recipes.get());
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
