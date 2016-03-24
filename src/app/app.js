'use strict';
const jquery = require('jquery'); // добиться чтобы anuglar заменить jQ Lite на нормальный angular object;
window.$ = window.jQuery = jquery;
const angular = require('angular');


require('ng-dialog/js/ngDialog.js');
require('ng-dialog/css/ngDialog.css');

require('./main.styl');

angular.module('app', [require('angular-animate'), require('angular-ui-router'), require('oclazyload'), 'ngDialog'])
  .config(require('./app.config'))
  .run(require('./app.run'))
  .config(require('./pages/main/main.config'))
  .config(require('./pages/about/about.config'))
  .service('popups', require('./popups/popups.js'))
  .animation('.ng-dialog-animation', require('./animation/ng-dialog-animation'));
