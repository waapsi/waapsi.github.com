var photos = [
	{
		"url" : "/img/IMG_9302.jpg"
	}, {
		"url" : "/img/4873765800_6efb4102a8_o.jpg"
	}, {
		"url" : "/img/4680677888_3efb2b61be_o.jpg",
	}, {
		"url" : "/img/4680052699_c26c63f2fe_o.jpg",
	}, {
		"url" : "/img/4025008882_7ab1ab0a8f_o.jpg",
	}, {
		"url" : "/img/4015499704_c23d40ff93_o.jpg",
	}
];

var slideshowSpeed = 4000;

$(document).ready(function() {

	// Backwards navigation
	$("#back").click(function() {
		stopAnimation();
		navigate("back");
	});
	
	// Forward navigation
	$("#next").click(function() {
		stopAnimation();
		navigate("next");
	});
	
	var interval;
	$("#control").toggle(function(){
		stopAnimation();
	}, function() {
		// Change the background image to "pause"
		$(this).css({ "background-image" : "url(/img/btn_pause.png)" });
		
		// Show the next image
		navigate("next");
		
		// Start playing the animation
		interval = setInterval(function() {
			navigate("next");
		}, slideshowSpeed);
	});
	
	
	var activeContainer = 1;	
	var currentImg = 0;
	var animating = false;
	var navigate = function(direction) {
		// Check if no animation is running. If it is, prevent the action
		if(animating) {
			return;
		}
		
		// Check which current image we need to show
		if(direction == "next") {
			currentImg++;
			if(currentImg == photos.length + 1) {
				currentImg = 1;
			}
		} else {
			currentImg--;
			if(currentImg == 0) {
				currentImg = photos.length;
			}
		}
		
		// Check which container we need to use
		var currentContainer = activeContainer;
		if(activeContainer == 1) {
			activeContainer = 2;
		} else {
			activeContainer = 1;
		}
		
		showImage(photos[currentImg - 1], currentContainer, activeContainer);
		
	};
	
	var currentZindex = -1;
	var showImage = function(photoObject, currentContainer, activeContainer) {
		animating = true;
		
		// Make sure the new container is always on the background
		currentZindex--;

		// Set the background image of the new active container
		$("#index").css({
			"background-image" : "url(" + photoObject.url + ")",
		});
		
		// Fade out the current container
		// and display the header text when animation is complete
		/*$("#index").fadeOut(function() {
			setTimeout(function() {
				$("#headertxt").css({"display" : "block"});
				animating = false;
			}, 1000);
		});*/
		setTimeout(function() {
			animating = false;
		}, 4000);
	};
	
	var stopAnimation = function() {
		// Change the background image to "play"
		$("#control").css({ "background-image" : "url(/img/btn_play.png)" });
		
		// Clear the interval
		clearInterval(interval);
	};
	
	// We should statically set the first image
	navigate("next");
	
	// Start playing the animation
	interval = setInterval(function() {
		navigate("next");
	}, slideshowSpeed);
	
});