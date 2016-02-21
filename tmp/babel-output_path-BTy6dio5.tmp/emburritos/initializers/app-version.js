define('emburritos/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'emburritos/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emburritosConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emburritosConfigEnvironment['default'].APP.name, _emburritosConfigEnvironment['default'].APP.version)
  };
});