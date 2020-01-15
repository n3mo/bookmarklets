// This extends the default behavior of mycap.capital.edu roster
// display to include the number of students actually enrolled in the
// class

(function() {
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
}).call(this);


