
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
        square[i].addEventListener('click', ()=> {
            if(square[i].textContent=== "" ){
                square[i].textContent = gameFlow.turn();
                gameBoardArray[i] = square[i].textContent;
                console.log(gameBoardArray[i])
                console.log(gameBoardArray);
            }
                gameFlow.checkWin();
            });
    }}


    generateGame();

    

    return { 
        gameBoardArray,
        x,
        o,
        square,
     };
})();

//Player factory.
const player = (name, mark) => {

    document.getElementById("formOne").addEventListener("submit", function(event){
        getUserName();
        event.preventDefault();
    
    });

    let getNameOne = () => {
        let userOne = document.getElementById("nameOne").value;
        return userOne;
    }


        return { 
            name,
            mark,
            getNameOne,
            };
        };



let userName = player.getNameOne();

let playerOne = player(userName(), "x");
let playerTwo = player('jacob', "o");


//game flow

const gameFlow = (() =>{

    let playerTurn = false;
    let gameOver = false;

     function turn(){ 
         if(playerTurn === false){
             playerTurn = true;
             return playerOne.mark;
         }
         else if (playerTurn === true){
             playerTurn = false;
            return playerTwo.mark;
         }
     }

     function gameEnd(){
        playerTurn = null;
        gameOver = true;
     }
   


    let checkWin = function(){  
        let gameBoardArray = gameBoard.gameBoardArray;
        let score = document.getElementById("score");
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
        else{
            tie();
        }

        };



        function xWin(){
            score.textContent = (`${playerOne.name} is the winner!`);
            gameEnd();

        }

        function oWin(){
            score.textContent = (`${playerTwo.name} is the winner!`);
            gameEnd();
        }


        function tie(){
            let tieCount = 0;
            for(let i = 0; i < gameBoard.gameBoardArray.length; i++){
                    if(gameBoard.gameBoardArray[i] != "" ){
                        tieCount++
                        if(tieCount === 9 && gameOver === false){
                            score.textContent = "Tied Game!";
                        }
                    }
                }
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
            score.textContent = "";
            playerTurn = false;
            gameOver = false;

        });

        return {
            turn,
            checkWin, 
        };

})();

//use a for loop to iterate over the child elements of a div. Assign the array objects as [i]. 