// my module name and also  dependencies between the scopes
(function(){

'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){

$scope.lunch = '' ;
$scope.message = '' ;
$scope.checkLunch = function(){
  var foodNum = calcFoodNumber($scope.lunch);
  if (foodNum == 0)
    $scope.message = "Please enter data first";
  else if(foodNum > 3)
    $scope.message = "Too much!";
  else if(foodNum <= 3)
    $scope.message = "Enjoy!";

}

function calcFoodNumber(foods)
{
  var numOfFood = 0;
  var foodElem = [];
  foodElem = foods.split(',');
    console.log(foodElem.length);
  for(var i = 0 ; i<foodElem.length ; i++){

    if(foodElem[i] && foodElem[i] != " " ){
      numOfFood++ ;
      console.log("ok");

    }
  }

  return numOfFood ;
}



}



})();
