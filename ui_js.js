$(function(){

	/* skip navigation  
	$('#goto_main').on('focus',function(){
		$('.skip').css('top','0px');
	})
	.on('blur', function(){
		$('.skip').css('top','-40px');
	});
	*/

	//menu Scroll	
	$(function() {
		$('a.mscroll').bind('click', function(event) {		
			if ( $(window).width() < 981 ){
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - 40
				}, 1000, 'easeInOutExpo');
				event.preventDefault();
			}else {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - 140
				}, 1000, 'easeInOutExpo');
				event.preventDefault();	
			}
		});
	});


	// 사이드바
	var sidelay = $('#menu');
	
	$('#side_onoff').on('click', function(){
		sidelay.toggleClass('open');
		if (sidelay.hasClass('open')){
			sidelay.stop(true).animate({
				right:'0px'
			},duration, 'easeOutBack');
		} else {
			sidelay.stop(true).animate({
				right:'-200px'
			},duration, 'easeOutBack');
		}
	});


	/* back to top */
	$('#scrollTop').click(function(e) {
		$('html, body').stop().animate({scrollTop: 0},500,"easeOutExpo");
		e.preventDefault();
	});


	var duration = 300;

	/* 슬라이드 */
	$('.slideshow').each(function(){
		
		var container = $(this),
			 slideGroup = container.find('.slideshow-slides'),
			 slides = slideGroup.find('.pic'),
			 navi = container.find('.slideshow-nav'),
			 indicator = container.find('.slideshow-indicator'),

			 slideCount = slides.length,
			 indicatorHTML = '',
			 currentIndex = 0,
			 easing = 'easeInOutExpo',
			 interval = 2000,
			 timer;
		
		slides.each(function(i){
			$(this).css({left:100*i+'%'});
			indicatorHTML += '<a href="#">' + (i+1) + '</a>';
		});

		indicator.html(indicatorHTML);

		function goToSlide(index){

			slideGroup.animate({left:-100*index+'%'}, duration, easing);
			
			currentIndex = index;

			updateNav();
		}

		function updateNav() {
			
			var navPrev = navi.find('.prev'),
				 navNext = navi.find('.next');

			if(currentIndex === 0) {
				navPrev.addClass('disabled');
			} else {
				navPrev.removeClass('disabled');
			}

			if(currentIndex === slideCount -1) {
				navNext.addClass('disabled');
			} else {
				navNext.removeClass('disabled');
			}
			
			indicator.find('a').removeClass('on').eq(currentIndex).addClass('on');
		}

		function startTimer() {

			timer = setInterval(function(){

				var nextIndex = (currentIndex +1)%slideCount;
				goToSlide(nextIndex);
			}, interval);
		}

		function stopTimer(){
			clearInterval(timer);
		}

		navi.on('click', 'a', function(event){
			event.preventDefault();
			if ($(this).hasClass('prev')) {
				goToSlide(currentIndex-1);
			} else {
				goToSlide(currentIndex+1);
			}
		});

		indicator.on('click', 'a', function(event){
			event.preventDefault();
			if (!$(this).hasClass('on')) {
				goToSlide($(this).index());
			} 
		});

		container.on({
			mouseenter: stopTimer,
			mouseleave: startTimer
		});

		goToSlide(currentIndex);
		startTimer();
		
	});


	/* 아코디언 */ 
	var dll = $('.acco');
	var dtt = $('.acco dt'); 

	dtt.each(function(){

		var choice = $(this);
		var cdd = choice.next();
		var alldd = dll.find('dd');
		var alldt = dll.find('dt');

		alldd.hide();
		alldt.eq(0).addClass('open');
		alldd.eq(0).show();

		function copen(){
			
			alldt.removeClass('open');
			alldd.removeClass('open');
			choice.addClass('open');
			cdd.addClass('open');
			alldd.slideUp();
			cdd.slideDown();
		}

		choice.click(function(){

			copen(choice,cdd);							

		});
	});



});