define('emburritos/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'emburritos/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emburritosConfigEnvironment) {

  var name = _emburritosConfigEnvironment['default'].APP.name;
  var version = _emburritosConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});