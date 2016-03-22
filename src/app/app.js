'use strict';

import angular from 'angular';

angular.module('app', [require('angular-ui-router'), require('oclazyload')])
  .config(require('./app.config'))
  .config(require('./pages/main/main.config'));
