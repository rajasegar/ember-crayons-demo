import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | buttons-demo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:buttons-demo');
    assert.ok(route);
  });
});
