(function ($) {
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('#mouse-over');
	$click = $('#click');
	$submit = $('#submit');
	$timeout = $('#timeout');

	$mouseover.on('mouseover', function () {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click('click', function () {
	    $this = $(this);
		$this.html('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$("form").submit(function (e) {
	    console.log("submit");
	    e.preventDefault();
	    if ($(this).find('input[type="text"]').val() !== '') {
	        $(this).find("input").fadeOut('slow');
	        $(this).append("<h2>Congratulations! You've entered some text!</h2>");
	    }
	});

	$submit.on('submit', function (e) {
	    
	});

	$(document).ready(function () {
	    var x = localStorage.getItem("title");
	    if (x != null)
	    {
	        $('#title').text(x);
	    }
	    $('#keepIt').hide();

	    $('#timeout').hide();

	    setTimeout(function () {
	        $('#timeout').fadeIn('slow');
	    }, 1000);
	});

})(jQuery);

var items = [];

function request() {
    $.ajax({
        method: "GET",
        url: "http://www.mattbowytz.com/simple_api.json?data=quizData",
        dataType: "json"
    })
	.done(function (msg) {
	    items = msg.data;
	    $('#title').text(items[Math.round(Math.random() * items.length)])
        $('#getTitle').val("Change it")
	    $('#keepIt').show();
	});
}

function changeIt() {
    
}

function keepIt() {
    localStorage.setItem("title", $('#title').text());;
}
