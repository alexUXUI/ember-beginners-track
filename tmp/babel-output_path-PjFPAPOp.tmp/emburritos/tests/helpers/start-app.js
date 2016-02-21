define('emburritos/tests/helpers/start-app', ['exports', 'ember', 'emburritos/app', 'emburritos/config/environment'], function (exports, _ember, _emburritosApp, _emburritosConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emburritosConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emburritosApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});