(function() {
  'use strict';

  angular.module("meetup", [])
    .directive('esnBlink', ['$interval', function($interval) {

      function link(scope, element, attrs) {
        var timeoutId;

        var blink = function() {
            element.css('visibility') === 'hidden' ? element.css('visibility', 'inherit') : element.css('visibility', 'hidden');
          }
          timeoutId = $interval(function() {
            blink();
          }, scope.esnBlink);
        }
      return {
        restrict: 'A',
        scope: {
          esnBlink: '<'
        },
        link: link
      };
    }]);

})();
