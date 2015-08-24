/* 
*  Name: vsblockui 
*  Description: Block UI and spinner service - AngularJS reusable UI component 
*  Version: 0.0.2 
*  Author: kekeh 
*  Homepage: http://kekeh.github.io/vsblockui 
*  License: MIT 
*  Date: 2015-08-24 
*/ 
angular.module('template-vsblockui-0.0.2.html', []);


/**
 * @ngdoc object
 * @name vsblockui
 * @description vsblockui is module of the block UI component.
 */
angular.module('vsblockui', ["template-vsblockui-0.0.2.html"])
/**
 * @ngdoc object
 * @name run
 * @description run adds the vsblockui template to the template cache.
 */
    .run(['$templateCache', function ($templateCache) {
        $templateCache.put('vsblockui.html', '<div class="vsblockui"></div><div class="buiBusyIconContainer"><span class="buiBusyIcon"></span><span class="buiBusyIconTxt"></span></div>');
    }])

/**
 * @ngdoc object
 * @name vsblockui
 * @description vsblockui is factory containing implementation of the block UI.
 */
    .factory('vsblockui', ['$rootScope', '$compile', '$document', '$templateCache', '$http', '$interval', function ($rootScope, $compile, $document, $templateCache, $http, $interval) {
        var so = {};
        var block = 0;

        so.disable = function (bui) {
            $http.get('vsblockui.html', {cache: $templateCache}).success(function (resp) {
                block = $compile(angular.element(resp))($rootScope.$new());
                angular.element(block.children()[1]).text(bui.message);
                $document.find('body').append(block);

                if (!angular.isUndefined(bui.disabledTime)) {
                    $interval(function () {
                        removeBlock();
                    }, bui.disabledTime, 1);
                }
            });
        };

        so.enable = function () {
            removeBlock();
        }

        function removeBlock() {
            if (block !== 0) {
                block.remove();
                block = 0;
            }
        }

        return so;
    }]);