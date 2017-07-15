const assert = require('assert');
const app = require('../../src/app');

describe('\'recipe\' service', () => {
  it('registered the service', () => {
    const service = app.service('recipes');

    assert.ok(service, 'Registered the service');
  });
});
