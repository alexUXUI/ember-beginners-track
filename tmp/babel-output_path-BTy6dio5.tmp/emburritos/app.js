define('emburritos/app', ['exports', 'ember', 'ember-resolver', 'ember/load-initializers', 'emburritos/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _emburritosConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emburritosConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emburritosConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emburritosConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});