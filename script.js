
let square = document.querySelectorAll(".square");
let input = document.getElementById("nameOne")
let submitNameOne = document.getElementById("submitNameOne");
let submitNameTwo = document.getElementById("submitNameTwo");

const gameBoard = (() => {

    let gameBoardArray = [ "", "", "", "", "", "", "", "", ""
    ]

    const x = "x";
    const o = "o";
    let gameStart = true;



    let spaceOne = document. getElementById("spaceOne");
    let spacetwo = document.getElementById("spaceTwo");
    let spaceThree = document. getElementById("spaceThree");
    let spaceFour = document.getElementById("spaceFour");
    let spaceFive = document. getElementById("spaceFive");
    let spaceSix = document.getElementById("spaceSix");
    let spaceSeven = document. getElementById("spaceSeven");
    let spaceEight = document.getElementById("spaceEight");
    let spaceNine = document.getElementById("spaceNine");

    if(gameStart === true)
    {spaceOne.addEventListener('click', ()=> {
        if(spaceOne.textContent === ""){
        spaceOne.textContent = gameFlow.turn();
        gameBoardArray[0] = spaceOne.textContent;
        console.log(gameBoardArray[0]);}
        gameFlow.checkWin();
    });

    spacetwo.addEventListener('click', ()=> {
        if(spaceTwo.textContent === ""){
        spaceTwo.textContent = gameFlow.turn();
        gameBoardArray[1] = spaceTwo.textContent;
        console.log(gameBoardArray);}
        gameFlow.checkWin();
    });

    spaceThree.addEventListener('click', ()=> {
        if(spaceThree.textContent === ""){
        spaceThree.textContent = gameFlow.turn();
        gameBoardArray[2] = spaceThree.textContent;
        console.log(gameBoardArray[2]);}
        gameFlow.checkWin();
    });

    spaceFour.addEventListener('click', ()=> {
        if(spaceFour.textContent === ""){
        spaceFour.textContent = gameFlow.turn();
        gameBoardArray[3] = spaceFour.textContent;
        console.log(gameBoardArray[3]);}
        gameFlow.checkWin();
    });

    spaceFive.addEventListener('click', ()=> {
        if(spaceFive.textContent === ""){
        spaceFive.textContent = gameFlow.turn();
        gameBoardArray[4] = spaceFive.textContent;
        console.log(gameBoardArray[4]);}
        gameFlow.checkWin();
    });

    spaceSix.addEventListener('click', ()=> {
        if(spaceSix.textContent === ""){
        spaceSix.textContent = gameFlow.turn();
        gameBoardArray[5] = spaceSix.textContent;
        console.log(gameBoardArray[5]);}
        gameFlow.checkWin();
    });

    spaceSeven.addEventListener('click', ()=> {
        if(spaceSeven.textContent === ""){
        spaceSeven.textContent = gameFlow.turn();
        gameBoardArray[6] = spaceSeven.textContent;
        console.log(gameBoardArray[6]);}
        gameFlow.checkWin();
    });

    spaceEight.addEventListener('click', ()=> {
        if(spaceEight.textContent === ""){
        spaceEight.textContent = gameFlow.turn();
        gameBoardArray[7] = spaceEight.textContent;
        console.log(gameBoardArray[7]);}
        gameFlow.checkWin();
    });

    spaceNine.addEventListener('click', ()=> {
        if(spaceNine.textContent === ""){
        spaceNine.textContent = gameFlow.turn();
        gameBoardArray[8] = spaceNine.textContent;
        console.log(gameBoardArray[8]);}
        gameFlow.checkWin();
    });

}


    

    return { 
        gameBoardArray,
        x,
        o,
        gameStart,
        square
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

    let currentTurn = turnCounter();

    function turnCounter(){
        let i = 1;
        return function (){
            return i++;
        };
    };

   


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
            gameBoard.gameStart = false;

        }

        function oWin(){
        let score = document.getElementById("score");
        score.textContent = (`${playerTwo.name} is the winner!`);
        gameBoard.gameStart = false;
        
        }
        

        let resetBtn = document.getElementById('reset');
        resetBtn.addEventListener("click", ()=>{
            gameBoard.gameBoardArray = [ "", "", "", "", "", "", "", "", ""
        ]
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