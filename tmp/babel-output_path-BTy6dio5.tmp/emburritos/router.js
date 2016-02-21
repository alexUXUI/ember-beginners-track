define('emburritos/router', ['exports', 'ember', 'emburritos/config/environment'], function (exports, _ember, _emburritosConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emburritosConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('emberritos');
  });

  exports['default'] = Router;
});