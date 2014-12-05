// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
    //error in spelling validqte/validate **
	var validqte = function(query){ //fixed error by replacing double == with single = **

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){ //fixed error from single = to === equal

			query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === "") {
            query = query.substring(0, query.length - 1);
        }; // fixed error by adding closing curly brace **
		
		// Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again."); // fixed error by adding closing " **
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};
		
		search(query);
	};
	
	// Finds search matches 
	var search = function(query){ //fixed error by adding opening curly brace **
		
		// split the user's search query string into an array
		var queryArray = [query].join(" ");// fixed error by adding array brackets around query[]**
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            //possible typo error in dbitem **
            var dbitem = db[i].toLowerCase.substring(0, dbTitleEnd);//error fixed removed () function case fixed camel capes in tolowercase / toLowerCase **

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                //possible typo error in gitem/dbitem **
                var qitem = queryArray[ii].toLowerCase();

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);
                if (compare !== -1) {
                    results.push(db[i]);
                };
            }; // fixed error by adding closing curly brace **
        };// fixed error by adding closing curly brace **
		
		results.sort();
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
    //camel case is incorrect for onsubmit/onSubmit **
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
    //camel case is incorrect for onsubmit/onSubmit **
	document.forms[0].onsubmit = function() {
        var query = searchInput.value;
        validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    }; // fixed error by adding closing curly brace **

})();