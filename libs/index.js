(function(){
    var general = angular.module('general',['modal']);
        
    general.controller('initial', function($scope){
        $scope.shown = false;
        $scope.close = function(){

        };
        $scope.open = function(){
            $scope.shown = true;
        };
    });
})();