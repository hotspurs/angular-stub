'use strict';

module.exports = function($stateProvider) {
  'ngInject';

  $stateProvider.state('main', {
    url: '/',
    templateProvider: function($q) {
      'ngInject'; // jshint ignore:line
      let deferred = $q.defer();

      require.ensure([], function() {
        let template = require('./main.jade');
        deferred.resolve(template);
      });

      return deferred.promise;
    },

    controller: 'MainCrtl as vm',
    resolve: {
      loadMainController: ($q, $ocLazyLoad) => {
        'ngInject'; // jshint ignore:line
        let deferred = $q.defer();

        require.ensure([], function() {

          let module = require('./main.controller');
          $ocLazyLoad.load({name: module.name});
          deferred.resolve(module.controller);

        });

        return deferred;
      },
    },
  });

};
