define('emburritos/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'emburritos/tests/helpers/start-app', 'emburritos/tests/helpers/destroy-app'], function (exports, _qunit, _emburritosTestsHelpersStartApp, _emburritosTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emburritosTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _emburritosTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});