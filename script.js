

const gameBoard = ((gameBoardSquare) => {
    
    function playerId(){   
        let i = 0;
            return function()
                {return i++;}
        };

    let gameBoard = () => {
        this.id = playerId();
        return this.id;
    };

    let gameBoardArray = [];

    for(let i = 0; i <=8; i++){
    let newGameBoard = gameBoard();
    gameBoardArray.push(newGameBoard);
    };

    gameBoardArray.forEach(element => {
        let gameBoardObject = document.getElementById("gameBoardSpace");
        let gameBoardSquare = document.createElement('div');
        gameBoardSquare.setAttribute('id', 'gameBoardSquare');
        gameBoardObject.appendChild(gameBoardSquare);

            gameBoardSquare.addEventListener('click',() => {
                console.log("listening");
                gameBoardSquare.textContent = gameFlow.turn();
            });
    });

    return { 
        gameBoardArray
     };
})();

//Player factory.
const player = (name, mark) => {
         console.table(gameBoard.gameBoardArray);

        return { name, mark }
        };


let playerOne = player('jeff', "x");
let playerTwo = player('jacob', "o");

//game flow

const gameFlow = (() =>{

    let gameSquare = document.getElementById("gameBoardSquare")

    let playerTurn = playerTwo;

     function turn(){ if(playerTurn === playerTwo){
       if(gameSquare.textContent === "o"){
           return null;
       }
       else {
       playerTurn = playerOne;
        return playerOne.mark;
    }}
    else {
        playerTurn = playerTwo;
        return  playerTwo.mark;
    }}
    
    let currentTurn = turnCounter();

    function turnCounter(){
        let i = 1;
        return function (){
            return i++;
        };
    };

    for(let i = 0; i < 9; i++){
    console.log(currentTurn());}
    return {
        turn
    };
})();