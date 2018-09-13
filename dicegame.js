"use strict";

function rollDie(numberOfSides) {
    let roll = Math.floor(Math.random()*numberOfSides) + 1;
    return roll;
}

//*****STAGE 1*****//
function doStageOne() {
    let color;
    let colors = ["purple", "pink", "blue"];
    let rollResult = rollDie(3);
    color = colors[rollResult - 1];
    window.alert("You rolled a " + rollResult + " and got the color " + color + ".");
    return color;
}


//*****STAGE 3 *****//
function doStageThree(dieRollResult){
    let userInput = "";
    if(dieRollResult===1){
        userInput = prompt("Pink or Hot Pink?");
        
    }
    else if(dieRollResult===2){
        userInput = prompt("Lavender or Violet?");
        
    }
    else if(dieRollResult===3){
        let userInput = prompt("Blue or Baby Blue?");
        
    }
    else if(dieRollResult===4){
        let userInput = prompt("Green or Neon Green?");
       
    }
    else if(dieRollResult===5){
        let userInput = prompt("White or Gray?");
        
    }
    else if(dieRollResult===6){
        let userInput = prompt("Rainbow or Black?");
    }
    else if(dieRollResult===7){
        let userInput = prompt("Peach or Orange?");
        
    }
    else if(dieRollResult===8){
        userInput = prompt("Maroon or Red?");
        
    }
    return userInput;
}




//*****STAGE 4*****//
function doStageFour(userInput){
    let roll = ("");
    if(userInput === "pink"){
        alert("ready for your fortune...!?");
        alert("Oops, ran out of fortunes! :(");
    }
    else if(userInput === "hot pink"){
        let roll = rollDie(10);
        alert("You rolled a " + (roll) + " ready for your fortune...!?");
        getFortune(roll);
    }
    else if(userInput === "lavender"){
        let roll = rollDie(10);
        alert("You rolled a " + (roll) + " ready for your fortune...!?");
        getFortune(roll);
    }
    else if(userInput === "violet"){
        let roll = rollDie(10);
        alert("You rolled a " + (roll) + " ready for your fortune...!?");
        getFortune(roll);
    }
    if(userInput === "blue"){
        alert("ready for your fortune...!?");
        alert("Oops, ran out of fortunes! :(");
    }
    else if(userInput === "baby blue"){
        let roll = rollDie(10);
        alert("You rolled a " + (roll) + " ready for your fortune...!?");
        getFortune(roll);
    }
    else if(userInput === "green"){
        let roll = rollDie(10);
        alert("You rolled a " + (roll) + " ready for your fortune...!?");
        getFortune(roll);
    }
    if(userInput === "neon green"){
        alert("ready for your fortune...!?");
        alert("Oops, ran out of fortunes! :(");
    }
    else if(userInput === "white"){
        let roll = rollDie(10);
        alert("You rolled a " + (roll) + " ready for your fortune...!?");
        getFortune(roll);
    }
    else if(userInput === "gray"){
        let roll = rollDie(10);
        alert("You rolled a" + (roll) + " ready for your fortune...!?");
        getFortune(roll);
    }
    else if(userInput === "rainbow"){
        let roll = rollDie(10);
        alert("You rolled a" + (roll) + "ready for your fortune...!?");
        getFortune(roll);
    }
    if(userInput === "black"){
        alert("ready for your fortune...!?");
        alert("Oops, ran out of fortunes! :(");
    }
    else if(userInput === "peach"){
        let roll = rollDie(10);
        alert("You rolled a " + (roll) + " ready for your fortune...!?");
        getFortune(roll);
    }
    if(userInput === "orange"){
        alert("ready for your fortune...!?");
        alert("Oops, ran out of fortunes! :(");
    }
    else if(userInput === "maroon"){
        let roll = rollDie(10);
        alert("You rolled a " + (roll) + " ready for your fortune...!?");
        getFortune(roll);
    }
    else if(userInput === "red"){
        let roll = rollDie(10);
        alert("You rolled a " + (roll) + " ready for your fortune...!?");
        getFortune(roll);
    }
    return roll;
}




//*****GET FORTUNE*****//
function getFortune(roll){
    if(roll === 1){
        window.alert("Anything is possible with a willing heart.");
    }
    else if(roll === 2){
        window.alert("The secret to getting ahead is getting started.");
    }
    else if(roll === 3){
        window.alert("If you always do what you've always done, you'll always get what you've always gotten.");
    }
    else if(roll === 4){
        window.alert("Some pursure happiness, you can create it.");
    }
    else if(roll === 5){
        window.alert("Your fortune is up to you!");
    }
    else if(roll === 6){
        window.alert("Don't waste your time on what might have been.");
    }
    else if(roll === 7){
        window.alert("Never fear shadows, they simply mean there's a light shining nearby!");
    }
    else if(roll === 8){
        window.alert("Only put off until tomorrow what you are willing to die having left undone.");
    }
    else if(roll === 9){
        window.alert("The best angle from which to approach any problem is the TRYangle!!");
    }
    else if(roll === 10){
        window.alert("Even if you're on the right track you'll get run over if you just sit there.");
    }
    return roll;

  }  


//*****STAGE 2*****//

function doStageTwo(color) {

    let dieRollResult;
    

     if(color === "purple") {
        let choices = ["apples, oranges, black, white, sweet, savory"];
        let rollResult = rollDie(8); 
        
        
        if (rollResult===1){
            let userInput = prompt("Please choose apples or oranges!");
            if (userInput==="apples"){
                dieRollResult=rollDie(3); 
                window.alert("You choose apples and rolled a " + dieRollResult + "!");
            }
            else if(userInput === "oranges"){
                dieRollResult=rollDie(4);
                window.alert("You choose oranges and rolled a " + dieRollResult + "!");
            }
        }
        
        
        else if (rollResult === 2){
            let userInput = prompt("Please choose black or white!");
            if (userInput==="black"){
                dieRollResult=rollDie(8);
                window.alert("You choose black and rolled a " + dieRollResult + "!");
            }
            else if(userInput==="white"){
                dieRollResult=rollDie(5);
                window.alert("You choose white and rolled a " + dieRollResult + "!");
            }
         }
        
         else if (rollResult === 3){
            let userInput = prompt('Please choose sweet or savory!');
            if (userInput === "sweet"){
                dieRollResult=rollDie(7);
                window.alert("You choose sweet and rolled a " + dieRollResult + "!");
            }
            else if (userInput === "savory") {
                dieRollResult=rollDie(6);
                window.alert("You choose savory and rolled a " + dieRollResult + "!");
            }
        }
    

    }
        
     else if(color === "pink" ){

            let choices = ["apples, oranges, black, white, sweet, savory, morning, night"];
            let rollResult = rollDie(3); 

            if (rollResult===1){
                let userInput = prompt("Please choose apples or oranges!");
                if (userInput==="apples"){
                    dieRollResult=rollDie(3);
                    window.alert("You choose apples and rolled a " + dieRollResult + "!");
                }
                else if(userInput === "oranges"){
                    dieRollResult=rollDie(4);
                    window.alert("You choose oranges and rolled a " + dieRollResult + "!");
                }
            }
            
            else if (rollResult === 2){
                let userInput = prompt("Please choose black or white!");
                if (userInput==="black"){
                    dieRollResult=rollDie(3);
                    window.alert("You choose black and rolled a " + dieRollResult + "!");
                }
                else if(userInput==="white"){
                    dieRollResult=rollDie(5);
                    window.alert("You choose white and rolled a " + dieRollResult + "!");
                }
             }
            
             else if (rollResult === 3){
                let userInput = prompt('Please choose sweet or savory!');
                if (userInput === "sweet"){
                    dieRollResult=rollDie(7);
                    window.alert("You choose sweet and rolled a " + dieRollResult + "!");
                }
                else if (userInput === "savory") {
                    dieRollResult=rollDie(6);
                    window.alert("You choose savory and rolled a " + dieRollResult + "!");
                }
            }

             else if (rollResult === 4){
                let userInput = prompt('Please choose morning or night!');
                if (userInput === "morning"){
                    dieRollResult=rollDie(4);
                    window.alert("You choose morning and rolled a " + dieRollResult + "!");
                }
                else if (userInput === "night") {
                    dieRollResult=rollDie(8);
                    window.alert("You choose night and rolled a " + dieRollResult + "!");
                }
             }
         }

     else {
        let choices = ["apples, oranges, black, white, sweet, savory, morning, night, cat, dog"];
        let rollResult = rollDie(3); 

        if (rollResult===1){
            let userInput = prompt("Please choose apples or oranges!");
            if (userInput==="apples"){
                dieRollResult=rollDie(3);
                window.alert("You choose apples and rolled a " + dieRollResult + "!");
            }
            else if(userInput === "oranges"){
                dieRollResult=rollDie(4);
                window.alert("You choose oragnes and rolled a " + dieRollResult + "!");
            }
        }
        
         else if (rollResult === 2){
            let userInput = prompt("Please choose black or white!");
            if (userInput==="black"){
                dieRollResult=rollDie(3);
                window.alert("You choose black and rolled a " + dieRollResult + "!");
            }
            else if(userInput==="white"){
                dieRollResult=rollDie(5);
                window.alert("You choose white and rolled a " + dieRollResult + "!");
            }
         }
        
         else if (rollResult === 3){
            let userInput = prompt('Please choose sweet or savory!');
            if (userInput === "sweet"){
                dieRollResult=rollDie(7);
                window.alert("You choose sweet and rolled a " + dieRollResult + "!");
            }
            else if (userInput === "savory") {
                dieRollResult=rollDie(6);
                window.alert("You choose savory and rolled a " + dieRollResult + "!");
            }
         }
         else if (rollResult === 4){
            let userInput = prompt('Please choose morning or night!');
            if (userInput === "morning"){
                dieRollResult=rollDie(4);
                window.alert("You choose morning and rolled a " + dieRollResult + "!");
            }
            else if (userInput === "night") {
                dieRollResult=rollDie(8);
                window.alert("You choose night and rolled a ", + dieRollResult + "!");
            }
        }

         else if (rollResult === 5){
             let userInput = prompt('Please choose cat or dog!');
             if (userInput === "cat") {
                 dieRollResult=rollDie(3);
                 window.alert("You choose cat and rolled a ", + dieRollResult + "!");
             }
             else if (userInput === "dog"); {
                dieRollResult=rollDie(5);
                window.alert("You choose cant and rolled a ", + dieRollResult + "!");
             }
  
         }
    }
    return dieRollResult;
}

   function endGameControls() {
    if (confirm("Want another fortune?")) {
        repeatGame();
    }
    else {
        close_window();
    }


function repeatGame() {
    let counter=Infinity
    while (counter === Infinity) {
        playGame();
    }

}

function close_window() {
    if (confirm("Close Tab?")) {
      close();
    }
  }
 }


function playGame() { // master function
    window.alert("Welcome to Your Fortune!"); 
    let stageOneColorResult = doStageOne();
    let stageTwoRollResult = doStageTwo(stageOneColorResult);
    let stageThreeInputResult = doStageThree(stageTwoRollResult);
    let stageFourColorResult = doStageFour(stageThreeInputResult);
    getFortune(stageFourColorResult);
    endGameControls();

}

playGame();