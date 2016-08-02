// Check off specific Todos by clicking
	$("ul").on("click", "li", function() { //events only work to existing elem when page load i.e. set listener to ul and specify to only listen to "li" in this case
	$(this).toggleClass("completed"); //same as classList in vanilla js
});

// Add Todo delete event
$("ul").on("click", "span", function(event) { //events only work to existing elem when page load i.e. set listener to ul and specify to only listen to "span" in this case
	$(this).parent().fadeOut(1000, function() {
		$(this).remove(); //this method removes whatever is selected
	});
	event.stopPropagation(); //stops the inner elem trigger to bubble up (and auto trigger) all events on the html page  
});

// Add Todo by pressing Enter on keyboard
$("input[type='text'").on("keypress", function(event) {
	if (event.which === 13) { //the Enter key has a code = 13 read: http://www.cambiaresearch.com/
		//Grab new toDo taxt from input
		newTodo = $(this).val();
		$(this).val(""); ///grabs value of the selected item
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + newTodo + "</li>"); //attaches a string to the selected elem
	};
})

// Add listener for + icon
$(".fa-plus").on("click", function() {
	// Toggle fadeIn and fadeOut for input when + icon is clicked
	$("input").fadeToggle("fast", "linear");
});











