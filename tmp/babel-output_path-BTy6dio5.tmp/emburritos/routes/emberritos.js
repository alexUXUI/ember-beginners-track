define('emburritos/routes/emberritos', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return ['alex', 'kyle', 'ben'];
    }
  });
});