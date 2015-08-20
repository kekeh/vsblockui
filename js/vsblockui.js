/**
 * @ngdoc object
 * @name vsblockui
 * @description vsblockui is module of the block UI component.
 */
angular.module('vsblockui', [])
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
        var blockElem = 0;

        so.disable = function (bui) {
            $http.get('vsblockui.html', {cache: $templateCache}).success(function (resp) {
                var scope = $rootScope.$new();
                blockElem = $compile(angular.element(resp))(scope);
                angular.element(blockElem.children()[1]).text(bui.message);
                body().append(blockElem);

                if (!angular.isUndefined(bui.disabledTime)) {
                    $interval(function () {
                        blockElem.remove();
                    }, bui.disabledTime, 1);
                }

                function body() {
                    return $document.find('body');
                }
            });
        };

        so.enable = function () {
            if (blockElem !== 0) {
                blockElem.remove();
                blockElem = 0;
            }
        }

        return so;
    }]);