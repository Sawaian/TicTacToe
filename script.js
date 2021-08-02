

const gameBoard = ((gameBoardSquare) => {
    
    function playerId(){   
        let i = 0;
            return function()
                {return i++;}
        };

        

    const gameBoard = (id) => {
        return {id};
    };

    let gameBoardArray = [];

    for(let i = 0; i <=8; i++){
    let newGameBoard = gameBoard(playerId());
    gameBoardArray.push(newGameBoard);
    };

    gameBoardArray.forEach(element => {
        let gameBoardObject = document.getElementById("gameBoardSpace");
        let gameBoardSquare = document.createElement('div');
        gameBoardSquare.setAttribute('id', 'gameBoardSquare');
        gameBoardObject.appendChild(gameBoardSquare);

            gameBoardSquare.addEventListener('click',() => {
                console.log("listening");
                if(gameBoardSquare.textContent === ""){
                gameBoardSquare.textContent = gameFlow.turn();
            }
            });
            console.log(p)
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

    let gameSquare = document.querySelectorAll("#gameBoardSquare")
    let playerTurn = playerTwo;

     function turn(){ 
         if(playerTurn === playerTwo){
             playerTurn = playerOne;
             return playerOne.mark;
         }
         else if (playerTurn = playerTwo){
            return playerTwo.mark;
         }
     }

    let currentTurn = turnCounter();

    function turnCounter(){
        let i = 1;
        return function (){
            return i++;
        };
    };

    const winCondition = () => {
        myLibrary.index
    }

    for(let i = 0; i < 9; i++){
    console.log(currentTurn());}
    return {
        turn
    };

})();