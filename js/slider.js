/*global $,jQuery,WOW*/
/*jslint node: true */
/*jshint strict:false */
/*
    Author             : Mohamed Alaa Abas
    Author URI         : https://themeforest.net/user/m_alaa     
    Author Email       : mohamed_ll14@yahoo.com
    Author Gmail       : mohamedalaaabas93@gmail.com 
    GitHub Account     : https://github.com/moahmed123
    version For Plugin : 1.0.1 v
*/
(function ($) {
    'use strict';
    $.fn.slideShow = function (speed) {
		var slider         = this,
            lengthDiv      = slider.children().length,
            childernForDiv = slider.children(),
            show,
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
			startSlidShow(); // Start Slide Show 
	    });
	    
	    startSlidShow(); // Perant To Start Slide Show When Loading Page . 
	    
	    /*************************
	     ** All Function To Use ** 
	     **
	     **/
	    function nextSlider(activeClass){        	
	    	activeClass.removeAttr('class').next().addClass('active');        	  
	    	if($('.slider .active').next().length == 0 && $('.slider .active').length == 0){
	    		slider.children().first().addClass('active');
	    	}
	    }
	    function prevSlider(activeClass){        	
	    	activeClass.removeAttr('class').prev().addClass('active');         	       	  
	    	if($('.slider .active').prev().length == 0 && $('.slider .active').length == 0){
	    		slider.children().last().addClass('active');
	    	}     	    
	    }	    
	    function SlideShow(){    		    		
    		$('.slider .active').removeAttr('class').next().addClass('active');
    		if($('.slider .active').next().length == 0 && $('.slider .active').length == 0){
    			slider.children().first().addClass('active');
    		}
    	}
	    function StopSlidShow(){
	    	clearInterval(show);
	    }
	    function startSlidShow(){
	    	show = setInterval(SlideShow, speeduser);
	    }		
	    //show = setInterval(SlideShow, speed);
	};
	
}( jQuery ));








