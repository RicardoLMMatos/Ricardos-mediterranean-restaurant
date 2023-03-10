	//Countdown timer to redirect to index.html after 5 seconds
    
    
    // Set the number of seconds to wait before redirecting the user
    let seconds = 5;
			
    // Display the countdown timer to the user
      let count = setInterval(function() {
      document.getElementById("countdown").innerHTML = "You will be automatically redirected in " + seconds + " seconds...";
      seconds--;
      if (seconds < 0) {
      clearInterval(count);
        
    // Redirect the user to the specified page
      window.location = "index.html";
      }
    }, 1000);

 