module.exports = function(ngDialog){
  'ngInject';

  this.infoPopup = function(options){
    require('./info-popup')(ngDialog, options);
  };

};
