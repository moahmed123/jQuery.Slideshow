/*global $,jQuery,WOW*/
/*jslint node: true */
/*jshint strict:false */
/*
    Author             : Mohamed Alaa Abas
    Author URI         : https://themeforest.net/user/m_alaa/portfolio?ref=M_Alaa     
    Author Email       : mohamed_ll14@yahoo.com
    Author Gmail       : mohamedalaaabas93@gmail.com 
    GitHub Account     : https://github.com/moahmed123
    version For Plugin : 1.0.2 v
*/
(function ($) {
    'use strict';
    $.fn.slideShow = function (checkslide, speed) {
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
            speeduser   = speed + 10000; // By Default 10000
            
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
                checkslider(checkslide, speeduser); // check For sTop Slider Or Start .    
            },3000);            
	    });
        // Run Slider To Show 
	    checkslider(checkslide, speeduser);
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
            $('.slider .active').toggleClass('active old-slide');
            var oldClass = $('.slider .old-slide');
            
            oldClass.next().addClass('active');
            
            oldClass.removeClass('old-slide');
            
            if ($('.slider .active').next().length === 0 && $('.slider .active').length === 0) {
                slider.children().first().addClass('active');
            }            
        }
        // Check To Slider Stop Or Start .
        function checkslider(checkslide, speeduser) {
            if (checkslide !== 'stop') {
                // Start SlideShow
                startSlidShow(speeduser); // Perant To Start Slide Show When Loading Page .	
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