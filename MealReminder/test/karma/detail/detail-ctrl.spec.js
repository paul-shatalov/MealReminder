'use strict';

describe('module: detail, controller: DetailCtrl', function () {

  // load the controller's module
  beforeEach(module('detail'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var DetailCtrl;
  beforeEach(inject(function ($controller) {
    DetailCtrl = $controller('DetailCtrl');
  }));

  it('should do something', function () {
    expect(!!DetailCtrl).toBe(true);
  });

});
