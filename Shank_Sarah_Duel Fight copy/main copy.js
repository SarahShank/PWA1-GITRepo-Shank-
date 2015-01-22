/**
 * Created by SarahShank on 12/11/14.
 */
/* Sarah Shank
12/11/2014
Duel fight game
Assignment 3 Week 3
 */
//
//self- executing function
(function(){

    console.log ("FIGHT!!!"); // printing to browser console the word FIGHT!!!
                                //program starts

								
								
	var player1_txt = document.querySelector( "#player1_text").querySelector('p');
	console.log('help');
	var player2_txt = document.querySelector("#player2_text").querySelector('p');
	var round_txt = document.querySelector('h4');
	var button = document.getElementById('fight_btn');
	//var button = document.getElementById('buttonblue');
	console.log();
								
    //var player1= ["Spiderman", 20, 100]; // variable player1 set up array for name, damage , and health*
	//var player2= ["Batman", 20, 100];   //variable player2 set up array for name, damage, and health*

 /*//player names
    var playerOneName = "Spiderman"; //variable name of player 1
    var playerTwoName = "Batman";    //variable name of player 2

//player damage
    var player1Damage = 20; //variable for damage taken from player 1
    var player2Damage = 20; //variable for damage taken from player 2

//player health
    var playerOneHealth = 100; // variable of players health status for player 1
    var playerTwoHealth = 100; // variable of players health status for player 2
*/
     //click round set up **
	 button.addEventListener('click',fight, false);
	 
	 //array of objects for bother fight players
	 
	 var players = [{
		 name:'Spiderman',
	     damage:20,
	     health:100
	 },{
		 name:'Batman',
		 damage:20,
		 health:100
	 }];
	 
	 
    var round = 1; //variable for fight round number

   
   //telling DOM innerHTML text for top of HTML page
   
   round_txt.innerHTML = 'Click FIGHT BUTTON With Epic Force To Start!',
   player1_txt.innerHTML = players[0].name + ': ' + players[0].health;
   player2_txt.innerHTML = players[1].name + ': ' + players[1].health; 

    function fight(){ // clicking the OK button will run a loop repeating the game through each round

	player1_txt.innerHTML = players[0].name + ': ' + players[0].health;
	player2_txt.innerHTML = players[1].name + ': ' + players[1].health;

       // console.log("in the fight function");// printing in the fight function to the browser console
    // alert that pops up to inform the player about the players name, health and the *START* title *
         //alert(player1[0]+":"+player1[2]+"  *START*  "+player2[0]+":"+player2[2]);
		 
		
		 
         

        // having the game loop through up to ten rounds unless there is a winner or loser declared
        //for(var i=0;i < 10;i++){
            //code will go here
            //console.log(i);
            //random formula is - Math.floor(Math.random() * (max - min) + min);
			//define variables for players using array index *
   			 //var minDamage1 = player1[1] * .5;
        //variable using a random math formula to predict the player outcome
		//define variables for players using array index *
			 //var minDamage2 = player2[1] * .5;
        //array using a random math formula to predict the player outcome *
            var f1= Math.floor(Math.random()* players[0].damage + players[0].damage * .5);		         //random generator code
            var f2= Math.floor(Math.random()* players[1].damage + players[1].damage * .5);
            //console.log(f1);
            //console.log(f2);

            //inflict damage on players during the rounds in the game
			//array used to inflict damage deductions *
			 players[0].health -= f1;  // player one deducting
             //array used to inflict damage deductions *
             players[1].health-= f2;  // player two deductin

            //console.log(player1 health using object array index);
            //console.log(player2 health using object array index);
            //printing the players results to the browser console.
            console.log(players[0].health, players[1].health);
            //variable for checking the players results as to who won the game

            var results = winnerCheck(); // variable result equals winnerCheck
            console.log(results); // printing to browser the results
             
			 round_text.innerHTML = 'round #' + round + ' results:';
			 // adding plus 1 to each round**
			 round ++;
            //telling the computer that if there is no winner to print on the browser

            if(results === "no winner"){ // if results are exactly equal to no winner
                // adding plus 1 to each round
                //pop up alerts player about players status of names, health, and round number using array index *
               // alert(player1[0]+":"+player1[2]+" *ROUND "+round+" OVER*"+player2[0]+":"+player2[2]);
			   //showing in the DOM innerhtml player 1 & 2 name and health results **
			   player1_txt.innerHTML = players[0].name + ': ' + players[0].health;
			   //showing in the DOM innerhtml player 1 & 2 name and health results **
			   player2_txt.innerHTML = players[1].name + ': ' + players[1].health;

            }else { // if there is a winner stop the rounds and alert the players results of the game        
			player1_txt.innerHTML = results;
			player2_txt.innerHTML = '';
			
			//disable button using addEventListener if true** 
			button.removeEventListener('click', fight, false);
			
			document.querySelector('.buttonblue').innerHTML = 'FIGHT OVER!';
                //alert(results);
                //break; //stopping the games rounds
            }

        }

    //};

    function winnerCheck(){ // declaring the winners results
        //code will go here
        //console.log("in winnerCheck FN");// displaying on the browser the players game results
		//using array index to return players winning/losing results *
        var result="no winner"; //variable for results for no winner
 		if (players[0].health < 1 && players[1].health < 1){ // stating that is player 1 & 2 both have <1 than both die**
          
		  result= "Both suffered a tragic death - GAME OVER!"; // result equals you both die
        }else if(players[0].health < 1){ // if player 1 health is <1
            result= players[1].name + " WINS!!!" //the result of player 2 will show  player 2 WINS!! 
        }else if(players[1].health <1){ // if player 2 health is <1 than result will show
            result = players[0].name + " WINS!!!" // result shows player 1 will show  player 1 WINS!!

        }
       return result;

    }

    /**The program gets started below**/
    //console.log("program starts");
    //fight();

})();
//I did not delete my week 2 code and text because I will still use them as a reference in future classes. Thank you!!! 