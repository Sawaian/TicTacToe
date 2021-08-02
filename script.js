

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
                gameBoardSquare.textContent = playerOne.mark;
            });
    });

    return { 
        gameBoardArray
     };
})();

//Player factory.
const player = (name, mark) => {
    let gameBoardSquare = document.getElementById("gameBoardSquare");
         console.table(gameBoard.gameBoardArray);

        return { name, mark }
        };


let playerOne = player('jeff', "x");
const playerTwo = player('jacob', "o");

//game flow

const gameFlow = (() =>{

    
    
    let currentTurn = turnCounter();

    function turnCounter(){
        let i = 1;
        return function (){
            return i++;
        };
    };

    const turn = () => {
        if(currentTurn % 2 === 0){
            playerTwo();
        }
        else {
            playerOne.marker();
        }
        }

    if(playerOne === turn){
        if(gameBoardSquare.textContent === "x" || "o"){
            return null;
        }
        else{
            gameBoardSquare.textContent = "x";
            turnCounter();
        }
    }
    if(playerTwo === turn){
        if(gameBoardSquare.textContent === "x" || "o"){
            return null;
        }
        else{
            gameBoardSquare.textContent = "o";
            turnCounter();
        }

    };
    console.log("being run");
    return {turn };

    
})();