(function () {
    'use stirict'; 

    angular.module('myFirstApp', [])

    .controller('myFirstController', function ($scope) {
        $scope.name = "";
        $scope.value = 0;
        $scope.displayNumeric = function () {
            var total = stringNumeric($scope.name);
            $scope.value = total;
        }

        function stringNumeric(string) {
            var total = 0;
            for (var i = 0; i < string.length; i++) {
                total += string.charCodeAt(i);
            }

            return total;
        }
    });

})();