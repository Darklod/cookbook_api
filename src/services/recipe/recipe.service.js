// Initializes the `recipe` service on path `/recipes`
const createService = require('feathers-mongodb');
const hooks = require('./recipe.hooks');
const filters = require('./recipe.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/recipes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('recipes');

  mongoClient.then(db => {
    service.Model = db.collection('recipe');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
