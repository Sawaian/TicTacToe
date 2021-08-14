
let square = document.querySelectorAll(".square");
let input = document.getElementById("nameOne")
let submitNameOne = document.getElementById("submitNameOne");
let submitNameTwo = document.getElementById("submitNameTwo");

const gameBoard = (() => {

    let gameBoardArray = [ "", "", "", "", "", "", "", "", ""
    ]

    const x = "x";
    const o = "o";


    function generateGame(){
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener('click', true, ()=> {
            if(square[i].textContent=== "" ){
                square[i].textContent = gameFlow.turn();
                gameBoardArray[i] = square[i].textContent;
                console.log(gameBoardArray[i])
                console.log(gameBoardArray);
            }
                gameFlow.checkWin();
            });
    }}

    function endGame(){
        for(let i = 0; i < square.length; i++){
            square[i].removeEventListener('click', true, ()=> {
            if(square[i].textContent=== "" ){
                square[i].textContent = gameFlow.turn();
                gameBoardArray[i] = square[i].textContent;
                console.log(gameBoardArray[i])
                console.log(gameBoardArray);    
        }
        gameFlow.checkWin();
    });
        }
    }

    generateGame();

    

    return { 
        gameBoardArray,
        x,
        o,
        endGame,
        square,
     };
})();

//Player factory.
const player = (name, mark) => {


        return { 
            name,
            mark,
            }
        };



let playerOne = player(playerOneName(), "x");
let playerTwo = player('jacob', "o");


function playerOneName(){
    let nameOne = document.getElementById("nameOne").value

    return nameOne;
}

//game flow

const gameFlow = (() =>{

    let playerTurn = false;;

     function turn(){ 
         if(playerTurn === false){
             playerTurn = true;
             return playerOne.mark;
         }
         else if (playerTurn = true){
             playerTurn = false;
            return playerTwo.mark;
         }
     }


   


    let checkWin = function(){  
        let gameBoardArray = gameBoard.gameBoardArray;
        let x = gameBoard.x;
        let o = gameBoard.o;
        if(gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[2] === gameBoardArray[0] && gameBoardArray[0] === x)
        {
            xWin();
        }
        if(gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[5] === gameBoardArray[3] && gameBoardArray[3] === x)
        {
            xWin();
        }
        if(gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[8] === gameBoardArray[6] && gameBoardArray[6] === x)
        {
            xWin();
        }
        if(gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[6] === gameBoardArray[0] && gameBoardArray[0] === x)
        {
            xWin();
        }
        if(gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[7] === gameBoardArray[1] && gameBoardArray[1] === x)
        {
            xWin();
        }
        if(gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[8] === gameBoardArray[2] && gameBoardArray[2] === x)
        {
            xWin();
        }
        if(gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[8] === gameBoardArray[0] && gameBoardArray[0] === x)
        {
            xWin();
        }
        if(gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[6] === gameBoardArray[2] && gameBoardArray[2] === x)
        {
            xWin();
        }

        //o win checks

        if(gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[2] === gameBoardArray[0] && gameBoardArray[0] === o)
        {
            oWin();
        }
        if(gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[5] === gameBoardArray[3] && gameBoardArray[3] === o)
        {
            oWin();
        }
        if(gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[8] === gameBoardArray[6] && gameBoardArray[6] === o)
        {
            oWin();
        }
        if(gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[6] === gameBoardArray[0] && gameBoardArray[0] === o)
        {
            oWin();
        }
        if(gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[7] === gameBoardArray[1] && gameBoardArray[1] === o)
        {
            oWin();
        }
        if(gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[8] === gameBoardArray[2] && gameBoardArray[2] === o)
        {
            oWin();
        }
        if(gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[8] === gameBoardArray[0] && gameBoardArray[0] === o)
        {
            oWin();
        }
        if(gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[6] === gameBoardArray[2] && gameBoardArray[2] === o)
        {
            oWin();
        }

        };

        function xWin(){
            let score = document.getElementById("score");
            score.textContent = (`${playerOne.name} is the winner!`);
            gameBoard.endGame();

        }

        function oWin(){
        let score = document.getElementById("score");
        score.textContent = (`${playerTwo.name} is the winner!`);
        gameBoard.gameStart = false;
        
        }

       
        

        let resetBtn = document.getElementById('reset');
        resetBtn.addEventListener("click", ()=>{
           
            for(let i = 0; i < gameBoard.gameBoardArray.length; i++){
                gameBoard.gameBoardArray[i] = "";
            }
            console.log(gameBoard.gameBoardArray);
            square.forEach(element =>{
                element.textContent = "";
            });

        });

        return {
            turn,
            checkWin, 
            xWin,
            oWin,
            resetBtn,
        };

})();

//use a for loop to iterate over the child elements of a div. Assign the array objects as [i]. 