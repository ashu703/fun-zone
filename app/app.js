'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('mainApp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
      .when('/', {
        template: 'welcome user!'
      })
      .when('/brick_storm',{
        templateUrl: 'brick-storm.html'      })
      .when('/random_guess',{
        templateUrl: 'random.html'      })
      .when('/help',{
        templateUrl:'help.html'
      })
      .when('/snake',{
        templateUrl:'snake.html'
      })
      .otherwise({
        redirectTo:'/'
      });

});
app.controller('languages',function($scope){
  $scope.bricks=function(){
    myFunction();
    var bx=5;
    var by=7;
    var c=document.getElementById("myCanvas");
    var canvasWidth= c.width;
    var canvasHeight= c.height;
    var rectHeight=canvasHeight/20;
    var recthPosition=canvasHeight-rectHeight;
    var rectwidth=canvasWidth/5;
    var rectwPosition=canvasWidth/2-(rectwidth/2);
    var rrectwPosition=rectwPosition;

    var ctx= c.getContext("2d");
    function rect() {
      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.fillRect(rectwPosition, recthPosition, rectwidth, rectHeight);
    } var radius = 5;
    var centerX = canvasWidth / 2;
    var centerY = 50 ;
    var realcy=centerY;
    var myVar;

    function myFunction() {
      myVar = setInterval(alertFunc, 100);
    }

    function alertFunc() {

      ctx.clearRect(0, 0, c.width, c.height);
      rect();
      centerY+=by;
      centerX+=bx;
      if((centerX>=canvasWidth)||(centerX<=0)){
        bx=-bx;
      }


      if(centerY>recthPosition){
        if((rectwPosition<=centerX)&&(centerX<=(rectwPosition+rectwidth))){
          by=-by;
        }else{
          clearInterval(myVar);

        }



      }
      if(centerY<=0){
        by=-by;
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'green';
      ctx.fill();}
    document.onkeydown = checkKey;

    function checkKey(e) {

      e = e || window.event;

      if (e.keyCode == '37') {
        if(rectwPosition<0){


        }else{
          rectwPosition-=12;
        }
        // left arrow
      }
      else if (e.keyCode == '39') {
        if(rectwPosition>(canvasWidth-rectwidth)){


        }else{

          rectwPosition+=12;
        }           // right arrow
      }

    }
  };
  });

app
    .controller('XYZ', XYZ);
function XYZ($scope) {
  $scope.verifyGuess = function () {
    $scope.deviation = $scope.original - $scope.guess;
    $scope.noOfTries = $scope.noOfTries + 1;
    if($scope.deviation==0){
      alert("Finally you get");
    }
  }
  $scope.initializeGame=function() {
    $scope.noOfTries = 0;
    $scope.original = Math.floor((Math.random() * 1000) + 1);
    $scope.guess = null;
    $scope.deviation = null;
  }
  $scope.initializeGame();
}


app
    .controller('XY', XY);
$scope.XY=function() {
  


}