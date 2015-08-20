var sampleapp = angular.module('sampleapp', ['vsblockui']);
sampleapp.controller('samplectrl', function ($scope, $timeout, vsblockui) {

    $scope.disable = function () {
        // block the UI
        vsblockui.disable({message: 'Loading data...'});

        // the timeout enable the UI automatically after 3 seconds
        $timeout(function () {
            vsblockui.enable();
        }, 3000);
    };
});



