import angular from 'angular';

module.exports = angular.module('main.controller', [])
.controller('MainCrtl', function(){
  'ngInject';
  console.log('Main controller inited');
});
