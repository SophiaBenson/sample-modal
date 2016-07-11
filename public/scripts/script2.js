console.log('script 2');

var app = angular.module('exampleApp', ['ngDialog']);

app.controller('MainCtrl', function ($scope, ngDialog) {
    $scope.clickToOpen = function () {
        // ngDialog.open({ template: 'popupTmpl.html', className: 'ngdialog-theme-default' });
ngDialog.open({ template: 'templateId', className: 'ngdialog-theme-default' });
    };
});
