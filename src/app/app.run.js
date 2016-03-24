module.exports = function($rootScope, $timeout, $animate, $q){
  'ngInject';

  $rootScope.$on('ngDialog.opened', function (e, $dialog) {
    $timeout(function(){
      $animate.addClass($dialog, "ng-dialog-animation");
    });
    
  });

  $rootScope.$on('ngDialog.closing', function (e, $dialog) {
    var defer = $q.defer();
    $dialog.data('$ngDialogOptions').animationEndDefer = defer;
    $dialog.data('$ngDialogOptions').animationEndPromise = defer.promise;
    $animate.removeClass($dialog, "ng-dialog-animation");
  });

};
