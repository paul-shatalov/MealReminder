'use strict';
angular.module('main')
  .controller('DetailCtrl', function ($log, $cordovaLocalNotification) {

    $log.log('Hello from your Controller: DetailCtrl in module main:. This is your controller:', this);

    $cordovaLocalNotification.schedule({
      id: 1,
      title: 'Time to eat!',
      text: 'Dinner meal',
      data: {
        customProperty: 'custom value'
      },
      icon: 'file://main/assets/images/logo-mono-inversed.png',
      smallIcon: 'file://main/assets/images/fork-mono-inversed.png',
      every: 'second',
      led: 'edb456'
    }).then(function () {

    });

  });
