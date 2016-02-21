define('emburritos/tests/helpers/resolver', ['exports', 'ember-resolver', 'emburritos/config/environment'], function (exports, _emberResolver, _emburritosConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emburritosConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emburritosConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});