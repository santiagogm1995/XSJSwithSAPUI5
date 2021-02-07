sap.ui.define([
  "com/myorg/App1/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("com.myorg.App1.controller.MainView", {


    click: function (params) {
      var settings = {
        "url": "/employees/getAllEmployees.xsjs",
        "method": "GET",
        "timeout": 0,
      };

      $.ajax(settings).done(function (response) {
        console.log(response);
      });
  }
  });
});
