var player1 = prompt("Player One (Blue color), enter your name!")
var player1color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two (Red color), enter your name!")
var player2color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr')

//sets color for a particular button
function changeColor(rowIndex, colIndex, color){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

//returns color for a particular button
function returnColor(rowIndex, colIndex){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex){
    var colorReport = returnColor(5,colIndex);
    for (var row=5; row > -1; row--){
        colorReport = returnColor(row,colIndex);

        //check if the element is gray, and return the row if true
        if (colorReport === 'rgb(128, 128, 128)'){
            return row
        }
    }
}

//checks if 4 cells have the same color, other than gray and not undefined
function colorMatchCheck(one, two, three, four){
    return (one === two && two === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}

//check for horizontal wins
function horizontalWinCheck(){
    for (var row = 0; row < 6 ; row++){
        for (var col = 0; col <4 ; col++){
            if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))){
                console.log('horizontal win');
                return true;
            }
            else{
                continue;
            }
        }
    }
}

//check for vertical wins
function verticalWinCheck(){
    for (var col = 0; col < 7 ; col++){
        for (var row = 0; row <3 ; row++){
            if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))){
                console.log('vertical win');
                return true;
            }
            else{
                continue;
            }
        }
    }
}

//game logic
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1color;

$('h3').text(player1 + " it is your turn, pick a column to drop in!")


$('.board button').on('click',function(){
    var col = $(this).closest('td').index();

    var bottomAvail = checkBottom(col);

    changeColor(bottomAvail, col, currentColor);

    if(horizontalWinCheck() || verticalWinCheck()){
        $('h1').text(currentName+", You Have Won!");
        $('h3').fadeOut('fast');
        $('h2').fadeOut('fast');

    }

    currentPlayer = currentPlayer * -1;

    if(currentPlayer === 1){
        currentName = player1;
        $('h3').text(currentName+ " it is your turn")
        currentColor = player1color;
    }
    else{
        currentName = player2;
        $('h3').text(currentName+ " it is your turn")
        currentColor = player2color;
    }

})
