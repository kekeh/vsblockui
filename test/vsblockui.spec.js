describe('vsblockui', function () {
    var service, scope;

    beforeEach(module('vsblockui'));

    beforeEach(inject(function ($rootScope, $document, vsblockui) {
        scope = $rootScope;
        service = vsblockui;
    }));

    it('should have a disable function', function () {
        expect(angular.isFunction(service.disable)).toBe(true);
    });

    it('should have an enable function', function () {
        expect(angular.isFunction(service.enable)).toBe(true);
    });

});