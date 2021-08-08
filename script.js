
let square = document.querySelectorAll(".square");

const gameBoard = (() => {
    let gameBoardArray = [ "", "", "", "", "", "", "", "", ""
    ]

    const x = "x";
    const o = "o";

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


    let i = 0;

    let checkWin = function(){  
           if(gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[2] === gameBoardArray[0] && gameBoardArray[0] === x)
           {console.log("win")}
           if(gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[5] === gameBoardArray[3] && gameBoardArray[3] === x)
           {console.log("win")}
           if(gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[8] === gameBoardArray[6] && gameBoardArray[6] === x)
           {console.log("win")}
           if(gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[6] === gameBoardArray[0] && gameBoardArray[0] === x)
           {console.log("win")}
           if(gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[7] === gameBoardArray[1] && gameBoardArray[1] === x)
           {console.log("win")}
           if(gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[8] === gameBoardArray[2] && gameBoardArray[2] === x)
           {console.log("win")}
           if(gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[8] === gameBoardArray[0] && gameBoardArray[0] === x)
           {console.log("win")}
           if(gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[6] === gameBoardArray[2] && gameBoardArray[2] === x)
           {console.log("win")}

           //o win checks

           if(gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[2] === gameBoardArray[0] && gameBoardArray[0] === o)
           {console.log("win")}
           if(gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[5] === gameBoardArray[3] && gameBoardArray[3] === o)
           {console.log("win")}
           if(gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[8] === gameBoardArray[6] && gameBoardArray[6] === o)
           {console.log("win")}
           if(gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[6] === gameBoardArray[0] && gameBoardArray[0] === o)
           {console.log("win")}
           if(gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[7] === gameBoardArray[1] && gameBoardArray[1] === o)
           {console.log("win")}
           if(gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[8] === gameBoardArray[2] && gameBoardArray[2] === o)
           {console.log("win")}
           if(gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[8] === gameBoardArray[0] && gameBoardArray[0] === o)
           {console.log("win")}
           if(gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[6] === gameBoardArray[2] && gameBoardArray[2] === o)
           {console.log("win")}


    };

    let spaceOne = document. getElementById("spaceOne");
    let spacetwo = document.getElementById("spaceTwo");
    let spaceThree = document. getElementById("spaceThree");
    let spaceFour = document.getElementById("spaceFour");
    let spaceFive = document. getElementById("spaceFive");
    let spaceSix = document.getElementById("spaceSix");
    let spaceSeven = document. getElementById("spaceSeven");
    let spaceEight = document.getElementById("spaceEight");
    let spaceNine = document.getElementById("spaceNine");

    spaceOne.addEventListener('click', ()=> {
        if(spaceOne.textContent === ""){
        spaceOne.textContent = gameFlow.turn();
        gameBoardArray[0] = spaceOne.textContent;
        console.log(gameBoardArray[0]);}
        checkWin();
    });

    spacetwo.addEventListener('click', ()=> {
        if(spaceTwo.textContent === ""){
        spaceTwo.textContent = gameFlow.turn();
        gameBoardArray[1] = spaceTwo.textContent;
        console.log(gameBoardArray);}
        checkWin();
    });

    spaceThree.addEventListener('click', ()=> {
        if(spaceThree.textContent === ""){
        spaceThree.textContent = gameFlow.turn();
        gameBoardArray[2] = spaceThree.textContent;
        console.log(gameBoardArray[2]);}
        checkWin();
    });

    spaceFour.addEventListener('click', ()=> {
        if(spaceFour.textContent === ""){
        spaceFour.textContent = gameFlow.turn();
        gameBoardArray[3] = spaceFour.textContent;
        console.log(gameBoardArray[3]);}
        checkWin();
    });

    spaceFive.addEventListener('click', ()=> {
        if(spaceFive.textContent === ""){
        spaceFive.textContent = gameFlow.turn();
        gameBoardArray[4] = spaceFive.textContent;
        console.log(gameBoardArray[4]);}
        checkWin();
    });

    spaceSix.addEventListener('click', ()=> {
        if(spaceSix.textContent === ""){
        spaceSix.textContent = gameFlow.turn();
        gameBoardArray[5] = spaceSix.textContent;
        console.log(gameBoardArray[5]);}
        checkWin();
    });

    spaceSeven.addEventListener('click', ()=> {
        if(spaceSeven.textContent === ""){
        spaceSeven.textContent = gameFlow.turn();
        gameBoardArray[6] = spaceSeven.textContent;
        console.log(gameBoardArray[6]);}
        checkWin();
    });

    spaceEight.addEventListener('click', ()=> {
        if(spaceEight.textContent === ""){
        spaceEight.textContent = gameFlow.turn();
        gameBoardArray[7] = spaceEight.textContent;
        console.log(gameBoardArray[7]);}
        checkWin();
    });

    spaceNine.addEventListener('click', ()=> {
        if(spaceNine.textContent === ""){
        spaceNine.textContent = gameFlow.turn();
        gameBoardArray[8] = spaceNine.textContent;
        console.log(gameBoardArray[8]);}
        checkWin();
    });

    gameBoardArray.forEach(element => {

    
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

    return {
        turn
    };

  

})();

//use a for loop to iterate over the child elements of a div. Assign the array objects as [i]. 