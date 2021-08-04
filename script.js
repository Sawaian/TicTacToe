
let square = document.querySelectorAll(".square");

const gameBoard = (() => {
    let gameBoardArray = [
        [` `], [` `], [` `], 
        [` `], [` `], [` `], 
        [` `], [` `], [` `], 
    ]

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let checkWin = function(){
        if(winConditions[0,1,2] === gameBoardArray){
            console.log("Win");
        };
    };

    square.forEach(square => addEventListener('click', () => {
        console.log("listening");
    }));

    gameBoardArray.forEach(element => {

            // square.addEventListener('click',() => {
            //     console.log("listening");
            //     if(square.textContent === ""){
            //         element = gameFlow.turn();
            //     square.textContent = element;

            //     console.table(gameBoardArray);
            //     console.log(element);

            
            // }
            // });
            
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



    for(let i = 0; i < 9; i++){
    console.log(currentTurn());}
    return {
        turn
    };

  

})();