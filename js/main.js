$(document).ready(function(){
	typedJS()
	NavbarScrollFixed();
	scrollSpy();
	scrollTo();
	setSkillBar();
	filterCategory();
	
})

function typedJS(){
	var typed = new Typed('.intro-h3 > span', {
		strings: ["Web Developer", "Desginer", "Educator"],
		typeSpeed: 70,
		backSpeed: 40,
		loop: true,
		showCursor: false
	})
}


function NavbarScrollFixed(){
	/* Makes navbar fixed at the top when scrolling */
	$(window).scroll(function(event){
		var scroll = $(window).scrollTop();

		if(scroll > 60){
			$('nav').addClass("navbar-scrolled");
		} else {
			$('nav').removeClass("navbar-scrolled");
		}
	});
}

function scrollSpy(){
	$('body').scrollspy({ target: '.navbar' });
}

function setSkillBar(){
	/* Sets the percentage fill of the skill bars in the skills section based on the data-value assigned */
	$(".skill-bar").map(function(){
		var skillAmt = $(this).attr("data-value");
		$(this).css("width", skillAmt + "%");
	});

}

function scrollTo(){
	$('.navbar-nav li a, .scroll-icon').on('click', function(){
		var sectionLink = $(this).attr("data-scroll");
		$('html, body').animate({
        	scrollTop: $("#" + sectionLink).offset().top
    	}, 1000);
	});
}


function filterCategory(){
	$('.categories li.category').on('click', function(e){

	var displayElement = {
		show: function show(showEl){
				$(showEl).show();
			},
		hide: function hide(hideEl){
			$(hideEl).hide();
		}
	}

	/* Removes the is-active class, if exists from all the category links*/
	$(".categories li.category").removeClass('is-active');
	/* Adds is-active class to the category that was clicked*/
	$(this).addClass('is-active');
	var category = $(this).attr('id');

	/* If all is clicked, it will add the class hide-it and remove it to create an animated effect*/
	if(category == "all"){
		$('.portfolio-item').addClass('hide-it');
		setTimeout(function(){
			displayElement.show('.hide-it');
			$('.portfolio-item').removeClass('hide-it');
		}, 300);
	} else {
		$('.portfolio-item').addClass('hide-it');

		setTimeout(function(){
			displayElement.show('.hide-it');
			$('.' + category).removeClass('hide-it');
			displayElement.hide('.hide-it');
		}, 300);

	}
});
}
/* Category Filter - Filters portfolio items in portfolio section based on the category selected */



