var colorList = ['green','red','yellow','blue'];
var randomColorList = [];
var userColorList = [];

var level = 0;
var index = 0; 
var started = false;

$(document).keypress(function(){

    if(!started){

        $('#level-title').text('your level: ' + level);
        gameStart();
        started = true;

    }

});

function gameStart(){

    level++;

    $('#level-title').text('your level: ' + level);
    var randumNumber = Math.floor(Math.random()*4);
    var randomId = colorList[randumNumber];

    $('#'+randomId).fadeIn(400).fadeIn(100).fadeOut(100).fadeIn(100);;
    randomColorList.push(randomId);
    playSound(randomId);
    

}

function checkAns(currnetColor){

    if(randomColorList[index] === currnetColor){
        console.log('correct answer!');
    }
    else {

        playSound('wrong');
        $('body').addClass('game-over');
    
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 150);

        setTimeout(() => {
            
            location.reload();
            
        }, 1000);   
    }

    index++;

    if(index === randomColorList.length){
    
        console.log('new equence')
        setTimeout(() => {
            index = 0;    
            gameStart();
            
        }, 1200);  
       
    }



}

var buttons = $('.btn');
var numberOfBtn = buttons.length;

for(var i =0;i < numberOfBtn;i++){
   
    $(buttons[i]).click(function(){
        var btn = this.id;
        userColorList.push(btn);
        
        checkAns(btn);
        playSound(btn);
        makeAnimation(btn);
    });
    
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  


function makeAnimation(className){

    $('.'+className).addClass('pressed');
    
    setTimeout(() => {
        $('.'+className).removeClass('pressed');
    }, 150);

}


