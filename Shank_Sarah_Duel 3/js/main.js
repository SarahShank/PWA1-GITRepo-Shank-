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
     (function() { //run function

         console.log("FIGHT!!!"); // printing to browser console the word FIGHT!!!
         //program starts

         var playersArray = [   //creating an object array for fighters name, damage, and health.
             {
                 name: 'Spiderman', //fighters name
                 damage: 20,			//fighters damage
                 health: 100         //fighters health
             },
             {
                 name: 'Batman',   //fighters name
                 damage: 20,       //fighters damage
                 health: 100       //fighters health 
			 }];
         var button = document.querySelector('.buttonblue');  //interacting with the DOM to retrieve button

          var round = 1; //defining round 1

         //document.querySelector('#fightround').innerHTML = 'Start Round: ' + round + ' FIGHT!';
        document.querySelectorAll('#fightround').innerHTML = 'Start Round: ' + round + ' FIGHT!';
		console.log('above line 35');
		
        button.onClick = function (e) { //button function to begin the game
             fight()                 //game begins
         };

         function fight() {          //fuction to run fight

             if (round < 10);         //if round is less than 10 fight 
             button.innerHTML = "FIGHT!";

             var minDamage1 = playersArray[0].damage * .5; //setting up object array for players damage deductions
             var minDamage2 = playersArray[1].damage * .5; //setting up object array for players damage deductions
			//random math genorator code deduction damage from each player when round begins
             var f1 = Math.floor(Math.random() * (playersArray[0].damage - minDamage1) + minDamage1);
             var f2 = Math.floor(Math.random() * (playersArray[1].damage - minDamage2) + minDamage2);

             console.log(f1); //printing results to console
             console.log(f2); //printing results to console

             playersArray[0].health -= f1; //fighters health array deductions
             playersArray[1].health -= f2; //fighters health array deductions

             document.querySelector('#kabal p').innerHTML = playersArray[0].health; //accessing the DOM tryng to retrieve an element through querry selector in the innerHTML
             document.querySelector('#kratos p').innerHTML = playersArray[1].health; //accessing the DOM tryng to retrieve an element through querry selector in the innerHTML

             console.log(playersArray[0].name + ":" + playersArray[0].health + " " + playersArray[1].name + ":" + playersArray[1].health); //printing results of arrayt to the console

             var result = winnerCheck(); //variable results function	
             console.log(result);       //printing results to the console
  
             if (results === 'No Winner') { //if no winner run code below
                 document.querySelector('#fightround').innerHTML = 'Round: ' + round++ + results;

             }                           //else if run code below
             else if (result = 'Spiderman Wins');
             {


             }
		 }

         function winnerCheck() {      //setup function to run winnercheck

             results = 'No Winner';    //results no winner

             if (playersArray[0].health < 1 && playersArray[1].health < 1) {  //if statement array interacting with the DOM trying to retrive information from the inner HTML to get results to display
                 document.querySelector('#fightround').innerHTML = results = 'You Both Die A Tragic Death!';
                 playersArray[0].health = 100; //object array for health
                 playersArray[1].health = 100; //object array for health
                 round = 1;  
                 fightButton.innerHTML = 'Game Over';

             }
             else if (playersArray[0].health < 1) { // else if statement array interacting with the DOM trying to retrive information from the inner HTML to get results to display
                 document.querySelector('#fightround').innerHTML = results = playersArray[0].name + 'Victory! You Are The Champion!';   
                 playersArray[0].health = 100;   //object array for health
                 playersArray[0].health = 100;   //object array for health
                 round = 1;
                 button.innerHTML = 'Game Over';  //button to display gameover when round ends.
             }
             return results  //return fighters results
		 }
     })(); //end function braces

   
