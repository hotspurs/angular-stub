const angular = require('angular');

module.exports = angular.module('main.controller', [])
.controller('MainCrtl', function(popups){
  'ngInject';
  console.log('Main controller inited');

  this.openPopup = () => {
    popups.infoPopup();
  };

});
