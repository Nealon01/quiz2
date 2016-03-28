var items = [];

function request() {
    $.ajax({
        method: "GET",
        url: "http://www.mattbowytz.com/simple_api.json?data=quizData",
        dataType: "json"
    })
	.done(function (msg) {
	    items = msg.data;
	    changeIt();
	    $('#changeIt').show();
	    $('#keepIt').show();
	});
}

function changeIt() {
    $('#title').text(items[Math.round(Math.random() * items.length)])
}

function keepIt() {
    document.cookie = "title=" + $('#title').text();
}

(function ($) {
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouse-over');
	$click = $('.click');
	$submit = $('.submit');
	$timeout = $('.timeout');

	$mouseover.on('mouseover', function() {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click('click', function() {
		$this.html('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$submit.on('submit', function (e) {
	    console.log("here");
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').foreach(function() {
				$(this).fadeout('slow');
			});
			$(this).appendwith("<h2>Congratulations! You've entered some text!</h2>");
		}
	});

	$(document).ready(function () {
	    var x = document.cookie;
	    if (x != null)
	    {
	        $('#title').text(x.substring(6, x.length));
	    }
	    $('#changeIt').hide();
	    $('#keepIt').hide();
	    setTimeout(function () {
	        $('.timeout').fadeIn('slow');
	    }, 1000);
	});

})(jQuery);

