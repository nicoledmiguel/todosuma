$(document).ready(function(){
    $('#comedores-carousel').slick({
	    arrows: false,
	    dots: false,
	    slidesToShow: 5,
	    centerMode: true,
	    slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		focusOnSelect: true,
		responsive: [
			{
		      breakpoint: 1600,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		      }
		    },
		    {
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
		    },
		    {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
		    }
	  	]
  	});

  	$(".dropdown button").click(function() {
  		var dropdown = $(this).siblings('.dropdown-content');

  		if (dropdown.is(":visible")){
  			dropdown.hide();
  			$(this).find('.fa-chevron-right').show();
  			$(this).find('.fa-chevron-down').hide();
        } else{
        	dropdown.show();
        	$(this).find('.fa-chevron-down').show();
  			$(this).find('.fa-chevron-right').hide();
        }
	});
	
	$("#preloader > div > img").animate({top: "-100px"}, 400)
				 .animate({top: "30px"}, 300)
				 .animate({top: "-60px"}, 350)
				 .animate({top: "0"}, 300, function() {
				    // Animation complete.
				    $("#preloader").animate({backgroundColor: "#FFFFFF"}, 800, function () {
				    	$("#preloader").fadeOut(800);
				    })
				  });

});
