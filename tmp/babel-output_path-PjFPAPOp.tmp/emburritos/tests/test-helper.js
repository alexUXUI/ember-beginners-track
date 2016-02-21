define('emburritos/tests/test-helper', ['exports', 'emburritos/tests/helpers/resolver', 'ember-qunit'], function (exports, _emburritosTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emburritosTestsHelpersResolver['default']);
});