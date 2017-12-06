/*global $,jQuery,WOW*/
/*jslint node: true */
/*jshint strict:false */
/*
    Author          : Mohamed Alaa 
    Author URI      : https://themeforest.net/user/m_alaa     
    Author Email    : mohamed_ll14@yahoo.com
    Author Gmail    : mohamedalaaabas93@gmail.com 
*/
$(function () {
    "use strict";    
    var slider         = $('.slider'),
        lengthDiv      = $('.slider').children().length,        
        childernForDiv = $('.slider').children();
       
        $('#next').on('click', function () {        	
        	var activeClass    = $('.slider .active');
        	nextSlider(activeClass) ; 	
        });
        
        $('#prev').on('click', function () {        	
        	var activeClass    = $('.slider .active');        	
        	prevSlider(activeClass);        	
        });
        
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
});







