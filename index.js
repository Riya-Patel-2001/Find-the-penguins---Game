$(document).ready( function() {

    var score = 0;
    var highestScore = 0;

    var cards = ["penguin_1", "penguin_2", "penguin_3", 
                 "penguin_4", "penguin_5", "penguin_6", 
                 "penguin_7","penguin_8", "yeti"];

    var cards16 = ["penguin_1", "penguin_2", "penguin_3", 
                   "penguin_4", "penguin_5", "penguin_6", 
                   "penguin_7","penguin_8", "yeti", 
                   "penguin_1", "penguin_2", "penguin_3", 
                   "penguin_4", "penguin_5", "penguin_6", 
                   "penguin_7"];

    var currCards = [];
    var shuffle = function(){
        for(var i=currCards.length - 1; i>0; i--){
            var j = Math.floor(Math.random() * (i+1));
            var temp = currCards[i];
            currCards[i] = currCards[j];
            currCards[j] = temp;
        }
        var gSound = $("#gSound")[0];
        var promise = gSound.play();
        promise.then(x => {}).catch(x => {});
    }

    var operateThreeGrid = function(){
        currCards = cards;
        shuffle();
        $("#penguin9").css("display", "none");
        $("#penguin10").css("display", "none");
        $("#penguin11").css("display", "none");
        $("#penguin12").css("display", "none");
        $("#penguin13").css("display", "none");
        $("#penguin14").css("display", "none");
        $("#penguin15").css("display", "none");
        $("#penguin1").removeClass("tile");
        $("#penguin2").removeClass("tile");
        $("#penguin3").removeClass("tile");
        $("#penguin4").removeClass("tile");
        $("#penguin5").removeClass("tile");
        $("#penguin6").removeClass("tile");
        $("#penguin7").removeClass("tile");
        $("#penguin8").removeClass("tile");
        $("#yeti").removeClass("tile");
        $("#threeGrid").addClass("active");
        $("#fourGrid").removeClass("active");


    }

    var operateFourGrid = function(){

        currCards = cards16;
        shuffle();
        $("#penguin9").css("display", "block");
        $("#penguin10").css("display", "block");
        $("#penguin11").css("display", "block");
        $("#penguin12").css("display", "block");
        $("#penguin13").css("display", "block");
        $("#penguin14").css("display", "block");
        $("#penguin15").css("display", "block");
        $("#penguin1").addClass("tile");
        $("#penguin2").addClass("tile");
        $("#penguin3").addClass("tile");
        $("#penguin4").addClass("tile");
        $("#penguin5").addClass("tile");
        $("#penguin6").addClass("tile");
        $("#penguin7").addClass("tile");
        $("#penguin8").addClass("tile");
        $("#yeti").addClass("tile");
        $("#fourGrid").addClass("active");
        $("#threeGrid").removeClass("active");
    }

    var operate = function(id,index){
        var pSound = $("#pSound")[0];

        var ySound =  $("#ySound")[0];

        if(currCards[index] == "yeti"){
            ySound.play();
            $("#gameholder").css("pointer-events", "none");
            if(highestScore < score){
                highestScore = score;
                $("#highestScore").text(highestScore);
            }
            $(id).css("background-image", "url('./images/"+ currCards[index] +".png')");
            var time=5;
            var timer = setInterval(function(){
                if(time==5){
                    $("#newGame").css("display", "block");
                    $("#newGame").text("New game in "+ time +" seconds!!");
                }
                else if(time == 0){
                    clearInterval(timer);
                    refresh();
                }
                else{
                    $("#newGame").text("New game in "+ time +" seconds!!");
                }
                time--;
            },1000);
        }
        else{
            pSound.play();
            score += 1;
            $("#currentScore").text(score);
            $(id).css("background-image", "url('./images/"+ currCards[index] +".png')");
            $(id).css("pointer-events", "none");

        }

    }

    var refresh = function(){
        $("#gameholder").removeAttr("style");
        $("#penguin1").removeAttr("style");
        $("#penguin2").removeAttr("style");
        $("#penguin3").removeAttr("style");
        $("#penguin4").removeAttr("style");
        $("#penguin5").removeAttr("style");
        $("#penguin6").removeAttr("style");
        $("#penguin7").removeAttr("style");
        $("#penguin8").removeAttr("style");
        $("#penguin9").removeAttr("style");
        $("#penguin10").removeAttr("style");
        $("#penguin11").removeAttr("style");
        $("#penguin12").removeAttr("style");
        $("#penguin13").removeAttr("style");
        $("#penguin14").removeAttr("style");
        $("#penguin15").removeAttr("style");
        $("#yeti").removeAttr("style");
        score = 0;
        $("#currentScore").text(score);
        shuffle();
        $("#newGame").css("display", "none");

    }

    operateThreeGrid();
    $("#penguin1").click(function(){
        operate("#penguin1",0);

    });

    $("#penguin2").click(function(){
        operate("#penguin2",1);
    });

    $("#penguin3").click(function(){
        operate("#penguin3",2);
    });

    $("#penguin4").click(function(){
        operate("#penguin4",3);
    });

    $("#penguin5").click(function(){
        operate("#penguin5",4);
    });

    $("#penguin6").click(function(){
        operate("#penguin6",5);
    });

    $("#penguin7").click(function(){
        operate("#penguin7",6);
    });

    $("#penguin8").click(function(){
        operate("#penguin8",7);
    });

    $("#yeti").click(function(){
        operate("#yeti",8);
    });

    $("#penguin9").click(function(){
        operate("#penguin9",9);

    });

    $("#penguin10").click(function(){
        operate("#penguin10",10);
    });

    $("#penguin11").click(function(){
        operate("#penguin11",11);
    });

    $("#penguin12").click(function(){
        operate("#penguin12",12);
    });

    $("#penguin13").click(function(){
        operate("#penguin13",13);
    });

    $("#penguin14").click(function(){
        operate("#penguin14",14);
    });

    $("#penguin15").click(function(){
        operate("#penguin15",15);
    });

    $("#threeGrid").click(function(){
        operateThreeGrid();
    });

    $("#fourGrid").click(function(){
        operateFourGrid();

    });
});


