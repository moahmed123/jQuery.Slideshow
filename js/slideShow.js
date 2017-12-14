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
            show,
            StopSlidShow,
            nextSlider,
            prevSlider,
            checkslider,
            SlideShowInfinite,
            startSlidShow,
            activeSlideShow  = $('.slider .active'),
            // Default Of Start Plugin .            
			setting       = $.extend({
				checkslide : 'start', // Check For plugin Start Or Stop 
				speed      : 2000  // Check For plugin Speed 
			},options);     
			   
            console.log(setting.checkslide + " && " + setting.speed);
            
        $('#next').on('click', function () {
            StopSlidShow();
            var activeClass    = $('.slider .active');
            nextSlider(activeClass);
        });
        $('#prev').on('click', function () {
            StopSlidShow();   // stop Slide Show
            var activeClass    = $('.slider .active');
            prevSlider(activeClass);
	    });
	    	    
	    $('#next, #prev').on('mouseleave', function () {
            setTimeout(function () {
               checkslider(setting.checkslide, setting.speed); // check For sTop Slider Or Start .    
            },3000);            
	    });
        // Run Slider To Show
        activeSlideShow.next().addClass('next'); 
	    checkslider(setting.checkslide, setting.speed);
	    /*************************
	     ** All Function To Use ** 
	     ** 
	     **
	     **/
	    function nextSlider(activeClass) {
            // New Add Old
            activeClass.toggleClass('active old-slide');
            var oldClass = $('.slider .old-slide');
            oldClass.next().addClass('active');
            oldClass.delay(100).queue(function (nxt) {
                $(this).removeClass('old-slide');
                nxt();
            });
            if ($('.slider .active').next().length === 0 && $('.slider .active').length === 0) {
                slider.children().first().addClass('active');
            }
        }
	    function prevSlider(activeClass) {
            activeClass.toggleClass('active old-slide');
            var oldClass = $('.slider .old-slide');
            oldClass.prev().addClass('active');
            oldClass.removeClass('old-slide');
            if ($('.slider .active').prev().length === 0 && $('.slider .active').length === 0) {
                slider.children().last().addClass('active');
            }
        }
        
        function SlideShowInfinite() {        	        	        
        	$('.slider').children().removeClass('active');
        	$('.slider .next').addClass('active').removeClass('next');
        	$('.slider .active').next().addClass('next');
        	        	        	
            if ($('.slider .active').next().length === 0 && $('.slider .active').length === 0) {
            	slider.children().first().addClass('active');
            	slider.children().first().next().addClass('next');
            }            
        }
        // Check To Slider Stop Or Start .
        function checkslider(checkslide, speeduser) {
            if (checkslide !== 'stop') {
            	var speedUserAppend = speeduser + 100 ;
                // Start SlideShow
                startSlidShow(speedUserAppend); // Perant To Start Slide Show When Loading Page .	
		    } else {
                // Stop Slideshow
                StopSlidShow();   // stop Slide Sho
            }
        }
	    function StopSlidShow() {
            clearInterval(show);
        }
	    function startSlidShow(speedUserSet) {
            show = setInterval(SlideShowInfinite, speedUserSet);
        }
    };
}(jQuery));