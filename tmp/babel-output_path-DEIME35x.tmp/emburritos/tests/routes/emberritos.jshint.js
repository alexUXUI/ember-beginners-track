define('emburritos/tests/routes/emberritos.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/emberritos.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/emberritos.js should pass jshint.');
  });
});