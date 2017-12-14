/*global $,jQuery,WOW*/
/*jslint node: true */
/*jshint strict:false */
/*
    Author             : Mohamed Alaa Abas
    Author URI         : https://themeforest.net/user/m_alaa/portfolio?ref=M_Alaa     
    Author Email       : mohamed_ll14@yahoo.com
    Author Gmail       : mohamedalaaabas93@gmail.com 
    GitHub Account     : https://github.com/moahmed123
    version For Plugin : 1.1.0 v
*/
(function ($) {
    'use strict';
    $.fn.slideShow = function (options) {
		var slider         = this,
            lengthDiv      = slider.children().length,
            childernForDiv = slider.children(),
            clickToNext    = $('.click-next'),
            clickToPrev    = $('.click-prev'),
            show,
            StopSlidShow,
            nextSlider,
            prevSlider,
            checkslider,
            SlideShowInfinite,
            startSlidShow,
            activeSlideShow  = $(slider.selector + ' .active'),
            // Default Of Start Plugin .            
			setting       = $.extend({
				checkslide : 'start', // Check For plugin Start Or Stop 
				speed      : 2000  // Check For plugin Speed 
			},options);     
			   
        clickToNext.on('click', function () {        	
            StopSlidShow(); // To Stop Slide Infinite  When Click To Prev Or Next .
            var activeClass    = $(slider.selector + ' .active'); // Cached Class Active .
            nextSlider(activeClass); // Call Function  NextSlider .
        });
        clickToPrev.on('click', function () {        	
            StopSlidShow(); // To Stop Slide Infinite When Click To Prev Or Next .
            var activeClass  = $(slider.selector + ' .active');
            prevSlider(activeClass);  // Call Function  PrevSlider .
	    });
	    	    
	    $('.click-next, .click-prev').on('mouseleave', function () {
            setTimeout(function () {
               checkslider(setting.checkslide, setting.speed); // check For sTop Slider Or Start .    
            },3000);            
	    });
        // Run Slider To Show
        activeSlideShow.next().addClass('next'); 
	    checkslider(setting.checkslide, setting.speed);
	    /*************************
	     ** All Function To Use ** 
	     ** ==(Fun)== nextSlider(activeClass) .
	     **
	     **/
	    // Function To Use For go Next Element .
	    function nextSlider(activeClass) {	    	
            // New Add Old
            activeClass.toggleClass('active old-slide'); // toggle For Class Active And Old-Slide .
            // Cahed Old Class To Use . 
            var oldClass = $(slider.selector + ' .old-slide');
            // Use Next Element For OldSlide To Active [ show ] . 
            oldClass.next().addClass('active');
            // Remove class Name oldSlide before .01 s . 
            oldClass.delay(100).queue(function (nxt) {
                $(this).removeClass('old-slide');
                nxt();
            });
            
            // Validation For Check When Length For Img Finished active first img To Show . 
            if ($(slider.selector + ' .active').next().length === 0 && $(slider.selector + ' .active').length === 0) {
                slider.children().first().addClass('active');
            }
        }
        // Function To Use For go Prev Element .
	    function prevSlider(activeClass) {
			// New Add Old	    		    	
            activeClass.toggleClass('active old-slide');  // toggle For Class Active And Old-Slide .
            // Cahed Old Class To Use .
            var oldClass = $(slider.selector + ' .old-slide');
            // Use prev Element For OldSlide To Active [ show ] .
            oldClass.prev().addClass('active');
            // Remove class Name oldSlide .
            oldClass.removeClass('old-slide');
            
            // Validation For Check When Length For Img Finished active first img To Show .
            if ($(slider.selector + ' .active').prev().length === 0 && $(slider.selector + ' .active').length === 0) {
                slider.children().last().addClass('active');
            }
        }
		// Function Used For Infinite Loop To show Element  .       
        function SlideShowInfinite() {        	        	    
        	// Remove Class Active For Elements To Hide All .    
        	$(slider.selector).children().removeClass('active');
        	// Add Class Active To Class Next And Remove Class Next :) ;  
        	$(slider.selector + ' .next').addClass('active').removeClass('next');
        	// Add Class Next For Element next Class Active . 
        	$(slider.selector + ' .active').next().addClass('next');
        	
        	// Validation For Check When Length For Img Finished active first img To Show .        	        	
            if ($(slider.selector + ' .active').next().length === 0 && $(slider.selector + ' .active').length === 0) {
            	slider.children().first().addClass('active'); // Add Active For First Element .
            	slider.children().first().next().addClass('next');// Add class Next For Second Element .  
            }            
        }
        // Function To Check Slider Stop Or Start .
        function checkslider(checkslide, speeduser) {
        	// Condation For Check .
            if (checkslide !== 'stop') {
            	var speedUserAppend = speeduser + 100 ;
                // Start SlideShow
                startSlidShow(speedUserAppend); // Perant To Start Slide Show When Loading Page .	
		    } else {
                // Stop Slideshow
                StopSlidShow();   // stop Slide Sho
            }
        }
        // Function To Stop Slide Show . 
	    function StopSlidShow() {
            clearInterval(show);
        }
        // Function To Start Slide Show [ infinite ] .
	    function startSlidShow(speedUserSet) {
            show = setInterval(SlideShowInfinite, speedUserSet);
        }
    };
}(jQuery));