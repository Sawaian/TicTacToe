

const gameBoard = ((gameBoardSquare) => {

    let gameBoardArray = [
        [` `], [` `], [` `], 
        [` `], [` `], [` `], 
        [` `], [` `], [` `], 
    ]

    gameBoardArray.forEach(element => {
        let gameBoardObject = document.getElementById("gameBoardSpace");
        let gameBoardSquare = document.createElement('div');
        gameBoardSquare.setAttribute('id', 'gameBoardSquare');
        gameBoardObject.appendChild(gameBoardSquare);

            gameBoardSquare.addEventListener('click',() => {
                console.log("listening");
                if(gameBoardSquare.textContent === ""){
                    element = gameFlow.turn();
                gameBoardSquare.textContent = element;

                console.table(gameBoardArray);
                console.log(element);
            }
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

    let gameSquare = document.querySelectorAll("#gameBoardSquare")
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