const recipe = require('./recipe/recipe.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(recipe);
};
