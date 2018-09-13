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

function doStageThree(dieRollResult){
    if(dieRollResult===1){
        let userInput = window.prompt("Pink or Hot Pink?");
        
    }
    else if(dieRollResult===2){
        let userInput = window.prompt("Lavender or Violet?");
        
    }
    else if(dieRollResult===3){
        let userInput = window.prompt("Blue or Baby Blue?");
        
    }
    else if(dieRollResult===2){
        let userInput = window.prompt("Green or Neon Green?");
       
    }
    else if(dieRollResult===2){
        let userInput = window.prompt("White or Gray?");
        
    }
    else if(dieRollResult===2){
        let userInput = window.prompt("Rainbow or Black?");
    }
    else if(dieRollResult===2){
        let userInput = window.prompt("Peach or Orange?");
        
    }
    else if(dieRollResult===2){
        let userInput = window.prompt("Maroon or Red?");
        
    }
    return userInput;
}



//*****STAGE 4*****//
function doStageFour(userInput){
    if(userInput === "pink"){
        
    }
    else if(userInput === "hot pink"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    else if(userInput === "lavender"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    else if(userInput === "violet"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    if(userInput === "blue"){
        
    }
    else if(userInput === "baby blue"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    else if(userInput === "green"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    if(userInput === "neon green"){
        
    }
    else if(userInput === "white"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    else if(userInput === "gray"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    else if(userInput === "rainbow"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    if(userInput === "black"){
        
    }
    else if(userInput === "peach"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    if(userInput === "orange"){
        
    }
    else if(userInput === "maroon"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    else if(userInput === "red"){
        let roll = rollDie(10);
        getFortune(roll);
    }
    return roll;
}




//*****GET FORTUNE*****//
function getFortune(roll){
    if(roll === 1){
        window.alert("Anything is possible with a willing heart.");
    }
    if(roll === 2){
        window.alert("The secret to getting ahead is getting started.");
    }
    if(roll === 3){
        window.alert("If you always do what you've always done,"<br>
                      "you'll always get what you've always gotten.");
    }
    if(roll === 4){
        window.alert("Some pursure happiness, you can create it.");
    }
    if(roll === 5){
        window.alert("Your fortune is up to you!");
    }
    if(roll === 6){
        window.alert("Don't waste your time on what might have been.");
    }
    if(roll === 7){
        window.alert("Never fear shadows, they simply mean there's" <br> 
                      "a light shining nearby!");
    }
    if(roll === 8){
        window.alert("Only put off until tomorrow what you are willing" <br>
                      " to die having left undone.");
    }
    if(roll === 9){
        window.alert("The best angle from which to approach any problem is the TRYangle!!");
    }
    if(roll === 10){
        window.alert("Even if you're on the right track," <br>
                      "you'll get run over if you just sit there.");
    }
  function afterFortune() {
    if (confirm("Want another fortune?")){
        let action = playgame()
    }
    else { 
        window.close()
    }
    }


  }  



//*****STAGE 2*****//

function doStageTwo(color) {

    let dieRollResult;
    

     if(color === "purple") {
        let choices = ["apples, oranges, black, white, sweet, savory"];
        let rollResult = rollDie(3); 
        
        
        if (rollResult===1){
            let userInput = prompt("Please choose apples or oranges!");
            if (userInput==="apples"){
                dieRollResult=rollDie(3);
                window.alert("You choose apples and rolled a" + dieRollResult + "!");
            }
            else if(userInput === "oranges"){
                dieRollResult=rollDie(4);
                window.alert("You choose oranges and rolled a" + dieRollResult + "!");
            }
        }
        
        
        else if (rollResult === 2){
            let userInput = prompt("Please choose black or white!");
            if (userInput==="black"){
                dieRollResult=rollDie(3);
                window.alert("You choose black and rolled a" + dieRollResult + "!");
            }
            else if(userInput==="white"){
                dieRollResult=rollDie(5);
                window.alert("You choose white and rolled a" + dieRollResult + "!");
            }
         }
        
         else if (rollResult === 3){
            let userInput = prompt('Please choose sweet or savory!');
            if (userInput === "sweet"){
                dieRollResult=rollDie(7);
                window.alert("You choose sweet and rolled a" + dieRollResult + "!");
            }
            else if (userInput === "savory") {
                dieRollResult=rollDie(6);
                window.alert("You choose savory and rolled a" + dieRollResult + "!");
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
                    window.alert("You choose apples and rolled a" + dieRollResult + "!");
                }
                else if(userInput === "oranges"){
                    dieRollResult=rollDie(4);
                    window.alert("You choose oranges and rolled a" + dieRollResult + "!");
                }
            }
            
            else if (rollResult === 2){
                let userInput = prompt("Please choose black or white!");
                if (userInput==="black"){
                    dieRollResult=rollDie(3);
                    window.alert("You choose black and rolled a" + dieRollResult + "!");
                }
                else if(userInput==="white"){
                    dieRollResult=rollDie(5);
                    window.alert("You choose white and rolled a" + dieRollResult + "!");
                }
             }
            
             else if (rollResult === 3){
                let userInput = prompt('Please choose sweet or savory!');
                if (userInput === "sweet"){
                    dieRollResult=rollDie(7);
                    window.alert("You choose sweet and rolled a" + dieRollResult + "!");
                }
                else if (userInput === "savory") {
                    dieRollResult=rollDie(6);
                    window.alert("You choose savory and rolled a" + dieRollResult + "!");
                }
            }

             else if (rollResult === 4){
                let userInput = prompt('Please choose morning or night!');
                if (userInput === "morning"){
                    dieRollResult=rollDie(4);
                    window.alert("You choose morning and rolled a" + dieRollResult + "!");
                }
                else if (userInput === "night") {
                    dieRollResult=rollDie(8);
                    window.alert("You choose night and rolled a" + dieRollResult + "!");
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
                window.alert("You choose apples and rolled a" + dieRollResult + "!");
            }
            else if(userInput === "oranges"){
                dieRollResult=rollDie(4);
                window.alert("You choose oragnes and rolled a" + dieRollResult + "!");
            }
        }
        
         else if (rollResult === 2){
            let userInput = prompt("Please choose black or white!");
            if (userInput==="black"){
                dieRollResult=rollDie(3);
                window.alert("You choose black and rolled a" + dieRollResult + "!");
            }
            else if(userInput==="white"){
                dieRollResult=rolldie(5);
                window.alert("You choose white and rolled a" + dieRollResult + "!");
            }
         }
        
         else if (rollResult === 3){
            let userInput = prompt('Please choose sweet or savory!');
            if (userInput === "sweet"){
                dieRollResult=rollDie(7);
                window.alert("You choose sweet and rolled a" + dieRollResult + "!");
            }
            else if (userInput === "savory") {
                dieRollResult=rollDie(6);
                window.alert("You choose savory and rolled a" + dieRollResult + "!");
            }
         }
         else if (rollResult === 4){
            let userInput = prompt('Please choose morning or night!');
            if (userInput === "morning"){
                dieRollResult=rollDie(4);
                window.alert("You choose morning and rolled a" + dieRollResult + "!");
            }
            else if (userInput === "night") {
                dieRollResult=rollDie(8);
                window.alert("You choose night and rolled a" + dieRollResult + "!");
            }
        }

         else if (rollResult === 5){
             let userInput = prompt('Please choose cat or dog!');
             if (userInput === "cat") {
                 dieRollResult=rollDie(3);
                 window.alert("You choose cat and rolled a" + dieRollResult + "!");
             }
             else if (userInput === "dog"); {
                dieRollResult=rollDie(5);
                window.alert("You choose cant and rolled a" + dieRollResult + "!");
             }
  
         }
    }
    return dieRollResult;
}

function playGame() { // master function
    window.alert("Welcome to Your Fortune!"); 
    let stageOneColorResult = doStageOne();
    let stageTwoRollResult = doStageTwo(stageOneColorResult);
    let stageThreeResult = doStageThree(stageTwoRollResult);
    let stageFourResult = doStageFour(stageThreeResult);
    let getFortuneHere = getFortune(stageFourResult);
    window.alert(getFortuneHere)

}

playGame();