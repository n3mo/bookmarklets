// This extends the default behavior of mycap.capital.edu roster
// display to include the number of students actually enrolled in the
// class

// Bookmarklet link:
// javascript:(function(){s=document.createElement('script');s.type='text/plain';s.src='https://raw.githubusercontent.com/n3mo/bookmarklets/master/mycap_roster.js?v='+parseInt(Math.random()*99999999);document.body.appendChild(s);})();

window.addEventListener('load', (function() {
    // Grab nodes containing student info
    var names = document.querySelectorAll("[id^=roster_studentname]");
    var N_enrolled = names.length;

    // Default text (shows how many seats are available, NOT how many are
    // enrolled. So if your course is OVER capacity, this info cannot
    // reveal this)
    var availability = document.getElementById("section-seat-availability").innerHTML;

    // Update "seats available" to include
    document.getElementById("section-seat-availability")
	.innerHTML = availability + " (" + N_enrolled + " enrolled)";
}).call(this));


