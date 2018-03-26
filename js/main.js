
// delay my code from executing until all DOM assets have been loaded //
$(document).ready();


 //User is entering a city name
 $('#submit-btn').on('submit', function(event) {
 
 //prevent the submit button from refreshing the page
    event.preventDefault();
   
//City name stored in a var

    var city = $('#city-type').val();

//city name submited to function to change background
	console.log(city); 
    setBackground(city);
});


 function setBackground(city) { 
 
 // if the user enters New York City / NYC / New York change the CSS class to 'nyc'
 	if(city == 'new york city' || city == 'nyc' || city == 'new york') {
      $('body').attr('class','nyc');
    }
    // if the user enters SF/San Francisco/Bay Area change the CSS class to 'sf'
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').attr('class','sf');
    }
    // if the user enters Austin/ATX change the CSS class to 'austin'
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }
    // if the user enters Los Angeles/LA/LAX change the CSS class to 'la'
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }
    // if the user enters Sydney/SYD change the CSS class to 'sydney'
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }
};
