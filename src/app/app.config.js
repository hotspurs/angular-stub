module.exports = function($urlRouterProvider, ngDialogProvider){
  'ngInject';
  
  $urlRouterProvider.otherwise("/");

  ngDialogProvider.setDefaults({
    plain: true,
    ariaAuto: false,
    disableAnimation: false,
    trapFocus: false,
    closeByDocuments: true
  });

};
