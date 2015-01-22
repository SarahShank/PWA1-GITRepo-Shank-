**Sarah Shank
 * 12-18-14
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

//person.js obtains advanced objects and 'blueprint'


//create self executing function
(function(){

    //add the person object to the global window object/ main.js requires it
    window.Person = Person;

    //set up job choices and actions that the person will preform
    Person.jobs = ['Cookie Baker', 'Gift Wrapper', 'Sleigh Driver', 'Toy Builder'];
    Person.actions = ['Baking Treats', 'Wrapping Gifts', 'Building Toys', 'Flying the Sleigh'];

    //constructor function
    //set up function with person name and row location
    function person(name,row){
       console.log('Person Created:', name); //printing results to the console.log

        //this key word to define name
        this.name = name;

        //sets up for random person using a random generator
        this.action = Person.actions[Math.floor(Math.random() * person.actions.length)];

        //sets up for random job using a random generator
        this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];

        //keyword this to define row so JS will know the row in HTML to refresh updates
        this.row = row;

        //displays initial action
        var id = document.getElementById('r' + this.row +'c3');
        id.innerHTML = this.action;
    }
    //the person update method
    //Function occurs 30 times a second
    //random generator determines if the action changes for each person
    Person.prototype.update = function(){

        if(Math.floor(Math.random() <.01)){
        var i = Math.floor(Math.random() * Person.actions.length);
        this.action = Person.actions[i]; //this action prototype = action in Person.actions
        var id = document.getElementById("r" + this.row + "c3"); //define variable using DOM to manipulate row
        id.innerHTML = this.action; //change action
    }
}

})();

