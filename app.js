// my module name and also  dependencies between the scopes
(function(){

'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){

$scope.lunch = '' ;
$scope.message = '' ;
$scope.color = '';
$scope.checkLunch = function(){
  var foodNum = calcFoodNumber($scope.lunch);
  if ($scope.lunch == ''){
    $scope.message = "Please enter data first";
    $scope.color = {"color" : "red"} ;
  }
  else if(foodNum > 3){
    $scope.message = "Too much!";
    $scope.color = {"color" : "green"} ;
  }
  else if(foodNum <= 3){
    $scope.message = "Enjoy!";
    $scope.color = {"color" : "green"} ;
  }

}

function calcFoodNumber(foods)
{
  var numOfFood = 0;
  var foodElem = [];
  foodElem = foods.split(',');
  for(var i = 0 ; i<foodElem.length ; i++){
    if(checkEmpty(foodElem[i])){
      numOfFood++ ;
    }
  }

  return numOfFood ;
}

function checkEmpty(string)
{
    for(var i = 0 ; i < string.length ; i++)
      if(string[i] && string[i] != " " )
        return true ;
    return false ;
}



}



})();
