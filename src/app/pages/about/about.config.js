'use strict';

module.exports = function($stateProvider) {
  'ngInject';

  $stateProvider.state('about', {
    url: '/about',
    templateProvider: function($q) {
      'ngInject'; // jshint ignore:line
      let deferred = $q.defer();

      require.ensure([], function() {
        let template = require('./about.jade');
        require('./about.styl');
        deferred.resolve(template);
      });

      return deferred.promise;
    },

    controller: 'AboutCrtl as vm',
    resolve: {
      loadMainController: ($q, $ocLazyLoad) => {
        'ngInject'; // jshint ignore:line
        let deferred = $q.defer();

        require.ensure([], function() {

          let module = require('./about.controller');
          $ocLazyLoad.load({name: module.name});
          deferred.resolve(module.controller);

        });

        return deferred;
      },
    },
  });

};
