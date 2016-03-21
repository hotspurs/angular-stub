'use strict';

export default function($stateProvider){
  'ngInject';
  
  $stateProvider.state('main', {
    url: '/',
    templateProvider: function($q){
      'ngInject'; // jshint ignore:line
      let deferred = $q.defer();

      require.ensure([], function(){
        let template = require('./main.jade');
        deferred.resolve(template);
      });

      return deferred.promise;
    },
  });

}
