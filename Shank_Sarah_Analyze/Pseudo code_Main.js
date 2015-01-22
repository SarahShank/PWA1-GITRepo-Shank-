 Sarah Shank
 * 12.18.14
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


//main.js obtains all other JavaScript function, instances, and arrays

//set up of a self executing function
(function() {

    //define variables, number of people, people, and names.
    var numOfPeople = 3;
    var people = []; //empty array
    var names = ['Max', 'Sarah', 'Mrs.Claus', 'Santa', 'Frosty']; //array names
    var interval;

    //set up for loop for a 3 person object
    for (var i = 0; i < numOfPeople; i++) {

        //random number generator for name. length which is 5 and randomly chooses name
        var personIndex = Math.floor(Math.random() * names. length);

        //Keyword to set up new person object (instantiate person objects)
        var person = new Person(names [personIndex], i + 1);


        populateHTML(person.name, 'r' + (i + 1) + 'c1'); //populate cell 1 (c1) with name parameter from constructor function
        populateHTML(person.job, 'r' + (i + 1) + 'c2'); //populate cell 2 (c2) with name parameter from constructor function

        people.push(person); //push personIndex adds new person to array
        names.splice(personIndex, 1); //array splice

    }
    //this is to make sure that the interval is running on time and to get rid of any duplicates
    clearInterval(interval);
    //sets the interval to 30
    //setInterval function method will continue calling function until clearInterval
    interval = setInterval(runUpdate, 1000 / 30);

    //function to output persons name and persons job
    function populateHTML(data, field) {
        var id = document.getElementById(field);
        id.innerHTML = data;
    }

    //for each loop  to execute in the runUpdate ()
    function runUpdate() {
        people.forEach(function (element) { //element = items in the people array
            console.log(element); //printing results to console
            element.update(); //update the prototype method in the person.js file
        });
    }
})();