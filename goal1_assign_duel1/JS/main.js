/**
 * Created by SarahShank on 12/1/14.
 */
/* Sarah Shank
12/1/2014
Duel fight game
Assignment 1 Week 1
 */
//
//self- executing function
(function(){

    console.log ("FIGHT!!!"); // printing to browser console the word FIGHT!!!
                                //program starts

 //player names
    var playerOneName = "Spiderman"; //variable name of player 1
    var playerTwoName = "Batman";    //variable name of player 2

//player damage
    var player1Damage = 20; //variable for damage taken from player 1
    var player2Damage = 20; //variable for damage taken from player 2

//player health
    var playerOneHealth = 100; // variable of players health status for player 1
    var playerTwoHealth = 100; // variable of players health status for player 2

    var round = 0; //variable for fight round number

    // clicking the OK button will run a loop repeating the game through each round

    function fight(){

        console.log("in the fight function");// printing in the fight function to the browser console
    // a pop up that alerts the player 1 & 2 plus there health and the *START* title
        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

        // having the game loop through up to ten rounds unless there is a winner or loser declared
        for(var i=0;i < 10;i++){
            //code will go here
            //console.log(i);
            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage *.5; //variable using a random math formula to predict the player outcome
            var minDamage2 = player2Damage *.5;
            var f1= Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2= Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage on players during the rounds in the game
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);
            //printing the players results to the browser console.
            console.log(playerOneName+":"+playerOneHealth+""+playerTwoName+":"+playerTwoHealth);
            //variable for checking the players results as to who won the game

            var results = winnerCheck();
            console.log(results);

            //telling the computer that if there is no winner to print on the browser

            if(results ==="no winner"){ // if results are exactly equal to no winner
                round++; // adding plus 1 to each round
                //pop up alerts player about player 1 & 2 
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER*"+playerTwoName+":"+playerTwoHealth);

            }else { // if there is a winner stop the rounds and alert the players results of the game
                alert(results);
                break; //stopping the games rounds
            };

        };

    };

    function winnerCheck(){ // declaring the winners results
        //code will go here
        console.log("in winnerCheck FN");// displaying on the browser the players game results

        var result="no winner"; //variable for results for no winner

        if(playerOneHealth<1 && playerTwoHealth<1){ // stating that is player 1 & 2 both have <1 than both die
            result= "You Both Die"; // result equals you both die
        }else if(playerOneHealth<1){ // if player 1 health is <1
            result= playerTwoName+" WINS!!!" //the result of player 2 will show  player 2 WINS!!
        }else if(playerTwoHealth<1){ // if player 2 health is <1 than result will show
            result= playerOneName+" WINS!!!" // result shows player 1 will show  player 1 WINS!!

        };
       return result;

    };

    /**The program gets started below**/
    console.log("program starts");
    fight();

})();
