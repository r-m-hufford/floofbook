import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function (hooks) {
  setupApplicationTest(hooks);

  test('go to profile page and click logout', async function (assert) {
    await visit('/user');
    assert.equal(currentURL(), '/user');
    await click('#logoutButton');

    assert.equal(currentURL(), '/login');
  });
});
