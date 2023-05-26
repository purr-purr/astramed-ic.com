// Preloader
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
			document.body.classList.add('loaded');
			document.body.classList.remove('loaded_hiding');
	}, 500);
}

// Import HTML template
$(function () {
    // layout
    $("#included__header").load("templates/header.html");
    $("#included__footer").load("templates/footer.html");
    // any
    $("#included__contact-block").load("templates/contact-block.html");
    $("#included__preloader").load("templates/preloader.html");
    $("#included__impraired-mode").load("templates/impaired-mode.html");
});

// ---------------------------------------------------------------------------

// show full text on Home Page
$(document).ready(function () {
    $('#home-desc__read-more-btn').on('click', function () {
        $('.home-desc__info--hide-text').css('display', 'block');
        $(this).hide();
    });
});