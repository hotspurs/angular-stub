'use strict';
const jquery = require('jquery'); // добиться чтобы anuglar заменить jQ Lite на нормальный angular object;
window.$ = window.jQuery = jquery;
const angular = require('angular');


require('ng-dialog/js/ngDialog.js');
require('ng-dialog/css/ngDialog.css');

angular.module('app', [require('angular-ui-router'), require('oclazyload'), 'ngDialog'])
  .config(require('./app.config'))
  .config(require('./pages/main/main.config'))
  .config(require('./pages/about/about.config'))
  .service('popups', require('./popups/popups.js'));
