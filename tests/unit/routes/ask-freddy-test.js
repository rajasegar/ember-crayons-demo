import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ask-freddy', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ask-freddy');
    assert.ok(route);
  });
});
